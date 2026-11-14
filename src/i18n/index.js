import { reactive } from 'vue';
import pt from './pt';
import en from './en';

function detectLocale() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'en' || urlLang === 'pt') return urlLang;

  const browserLang = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
  if (browserLang.startsWith('pt')) return 'pt';
  return 'en';
}

function syncUrl(locale) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url.toString());
}

const initial = detectLocale();
syncUrl(initial);

const state = reactive({
  locale: initial,
  messages: { pt, en },
});

export function t(key) {
  const keys = key.split('.');
  let result = state.messages[state.locale];
  for (const k of keys) {
    if (result == null) return key;
    result = result[k];
  }
  return result != null ? result : key;
}

export function setLocale(locale) {
  if (state.messages[locale]) {
    state.locale = locale;
    syncUrl(locale);
  }
}

export function getLocale() {
  return state.locale;
}

export default { t, setLocale, getLocale };
