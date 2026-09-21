const form = document.querySelector('#bookForm');
const resultCard = document.querySelector('#resultCard');
const photoInput = document.querySelector('#childPhoto');
const photoPreview = document.querySelector('#photoPreview');
const formStatus = document.querySelector('#formStatus');
const submitButton = document.querySelector('#submitButton');

const MAX_PHOTO_SIZE = 10 * 1024 * 1024;
const FORM_ID_PLACEHOLDER = 'YOUR_FORM_ID';
const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyIqVCj6JcgYA6EezMpjCD8CkOM-4mWCMqFtBYnAkv6fpWvCo0mZXGne2TRNGjlJWrD/exec';
const SHEETS_ENDPOINT_PLACEHOLDER = 'YOUR_APPS_SCRIPT_URL';

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
    : 'Форма ще працює у режимі локального preview.';
  resultCard.append(note);

  resultCard.hidden = false;
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function createSheetsPayload(formData) {
  return {
    email: String(formData.get('email') || '').trim(),
    parentName: String(formData.get('parentName') || '').trim(),
    childName: String(formData.get('childName') || '').trim(),
    childAge: Number(formData.get('childAge')),
    bookLanguage: String(formData.get('bookLanguage') || ''),
    bookTheme: String(formData.get('bookTheme') || ''),
    childInterests: String(formData.get('childInterests') || '').trim(),
    privacyConsent: String(formData.get('privacyConsent') || ''),
    company: String(formData.get('company') || ''),
  };
}

async function sendRequestToSheet(formData) {
  const endpointConfigured =
    SHEETS_ENDPOINT && !SHEETS_ENDPOINT.includes(SHEETS_ENDPOINT_PLACEHOLDER);

  if (!endpointConfigured) {
    throw new Error('Google Sheets endpoint is not configured.');
  }

  await fetch(SHEETS_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify(createSheetsPayload(formData)),
    keepalive: true,
  });
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
  const emailEndpoint = form.action;
  const emailEndpointConfigured =
    emailEndpoint && !emailEndpoint.includes(FORM_ID_PLACEHOLDER);

  const selectedLanguage = String(formData.get('bookLanguage') || '');
  const selectedTheme = String(formData.get('bookTheme') || '');
  const hasPhoto = Boolean(photoInput.files && photoInput.files.length);

  formData.set('bookLanguage', languageLabels[selectedLanguage] || selectedLanguage);
  formData.set('bookTheme', themeLabels[selectedTheme] || selectedTheme);
  formData.set('privacyConsent', 'Погоджено');
  formData.set(
    'photoReference',
    hasPhoto ? 'Вибрано локально, файл не прикріплено' : 'Фото не вибрано'
  );

  if (!emailEndpointConfigured) {
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
    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!emailResponse.ok) {
      const responseData = await emailResponse.json().catch(() => null);
      const message = responseData && responseData.errors
        ? responseData.errors.map((error) => error.message).join(' ')
        : 'Сервіс не прийняв заявку.';
      throw new Error(message);
    }

    let sheetSyncRequested = false;

    try {
      await sendRequestToSheet(formData);
      sheetSyncRequested = true;
    } catch (sheetError) {
      console.error('Google Sheets sync failed:', sheetError);
    }

    renderRequestPreview(formData, true);

    if (sheetSyncRequested) {
      setFormStatus(
        'Готово. Заявку надіслано на email і передано до журналу заявок.',
        'success'
      );
    } else {
      setFormStatus(
        'Email надіслано, але запис у журнал не підтверджено. Не надсилайте заявку повторно.',
        'warning'
      );
    }

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
