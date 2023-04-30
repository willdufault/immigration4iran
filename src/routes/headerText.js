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
legal.setText(persian, "صفحه حقوقی");

social.setText(english, "Social Services");
social.setText(persian, "صفحه خدمات اجتماعی");

community.setText(english, "Community");
community.setText(persian, "صفحه انجمن");

language.setText(english, "Language");
language.setText(german, "Lange");
language.setText(persian, "فارسی");

export let roadmap = new Dictionary();
roadmap.setText(english, "Asylum Procedure");

export let jobs = new Dictionary();
jobs.setText(english, "Jobs");
jobs.setText(german, "Jobs");
jobs.setText(persian, "صفحه مشاغل");

export let housing = new Dictionary();
housing.setText(english, "Housing");

export let education = new Dictionary();
education.setText(english, "Education");
education.setText(persian, "صفحه آموزش");

export let ngos = new Dictionary();
ngos.setText(english, "Support Organizations");
ngos.setText(persian, "صفحه سازمان مردم نهاد");

export let forum = new Dictionary();
forum.setText(english, "Community Forum");