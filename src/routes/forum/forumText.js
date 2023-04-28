import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: "); //note: change to external reference due to reuse

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";

export let title = new Dictionary();
title.setText(english, "Discord Community Forum");

export let desc = new Dictionary();
desc.setText(english, `Join our community on Discord! Click the button below to join. Our community
						consists of members of german support organizations and volunteers who are dedicated
						to helping asylum seekers in Germany.`);
// desc.setText(english, `Join our local community on Discord! Click the Join Discord button. Our local 
// 						community consists of NGOs and volunteers dedicated to helping refugees who 
// 						are coming to Germany.`);

export let disc_title = new Dictionary();
disc_title.setText(english, "Join Our Discord forum!");
export let disc_body = new Dictionary();
disc_body.setText(german, "German description of Website");
export let disc_lang = new Dictionary();
disc_lang.setText(english, `${german}, ${english}, ${arabic}, ${persian}`);