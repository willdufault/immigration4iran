import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

title.setText(english, "Social Services Information");
title.setText(german, "Informationen zu sozialen Diensten");