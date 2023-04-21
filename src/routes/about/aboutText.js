import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";

export let about_title = new Dictionary();
about_title.setText(english, "About Us");
export let about_body = new Dictionary();
about_body.setText(english, "Created by students from Worcester Polytechnic Institute.");