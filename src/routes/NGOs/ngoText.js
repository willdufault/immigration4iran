import { Dictionary } from "../dictionary.js";

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
let pashto = "پښتو";

export let contact = new Dictionary();
contact.setText(english, "Contact:"); //change to referecne contact in home page
contact.setText(german, "Kontact:");
contact.setText(persian, "مخاطب:");

export let title = new Dictionary();

title.setText(english, "NGO Information");
title.setText(german, "NGO-Informationen");

export let sample1title = new Dictionary();
sample1title.setText(english, "Name of NGO");
sample1title.setText(german, "Name von NGO");
export let sample1body = new Dictionary();
sample1body.setText(english, "Name of NGO");
sample1body.setText(german, "German description of NGO");

export let wu_title = new Dictionary();
wu_title.setText(english, "Welcome United");
export let wu_body = new Dictionary();
wu_body.setText(english, "Welcome United is a social and antiracism group that organizes events and protests throughout Germany. \
                              On their website, you can network with other community members, attend local events, and sign up for the \
                              Welcome United newsletter.");
wu_body.setText(german, "German description of NGO");
export let wu_lang = new Dictionary();
wu_lang.setText(english, `${german}, ${english}`);
export let wu_contact = new Dictionary();
wu_contact.setText(english, "mail@welcome-united.org");

export let jog_title = new Dictionary();
jog_title.setText(english, "Youth without Borders");
jog_title.setText(german, "Jungendliche ohne Grenzen");
export let jog_body = new Dictionary();
jog_body.setText(english, "Youth without Borders is an organization for German refugees with a focus on protecting the rights of young refugees \
                                who may face any form of discrimination. The organization has regular meetings, hosts local events, and works with \
                                other similar NGOs.");
jog_body.setText(german, "German description of NGO");
export let jog_lang = new Dictionary();
jog_lang.setText(english, german);
export let jog_contact = new Dictionary();
jog_contact.setText(english, "info@b-umf.de");


export let kar_title = new Dictionary();
kar_title.setText(english, "The Caravan for the Right of Refugees and Migrants");
kar_title.setText(german, "Karawane für die Rechte der Flüchtlinge und Migrantinnen");
export let kar_body = new Dictionary();
kar_body.setText(english, "The Caravan is a website which allows users to post about events, news, and other community activities. \
                                The website aims to connect refugees through an online forum and encourages people to share local events.");
kar_body.setText(german, "German description of NGO");
export let kar_lang = new Dictionary();
kar_lang.setText(english, `${german}, ${english}, ${french}, ${turkish}, ${persian}`);
export let kar_contact = new Dictionary();
kar_contact.setText(english, "caravan@emdash.org");

export let voice_title = new Dictionary();
voice_title.setText(english, "The VOICE Refugee Forum Germany");
export let voice_body = new Dictionary();
voice_body.setText(english, "The VOICE is a forum for refugees, where users can post about events, news, and other community activities.");
voice_body.setText(german, "German description of NGO");
export let voice_lang = new Dictionary();
voice_lang.setText(english, `${german}, ${english}`);
export let voice_contact = new Dictionary();
voice_contact.setText(english, "thevoicerefugeeforum@gmx.de");


export let pa_title = new Dictionary();
pa_title.setText(english, "Pro Asyl");
export let pa_body = new Dictionary();
pa_body.setText(english, "For human rights and refugee protection in Europe (with a focus on Germany). \
                            Includes hotline for legal or general advice, as well as resources regarding refugee rights and support. \
                            Solely funded by membership fees, donations, grants from foundations.");
pa_body.setText(german, "German description of NGO");
export let pa_lang = new Dictionary();
pa_lang.setText(english, `${german}, ${english}`);
export let pa_contact = new Dictionary();
pa_contact.setText(english, "proasyl@proasyl.de?subject=Asylum Help&body=Dear Pro Asyl,%0D%0A%0D%0AI am a refugee from [Country] and am currently in Germany looking for help. I am having trouble with [Problem]. What would you advise?%0D%0A%0D%0AThanks,%0D%0A[Name]");


export let weu_title = new Dictionary();
weu_title.setText(english, "Welcome to Europe (w2eu.info)");
export let weu_body = new Dictionary();
weu_body.setText(english, "Welcome to Europe gives migrants and refugees information about coming to and living in Europe. \
                            On the website there are a lot of helpful resources for refugees coming to Germany, \
                            including information about the legal processes and available social services.");
weu_body.setText(german, "German description of NGO");
export let weu_lang = new Dictionary();
weu_lang.setText(english, `${arabic}, ${english}, ${french}, ${persian}`);
export let weu_contact = new Dictionary();
weu_contact.setText(english, "contact@w2eu.info");

export let tdf_title = new Dictionary();
tdf_title.setText(english, "Terre des Femmes");
export let tdf_body = new Dictionary();
tdf_body.setText(english, "Terre des Femmes is an organization focused on womens’ rights. \
                            Their website includes a newsletter, recent campaigns, and ways to get involved.");
tdf_body.setText(german, "German description of NGO");
export let tdf_lang = new Dictionary();
tdf_lang.setText(english, german);
export let tdf_contact = new Dictionary();
tdf_contact.setText(english, "info@frauenrechte.de");

export let mk_title = new Dictionary();
mk_title.setText(english, "Medibüro Kiel");
export let mk_body = new Dictionary();
mk_body.setText(english, "Medibüro Kiel helps undocumented migrants and refugees seek medical help. \
                            They offer anonymous and free access to health services, as well as allowing for opportunities to volunteer and participate.");
