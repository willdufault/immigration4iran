import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

title.setText(english, "NGO Information");
title.setText(german,"NGO-Informationen");

export let sample1title = new Dictionary();
sample1title.setText(english, "Name of NGO");
//probably don't want a translation for ngo names? unsure
sample1title.setText(german,"NGO-Informationen");
export let sample1body = new Dictionary();
sample1body.setText(english, "Description of NGO")
sample1body.setText(german, "German description of NGO")
