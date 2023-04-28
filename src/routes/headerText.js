import {Dictionary} from "./dictionary.js";

export let title = new Dictionary();
export let legal = new Dictionary();
export let social = new Dictionary();
export let community = new Dictionary();
export let language = new Dictionary();

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

title.setText(english, "Immigration4Iran");
title.setText(german, "EinwanderungFürIran");
title.setText(persian, "مهاجرت4ایران");

legal.setText(english, "Legal Support");
legal.setText(german, "Gesetzlich");

social.setText(english, "Social Services");
community.setText(english, "Community");

language.setText(english, "Language");
language.setText(german, "Lange");

export let roadmap = new Dictionary();
roadmap.setText(english, "Asylum Procedure");

export let jobs = new Dictionary();
jobs.setText(english, "Jobs");

export let housing = new Dictionary();
housing.setText(english, "Housing");

export let education = new Dictionary();
education.setText(english, "Education");

export let ngos = new Dictionary();
ngos.setText(english, "Support Organizations");

export let forum = new Dictionary();
forum.setText(english, "Community Forum");