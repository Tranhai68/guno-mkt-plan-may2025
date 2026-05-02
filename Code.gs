/**
 * GUNO MKT Plan - Google Apps Script Web App
 * Deploy: Deploy > New deployment > Web app
 */
const ROUTES = {
  index: 'Index',
  admin: 'Admin',
  tracker: 'Tracker'
};
const STORAGE_FILE_NAME = 'guno_mkt_plan_family_data.json';

function doGet(e) {
  const page = String((e && e.parameter && e.parameter.page) || 'index').toLowerCase();
  const fileName = ROUTES[page] || ROUTES.index;
  const template = HtmlService.createTemplateFromFile(fileName);
  template.gasBootstrapData = getStoredData_();
  template.route = page;
  template.appUrl = getAppUrl_();

  return template.evaluate()
    .setTitle('GUNO - MKT Plan Gia Đình')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  const template = HtmlService.createTemplateFromFile(filename);
  template.gasBootstrapData = getStoredData_();
  template.appUrl = getAppUrl_();
  return template.evaluate().getContent();
}

function getAppUrl_() {
  try {
    return ScriptApp.getService().getUrl() || '';
  } catch (err) {
    return '';
  }
}

function getStoredData() {
  return getStoredData_();
}

function saveStoredData(payload) {
  const text = String(payload || '');
  JSON.parse(text);
  const file = getStorageFile_(true);
  file.setContent(text);
  return {
    ok: true,
    updatedAt: new Date().toISOString(),
    fileName: STORAGE_FILE_NAME
  };
}

function resetStoredData() {
  const file = getStorageFile_(false);
  if (file) file.setTrashed(true);
  return { ok: true, resetAt: new Date().toISOString() };
}

function getStoredData_() {
  try {
    const file = getStorageFile_(false);
    if (!file) return 'null';
    const text = file.getBlob().getDataAsString('UTF-8');
    if (!text) return 'null';
    return JSON.stringify(JSON.parse(text));
  } catch (err) {
    return 'null';
  }
}

function getStorageFile_(createIfMissing) {
  const files = DriveApp.getFilesByName(STORAGE_FILE_NAME);
  if (files.hasNext()) return files.next();
  if (!createIfMissing) return null;
  return DriveApp.createFile(STORAGE_FILE_NAME, '{}', MimeType.PLAIN_TEXT);
}
