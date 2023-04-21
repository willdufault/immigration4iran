import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: "); //change to ngo reference

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";

export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:")

export let title = new Dictionary();

// change to "Legal Tools?"
title.setText(english, "Legal Information");
title.setText(german, "Rechtsinformation");

export let roadmap_title = new Dictionary();
roadmap_title.setText(english, "Legal Roadmap");
roadmap_title.setText(german, "german translation needed");

export let roadmap_description = new Dictionary();
roadmap_description.setText(english, "An interactive legal roadmap that can guide asylum seekers through the refugee legal process. (Information from the Federal Office).");
roadmap_description.setText(german, "german translation needed");


