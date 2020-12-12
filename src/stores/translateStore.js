import { atom, selectorFamily } from 'recoil'
import languageStore from './languageStore'

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('../libs/language/en.json'),
    th: () => require('../libs/language/th.json'),
};

const translateStore = selectorFamily({
    key: 'TransformSelector',
    get: (word) => async ({ get }) => {
        let language = get(languageStore);
        if (language === 'en') {
            return translationGetters.en()[word]
        }
        else {
            return translationGetters.th()[word]
        }

    },
});

export default translateStore