mk_body.setText(german, "German description of NGO");
export let mk_lang = new Dictionary();
mk_lang.setText(english, german);
export let mk_contact = new Dictionary();
mk_contact.setText(english, "info@medibuero-kiel.de?subject=Medical Consultation&body=Dear Medibüro,%0D%0A%0D%0AI am a refugee in Germany and am having trouble with [Medical Issue].%0D%0A%0D%0AThanks,%0D%0A[Name]");

export let ussa_title = new Dictionary();
ussa_title.setText(english, "Union der Syrischen Studenten und Akademiker");
export let ussa_body = new Dictionary();
ussa_body.setText(english, "This is an organization of students with Syrian descent, with a focus of helping Syrian refugees. \
                            USSA also offers consultation in Arabic for refugees. Their parent organization: \
                            Verband Deutsch-Syrischer Hilfsvereine e.V. also offers many programs to support Syrians in Germany.");
ussa_body.setText(german, "German description of NGO");
export let ussa_lang = new Dictionary();
ussa_lang.setText(english, `${arabic}, ${german}`);
export let ussa_contact = new Dictionary();
ussa_contact.setText(english, "info@ussa-syria.org");

export let ufu_title = new Dictionary();
ufu_title.setText(english, "United for Ukraine");
export let ufu_body = new Dictionary();
ufu_body.setText(english, "United for Ukraine offers a wide range of information for those coming to European countries, \
                            focusing on asylum seekers from Ukraine. There are useful resources for all refugees, including legal and social support.");
ufu_body.setText(german, "German description of NGO");
export let ufu_lang = new Dictionary();
ufu_lang.setText(english, `${english}, ${russian}, ${ukrainian}`);
export let ufu_contact = new Dictionary();
ufu_contact.setText(english, "info@unitedforukraine.org");

export let ifu_title = new Dictionary();
ifu_title.setText(english, "Immigration4Ukraine");
export let ifu_body = new Dictionary();
ifu_body.setText(english, "Immigration4Ukraine is a website created by UPJ Pro Bono Rechtsberatung, \
                            made to provide information for Ukrainian refugees in Germany. \
                            Much of the information on the website could be helpful to refugees from any country.");
ifu_body.setText(german, "German description of NGO");
export let ifu_lang = new Dictionary();
ifu_lang.setText(english, `${german}, ${english}, ${russian}, ${ukrainian}`);
export let ifu_contact = new Dictionary();
ifu_contact.setText(english, "immigration4ukraine@upj.de");

export let haw_title = new Dictionary();
haw_title.setText(english, "Hawar");
export let haw_body = new Dictionary();
haw_body.setText(english, "Hawar is an NGO in Germany and Iraq that makes the projects SCORING GIRLS*,\
                        BACK TO LIFE, #AfghanistanWeSeeYou and LEARN to ImpACT, these projects highlight\
                        the voices of persecuted minorities.");
haw_body.setText(german, "German description of NGO");
export let haw_lang = new Dictionary();
haw_lang.setText(english, `${german}, ${english}`);
export let haw_contact = new Dictionary();
export let haw_link = new Dictionary();
haw_link.setText(english, "https://www.hawar.help/en/")
haw_link.setText(german, "https://www.hawar.help/de/")
haw_contact.setText(english, "info@hawar.help");

export let gsb_title = new Dictionary();
gsb_title.setText(english, "Give Something Back to Berlin");
export let gsb_body = new Dictionary();
gsb_body.setText(english, "GSBTB is an NGO that holds local events in Berlin to facilitate a helpful local\
                        community. On their Activity Calendar website they hold social events like learning\
                        to play musical instruments like Guitar and Piano.");
gsb_body.setText(german, "German description of NGO");
export let gsb_lang = new Dictionary();
gsb_lang.setText(english, `${english}`);
export let gsb_contact = new Dictionary();
export let gsb_link = new Dictionary();
gsb_contact.setText(english, "hello@gsbtb.org");

export let wbs_title = new Dictionary();
wbs_title.setText(english, "Willkommensbündnis Steglitz-Zehlendorf");
export let wbs_body = new Dictionary();
wbs_body.setText(english, "Willkommensbündnis is an NGO that holds local events in Berlin like johanes and\
                        round tables where refugees can come and meet people while getting help. The round table\
                        lets people of many different backgrounds discuss what they need help on.");
wbs_body.setText(german, "German description of NGO");
export let wbs_lang = new Dictionary();
wbs_lang.setText(english, `${german}`);
export let wbs_contact = new Dictionary();
export let wbs_link = new Dictionary();
wbs_contact.setText(english, "info@wikobuesz.berlin");

export let flr_title = new Dictionary();
flr_title.setText(english, "Flüchtlingsrat Berlin");
export let flr_body = new Dictionary();
flr_body.setText(english, "Flüchtlingsrat Berlin runs a Berlin refugee council, they connect with politicians in\
                        Berlin and other councils in other states to further the living conditions and rights of\
                        refugees. The council is open to all people to join.");
flr_body.setText(german, "German description of NGO");
export let flr_lang = new Dictionary();
flr_lang.setText(english, `${german}`);
export let flr_contact = new Dictionary();
export let flr_link = new Dictionary();
flr_contact.setText(english, "buero@fluechtlingsrat-berlin.de");

export let rw_title = new Dictionary();
rw_title.setText(english, "Refugees Welcome");
export let rw_body = new Dictionary();
rw_body.setText(english, "Refugees Welcome is an NGO that fosters relationships between refugees and locals.");
rw_body.setText(german, "German description of NGO");
export let rw_lang = new Dictionary();
rw_lang.setText(english, `${english}`);
export let rw_contact = new Dictionary();
rw_contact.setText(english, "hi@refugees-welcome.net");



