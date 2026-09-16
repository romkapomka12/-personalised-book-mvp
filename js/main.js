const form = document.querySelector('#bookForm');
const resultCard = document.querySelector('#resultCard');
const photoInput = document.querySelector('#childPhoto');
const photoPreview = document.querySelector('#photoPreview');
const formStatus = document.querySelector('#formStatus');
const submitButton = document.querySelector('#submitButton');

const MAX_PHOTO_SIZE = 10 * 1024 * 1024;
const FORM_ID_PLACEHOLDER = 'YOUR_FORM_ID';

const themeLabels = {
  space: 'Космічна пригода',
  forest: 'Казковий ліс',
  dinosaurs: 'Світ динозаврів',
};

const languageLabels = {
  uk: 'Українська',
  en: 'English',
};

let activePhotoUrl = null;

function clearPhotoUrl() {
  if (activePhotoUrl) {
    URL.revokeObjectURL(activePhotoUrl);
    activePhotoUrl = null;
  }
}

function resetPhotoPreview(message = 'Тут зʼявиться локальний preview фото') {
  clearPhotoUrl();
  photoPreview.classList.remove('is-error');
  photoPreview.replaceChildren();

  const text = document.createElement('span');
  text.textContent = message;
  photoPreview.append(text);
}

function showPhotoError(message) {
  clearPhotoUrl();
  photoPreview.classList.add('is-error');
  photoPreview.replaceChildren();

  const text = document.createElement('span');
  text.textContent = message;
  photoPreview.append(text);
}

function setFormStatus(message, state = '') {
  formStatus.textContent = message;

  if (state) {
    formStatus.dataset.state = state;
  } else {
    delete formStatus.dataset.state;
  }
}

function addResultLine(label, value) {
  const line = document.createElement('p');
  const strong = document.createElement('strong');

  strong.textContent = label + ': ';
  line.append(strong, document.createTextNode(value));
  resultCard.append(line);
}

function renderRequestPreview(formData, wasSent) {
  const childName = String(formData.get('childName') || '').trim();
  const childAge = String(formData.get('childAge') || '');
  const bookLanguage = String(formData.get('bookLanguage') || '');
  const bookTheme = String(formData.get('bookTheme') || '');
  const childInterests = String(formData.get('childInterests') || '').trim();
  const hasPhoto = Boolean(photoInput.files && photoInput.files.length);

  resultCard.replaceChildren();

  const title = document.createElement('h3');
  title.textContent = wasSent ? 'Заявку надіслано' : 'Preview заявки';
  resultCard.append(title);

  addResultLine('Головний герой', childName + ', ' + childAge + ' років');
  addResultLine('Тема', themeLabels[bookTheme] || bookTheme);
  addResultLine('Мова', languageLabels[bookLanguage] || bookLanguage);
  addResultLine('Інтереси', childInterests || 'ще не вказано');
  addResultLine('Фото-референс', hasPhoto ? 'додано тільки локально' : 'не додано');

  const note = document.createElement('p');
  note.className = 'result-note';
  note.textContent = wasSent
    ? 'Текстові дані заявки відправлено. Фото залишилося тільки у вашому браузері.'
    : 'Форма вже готова до v0.3, але email-канал ще потрібно активувати.';
  resultCard.append(note);

  resultCard.hidden = false;
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

photoInput.addEventListener('change', () => {
  const file = photoInput.files && photoInput.files[0];
  photoInput.setCustomValidity('');

  if (!file) {
    resetPhotoPreview();
    return;
  }

  if (!file.type.startsWith('image/')) {
    photoInput.setCustomValidity('Оберіть файл зображення.');
    showPhotoError('Цей файл не схожий на зображення. Оберіть інше фото.');
    return;
  }

  if (file.size > MAX_PHOTO_SIZE) {
    photoInput.setCustomValidity('Фото має бути меншим за 10 МБ.');
    showPhotoError('Фото завелике. Оберіть файл до 10 МБ.');
    return;
  }

  clearPhotoUrl();
  photoPreview.classList.remove('is-error');
  activePhotoUrl = URL.createObjectURL(file);

  const image = document.createElement('img');
  image.src = activePhotoUrl;
  image.alt = 'Локальний preview фото дитини';
  image.addEventListener('error', () => {
    showPhotoError('Фото вибрано, але браузер не може показати цей формат. Спробуйте JPG, PNG або WebP.');
  });

  photoPreview.replaceChildren(image);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  setFormStatus('');

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const endpoint = form.action;
  const endpointConfigured = endpoint && !endpoint.includes(FORM_ID_PLACEHOLDER);

  formData.append('bookLanguageLabel', languageLabels[formData.get('bookLanguage')] || '');
  formData.append('bookThemeLabel', themeLabels[formData.get('bookTheme')] || '');
  formData.append('photoReference', photoInput.files && photoInput.files.length ? 'Selected locally, not attached' : 'Not selected');

  if (!endpointConfigured) {
    renderRequestPreview(formData, false);
    setFormStatus(
      'Email-відправлення ще не активоване. Дані не покинули браузер.',
      'warning'
    );
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Надсилаємо...';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const responseData = await response.json().catch(() => null);
      const message = responseData && responseData.errors
        ? responseData.errors.map((error) => error.message).join(' ')
        : 'Сервіс не прийняв заявку.';
      throw new Error(message);
    }

    renderRequestPreview(formData, true);
    setFormStatus('Готово. Перевірте свою пошту для подальшої відповіді.', 'success');
    form.reset();
    resetPhotoPreview();
  } catch (error) {
    console.error('Form submission failed:', error);
    setFormStatus(
      'Не вдалося надіслати заявку. Спробуйте ще раз трохи пізніше.',
      'error'
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Надіслати заявку';
  }
});

window.addEventListener('beforeunload', clearPhotoUrl);
