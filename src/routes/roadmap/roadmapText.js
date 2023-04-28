import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: "); //change to ngo reference

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
title.setText(english, "German Asylum Procedure");
title.setText(german, "german translation needed");

export let desc = new Dictionary();
desc.setText(english, `A step-by-step guide on how to apply for refugee status (information from the
						official German Federal Office).`);

export let step1_title = new Dictionary();
step1_title.setText(english, "On Arrival");
export let step1_body = new Dictionary();
step1_body.setText(english, "The applicant can go to a security authority (such as the police), an immigration authority, a reception \
                                facility, an arrival center, or an AnkER facility.");
step1_body.setText(german, "German description of NGO");

export let step2_title = new Dictionary();
step2_title.setText(english, "Receive Proof of Arrival");
export let step2_body = new Dictionary();
step2_body.setText(english, "The applicant will receive proof of arrival at a reception center. It will allow access to state benefits, such \
                                as accommodation, medical treatment, and food.");
step2_body.setText(german, "German description of NGO");

export let step3_title = new Dictionary();
step3_title.setText(english, "Reception Centers");
export let step3_body = new Dictionary();
step3_body.setText(english, "The decision for acceptance to a reception center can take up to 6 months. To keep families together, \
                                applicants may be moved to different centers. Procedures in a reception center include \
                                medical examinations, recording of personal data, identity check, asylum application, asylum interview, \
                                and initial integration measures.");
step3_body.setText(german, "German description of NGO");

export let step4_title = new Dictionary();
step4_title.setText(english, "Personal Asylum Application");
export let step4_body = new Dictionary();
step4_body.setText(english, "The applicant can apply at a Federal Office branch like an arrival center or an AnkER facility. The \
                                applicant must be able to prove identity with official documents (e.g. national passport, birth \
                                certificate, or driver’s license). All information will be in the applicant’s native language and \
                                interpreters are available.");
step4_body.setText(german, "German description of NGO");

export let step5_title = new Dictionary();
step5_title.setText(english, "Receive Residence Permit");
export let step51_body = new Dictionary();
export let step52_body = new Dictionary();
export let step53_body = new Dictionary();
step51_body.setText(english, "a) If the applicant is in good prospects, they must stay in the reception center for 3 months, but\
                                after which can move freely through Germany");
step52_body.setText(english, "b) If the applicant is in poor prospects, they must stay in the reception center, and if the\
                                personal application is rejected they are required to stay put before leaving Germany");
step53_body.setText(english, "c) If the personal application is turned down as “manifestly unfounded” or “inadmissible”\
                                , applicants must stay in reception centers before leaving Germany");
step51_body.setText(german, "German description of NGO");

export let step6_title = new Dictionary();
step6_title.setText(english, "Contact Foreign Office to Set Up Personal Interview");
export let step61_body = new Dictionary();
export let step62_body = new Dictionary();
step61_body.setText(english, "The most important part of the asylum seeking process, where applicant presents case for asylum.\
                                Applicant can set up the interview on this website: ");
step62_body.setText(english, "https://www.auswaertiges-amt.de/en/about-us/contact");
step61_body.setText(german, "German description of NGO");
step62_body.setText(german, "https://www.auswaertiges-amt.de/de/about-us/contact");

export let step7_title = new Dictionary();
step7_title.setText(english, "Personal Interview");
export let step7_body = new Dictionary();
step7_body.setText(english, "Applicants must attend the personal interview, or notify interviewers of an absence. It is possible for\
                            another person who is not in the asylum process to attend as an advisor, with permission of the interviewee\
                            Applicants will be given sufficient time to present reason for flight, describe route, what would happen if\
                            they returned. Applicants must be honest and are allowed to bring applicable evidence (photographs,\
                            documents from police or other authorities, medical reports) to support their case. ");
step7_body.setText(german, "German description of NGO");

export let step8_title = new Dictionary();
step8_title.setText(english, "Receive Decision");
export let step8_body = new Dictionary();
step8_body.setText(english, "Possible decisions include entitlement to asylum, refugee protection, subsidiary protection, ban on\
                                deportation, and denial of asylum. Decisions can be appealed in the case of a denial. If applicant\
                                is accepted they are provided with one of three residence permits: given right to asylum, subsidiary\
                                protection, or national ban on deportation.");
step8_body.setText(german, "German description of NGO");

export let step9_title = new Dictionary();
step9_title.setText(english, "Unaccompanied Minors");
export let step9_body = new Dictionary();
step9_body.setText(english, "If the applicant is under 18 and enters an EU member state without an adult or if left unaccompanied\
                            they are an unaccompanied minor. Minors are put in care of the youth welfare office and can possibly\
                            be reunited with family.");
step9_body.setText(german, "German description of NGO");

export let step10_title = new Dictionary();
step10_title.setText(english, "Integration and Future Prospects");
export let step10_body = new Dictionary();
step10_body.setText(english, "Integration courses are offered by the Federal Foreign Office at specific reception\
                            centers. The reception center also offers access to local employment agencies.");
step10_body.setText(german, "German description of NGO");