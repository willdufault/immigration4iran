export class Ngo {
    link;
    title;
    genLangs;
    langs;
    body;
    contact;
    displayContact;

    constructor(link, title, genLangs, langs, body, contact, displayContact) {
        this.link = link;
        this.title = title;
        this.genLangs = genLangs;
        this.langs = langs;
        this.body = body;
        this.contact = contact;
        this.displayContact = displayContact;
    }

    getString() {
        return this.link + this.title + this.genLangs + this.langs + this.body + this.contact;
    }

    getLink(){
        return this.link;
    }

    getTitle(){
        return this.title;
    }

    getGenLangs(){
        return this.genLangs;
    }

    getLangs(){
        return this.langs;
    }

    getBody(){
        return this.body;
    }

    getContact(){
        return this.contact;
    }

    getContactDisplay(){
        return this.displayContact;
    }

}