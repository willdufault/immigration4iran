import {Dictionary} from "./dictionary.js";

export let title = new Dictionary();
export let legal = new Dictionary();
export let socialServices = new Dictionary();
export let communityBuilding = new Dictionary();
export let language = new Dictionary();

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

title.setText(english, "Immigration4Iran");
title.setText(german, "EinwanderungFürIran");
title.setText(persian, "مهاجرت4ایران");