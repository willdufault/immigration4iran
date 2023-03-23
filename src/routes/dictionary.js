const Languages = {
    English: Symbol("English"),
    German: Symbol("German"),
    Persian: Symbol("Persian"),
};
export class Dictionary {
    dict;
    static languages = Languages;

    static currentLanguage;
    constructor() {
        this.dict = new Map();
        for (let lang in Languages) {
            this.dict.set(lang, new Map());
        }
    }

    /**
     * this will add a translation for a given text block
     * @param lang the langauge of the text
     * @param text the text being added
     */
    setText(lang, text) {
        this.dict.set(lang, text)
    }

    getLangsText(lang) {
        return this.dict.get(lang);
    }

    getText() {
        return this.dict.get(Dictionary.currentLanguage);
    }

    static get currentLanguage() {

    }

    static set currentLanguage(currentLanguage) {

    }

    /**
     * This function returns the enums to be used across the website, standardizes code for different languages
     * @returns {{English: symbol, Persian: symbol, German: symbol}}
     * the current languages that translations are available for
     */
    static get languages() {
    }

}
