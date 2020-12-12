import { atom } from 'recoil'

const languageStore = atom({
    key: 'languageStore',
    default: 'th'
});

export default languageStore