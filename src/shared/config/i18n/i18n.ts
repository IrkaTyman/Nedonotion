import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { Namespace } from '@shared/config/i18n/Namespace';
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false,
        },
        load: 'currentOnly',
        supportedLngs: ['ru', 'en'],
        backend: {
            loadPath: (languages: string[], namespaces: string[]) => {
                console.log(languages);
                return `/locales/${languages[0]}/${namespaces[0]}.json`;
            },
        },
    });

export default i18n;
