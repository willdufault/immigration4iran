import { Dictionary } from "./dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:")

export let title = new Dictionary();

title.setText(english, "Main Page");
title.setText(german, "Hauptpage");

export let intro = new Dictionary();
intro.setText(english, "Welcome");
intro.setText(german, "Willkommen");
export let introText = new Dictionary();
introText.setText(english, "Navigate Around");
introText.setText(german, "Sehen Pages");

export let legal_title = new Dictionary();
legal_title.setText(english, "Legal Support");
legal_title.setText(german, "Rechtliche")
export let legal_body = new Dictionary();
legal_body.setText(english, `Click to navigate to our legal help page. It contains information like a step-by-step
								guide to the asylum process as well as various other legal tools.`);
legal_body.setText(german, `German translation`);

export let social_title = new Dictionary();
social_title.setText(english, "Social Services");
social_title.setText(german, "Soziale");
export let social_body = new Dictionary();
social_body.setText(english, `Click to navigate to our social page. It contains places to find social 
								services like housing, jobs, education, and healthcare.`);
social_body.setText(german, "German translation");

export let community_title = new Dictionary();
community_title.setText(english, "Community");
community_title.setText(german, "Gemeinschaft");
export let community_body = new Dictionary();
community_body.setText(english, `Click to navigate to our community page. It contains information 
									like ways to connect to the local community, meet people, and join 
									in on soccer and cricket clubs.`);
community_body.setText(german, "German translation");

export let ngo_title = new Dictionary();
ngo_title.setText(english, "NGOs");
ngo_title.setText(german, "NROs");
export let ngo_body = new Dictionary();
ngo_body.setText(english, `Click to navigate to our NGO page. It contains a sorted list of NGOs and 
							what they can provide to asylum seekers. The NGOs cover subjects including 
							legal help, social services, and community activities.`);
ngo_body.setText(german, "German translation");

export let edu_title = new Dictionary();
edu_title.setText(english, "Education");
edu_title.setText(german, "Bildung");
export let edu_body = new Dictionary();
edu_body.setText(english, `Click to navigate to our education page. It contains information like locations
							of universities and integration courses.`);
edu_body.setText(german, "German translation");

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Jobs");
jobs_title.setText(german, "Jobs");
export let jobs_body = new Dictionary();
jobs_body.setText(english, `Click to navigate to our jobs page. It contains information about creating a 
								lebenslauf and cover letter. It also contains information on how to apply 
								to jobs on popular sites.`);
jobs_body.setText(german, "German translation");