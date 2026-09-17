const SPREADSHEET_ID = '1b7Y27xqdjbtxBo0cA3Sa1ippx1IYVBTKkgX2RK_KidQ';
const SHEET_NAME = 'Заявки';

const ALLOWED_LANGUAGES = ['Українська', 'English'];
const ALLOWED_THEMES = ['Космічна пригода', 'Казковий ліс', 'Світ динозаврів'];

function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'Yours in Story request receiver',
  });
}

function doPost(event) {
  try {
    const payload = parsePayload_(event);
    const request = validateRequest_(payload);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheet = spreadsheet.getSheetByName(SHEET_NAME);

      if (!sheet) {
        throw new Error('Sheet "' + SHEET_NAME + '" was not found.');
      }

      const now = new Date();
      const requestId = createRequestId_(now);

      sheet.appendRow([
        requestId,
        now,
        'Нова',
        safeCell_(request.email),
        safeCell_(request.parentName),
        safeCell_(request.childName),
        request.childAge,
        safeCell_(request.bookLanguage),
        safeCell_(request.bookTheme),
        safeCell_(request.childInterests),
        'Погоджено',
        'Сайт',
        '',
        'Перевірити заявку та відповісти',
        '',
        '',
        now,
      ]);

      return jsonResponse_({
        ok: true,
        requestId: requestId,
      });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);

    return jsonResponse_({
      ok: false,
      error: error.message || 'Request could not be saved.',
    });
  }
}

function parsePayload_(event) {
  if (!event) {
    throw new Error('Missing request event.');
  }

  const rawBody = event.postData && event.postData.contents;

  if (rawBody) {
    try {
      return JSON.parse(rawBody);
    } catch (error) {
      // Fall back to standard form parameters below.
    }
  }

  return event.parameter || {};
}

function validateRequest_(payload) {
  if (String(payload.company || '').trim()) {
    throw new Error('Spam check failed.');
  }

  const email = requiredText_(payload.email, 'Email', 254);
  const parentName = optionalText_(payload.parentName, 100);
  const childName = requiredText_(payload.childName, 'Child name', 60);
  const childAge = Number(payload.childAge);
  const bookLanguage = requiredText_(payload.bookLanguage, 'Book language', 30);
  const bookTheme = requiredText_(payload.bookTheme, 'Book theme', 80);
  const childInterests = optionalText_(payload.childInterests, 500);
  const privacyConsent = String(payload.privacyConsent || '');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid email.');
  }

  if (!Number.isInteger(childAge) || childAge < 3 || childAge > 8) {
    throw new Error('Child age must be between 3 and 8.');
  }

  if (!ALLOWED_LANGUAGES.includes(bookLanguage)) {
    throw new Error('Unsupported book language.');
  }

  if (!ALLOWED_THEMES.includes(bookTheme)) {
    throw new Error('Unsupported book theme.');
  }

  if (privacyConsent !== 'Погоджено') {
    throw new Error('Privacy consent is required.');
  }

  return {
    email: email,
    parentName: parentName,
    childName: childName,
    childAge: childAge,
    bookLanguage: bookLanguage,
    bookTheme: bookTheme,
    childInterests: childInterests,
  };
}

function requiredText_(value, label, maxLength) {
  const text = String(value || '').trim();

  if (!text) {
    throw new Error(label + ' is required.');
  }

  if (text.length > maxLength) {
    throw new Error(label + ' is too long.');
  }

  return text;
}

function optionalText_(value, maxLength) {
  const text = String(value || '').trim();

  if (text.length > maxLength) {
    throw new Error('A field is too long.');
  }

  return text;
}

function safeCell_(value) {
  const text = String(value || '');

  if (/^[=+\-@]/.test(text)) {
    return "'" + text;
  }

  return text;
}

function createRequestId_(date) {
  const datePart = Utilities.formatDate(
    date,
    Session.getScriptTimeZone(),
    'yyyyMMdd-HHmmss'
  );
  const randomPart = Utilities.getUuid().slice(0, 6).toUpperCase();

  return 'REQ-' + datePart + '-' + randomPart;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
