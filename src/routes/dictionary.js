const Languages = {
    English: "English",
    German: "Deutsch",
    Persian: "فارسی",
};
export class Dictionary {
    dict;
    static languages = Languages;
    defaultLanguage;

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
        this.dict.set(lang, text);
        if (!this.defaultLanguage){
            this.defaultLanguage = lang;
        }
    }

    set defaultLanguage(lang){

    }

    getLangsText(lang) {
        return this.dict.get(lang);
    }

    getText() {
        let text = this.dict.get(Dictionary.currentLanguage);
        if (text) {
            return text;
        }
        else {
            return this.getLangsText(this.defaultLanguage);
        }
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

    static setCurrentLanguage(lang) {
        Dictionary.currentLanguage = lang;
    }

}
