const form = document.querySelector('#bookForm');
const resultCard = document.querySelector('#resultCard');
const photoInput = document.querySelector('#childPhoto');
const photoPreview = document.querySelector('#photoPreview');

const themeLabels = {
  space: 'Космічна пригода',
  forest: 'Казковий ліс',
  dinosaurs: 'Світ динозаврів',
};

const languageLabels = {
  uk: 'Українська',
  en: 'English',
};

photoInput.addEventListener('change', () => {
  const file = photoInput.files?.[0];

  if (!file) {
    photoPreview.innerHTML = '<span>Тут зʼявиться preview фото</span>';
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  photoPreview.innerHTML = `<img src="${imageUrl}" alt="Preview фото дитини" />`;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const childName = formData.get('childName')?.trim();
  const childAge = formData.get('childAge');
  const bookLanguage = formData.get('bookLanguage');
  const bookTheme = formData.get('bookTheme');
  const childInterests = formData.get('childInterests')?.trim();

  resultCard.hidden = false;
  resultCard.innerHTML = `
    <h3>Preview заявки</h3>
    <p><strong>Головний герой:</strong> ${childName}, ${childAge} років</p>
    <p><strong>Тема:</strong> ${themeLabels[bookTheme]}</p>
    <p><strong>Мова:</strong> ${languageLabels[bookLanguage]}</p>
    <p><strong>Інтереси:</strong> ${childInterests || 'ще не вказано'}</p>
    <p class="result-note">Наступний крок у майбутньому — генерація сторінок книги та PDF.</p>
  `;

  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
