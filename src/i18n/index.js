import { reactive } from 'vue';
import pt from './pt';
import en from './en';

const state = reactive({
  locale: 'pt',
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
  }
}

export function getLocale() {
  return state.locale;
}

export function toggleLocale() {
  state.locale = state.locale === 'pt' ? 'en' : 'pt';
  return state.locale;
}

export default { t, setLocale, getLocale, toggleLocale };
