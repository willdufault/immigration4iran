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

export let terms_title = new Dictionary();
terms_title.setText(english, "Terms and Conditions");
export let terms_body1 = new Dictionary();
terms_body1.setText(english, "Immigration4Iran does not collect any personalized data from its users. The information \
                                listed on Immigration4Iran can not be guaranteed in its accuracy and should not be taken \
                                for legal advice. Official information can be found on ");

export let terms_link = new Dictionary();
terms_link.setText(english, "bamf.de");
export let terms_body2 = new Dictionary();
terms_body2.setText(english, "Last updated April 2023.");
