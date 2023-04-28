import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

title.setText(english, "Jobs");
title.setText(german, "german translation needed");

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Job Search Websites");
export let jobs_body1 = new Dictionary();
jobs_body1.setText(english, "Those who have applied for or received a residence permit are allowed to work in Germany. Links to job boards include:");
export const jobs_list = [
    "de.indeed.com/jobs",
    "jobs4refugees.org",
    "workeer.de",
    "hr-integrate.com",
    "arbeitsagentur.de"
]
export let jobs_body2 = new Dictionary();
jobs_body2.setText(english, "All German employees have rights while working in the country. Information\
                            about these rights and resources to resolve labor-related issues can be found on");
export let jobs_link = new Dictionary();
jobs_link.setText(english, "w2eu.info");


export let cl_title = new Dictionary();
// cover letter / letter of motivation
cl_title.setText(english, "Cover Letter Creator (Europass)");
cl_title.setText(german, "Anschreiben Machen")
export let cl_body = new Dictionary();

cl_body.setText(english, `A cover letter is an introduction to yourself and your skills. Cover letters
                        are not mandatory but recommended for most jobs. Every cover letter should contain an introduction,
                        your relevant skills and experience, and why you would be a good fit for the job. Cover letters should
                        conclude with a call to action for the job, such as asking to set up an interview. Click the above link for
						a free cover letter creator.`)
// cl_body.setText(english, "A cover letter is an introduction to yourself and what you are good at. Cover letters\
//                         are not mandatory but recommended for most jobs. Every cover letter should contian an introduction,\
//                         your relevant skills, experience and why you would be a good fit for the job. The cover letter should\
//                         finsih with a conclusion or call to action for the job. Click the above link for a free cover letter\
//                         creator.")


export let ll_title = new Dictionary();
ll_title.setText(english, "Lebenslauf Creator (Europass)")
export let ll_body = new Dictionary();
ll_body.setText(english, `A Lebenslauf is a 2–3 page summary of a person's career and qualifications. Lebenslaufs 
							are separated into different sections, with some common ones being contact information, 
							academic history, professional experience, relevant skills, and awards.`);         

