import {Dictionary} from "../dictionary.js";

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
let italian = "Italiano";

export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:")

export let title = new Dictionary();

title.setText(english, "Legal Information");
title.setText(german, "Rechtsinformation");

export let step1_title = new Dictionary();
step1_title.setText(english, "1. On Arrival");
export let step1_body = new Dictionary();
step1_body.setText(english, "Applicant can go to security authority (such as the police), an immigration authority, a reception \
                                facility or directly to an arrival center, or AnkER facility.");
step1_body.setText(german, "German description of NGO");

export let step2_title = new Dictionary();
step2_title.setText(english, "2. Receive Proof of Arrival");
export let step2_body = new Dictionary();
step2_body.setText(english, "The applicant will receive this at a reception center. It will allow access to state benefits, such \
                                as accommodation, medical treatment, and food.");
step2_body.setText(german, "German description of NGO");

export let step3_title = new Dictionary();
step3_title.setText(english, "3. Reception Centers");
export let step3_body = new Dictionary();
step3_body.setText(english, "Being assigned to a reception center can take up to 6 months while a decision happens. The  applicant \
                                may be moved to a different center to reunite families. Procedures in a reception center include \
                                medical examinations, recording of personal data, identity check, asylum application, asylum interview, \
                                and initial integration measures.");
step3_body.setText(german, "German description of NGO");

export let step4_title = new Dictionary();
step4_title.setText(english, "4. Personal Asylum Application");
export let step4_body = new Dictionary();
step4_body.setText(english, "The applicant can apply at a Federal Office branch like an arrival center or an AnkER facility. The \
                                applicant must be able to prove identity with official documents like a national passport, birth \
                                certificate, or driver’s license. All information will be in the applicant’s native language and \
                                interpreters will be available.");
step4_body.setText(german, "German description of NGO");