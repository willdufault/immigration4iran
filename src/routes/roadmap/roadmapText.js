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
step1_title.setText(persian, "هنگام ورود");
export let step1_body = new Dictionary();
step1_body.setText(english, "The applicant can go to a security authority (such as the police), an immigration authority, a reception \
                                facility, an arrival center, or an AnkER facility.");
step1_body.setText(persian, "متقاضی می تواند به یک مقام امنیتی (مانند پلیس)، یک مرجع مهاجرت، یک مرکز پذیرش، یک مرکز ورود، یا یک مرکز AnkER مراجعه کند.")
step1_body.setText(german, "German description of NGO");

export let step2_title = new Dictionary();
step2_title.setText(english, "Receive Proof of Arrival");
step2_title.setText(persian, "دریافت مدرک ورود");
export let step2_body = new Dictionary();
step2_body.setText(english, "The applicant will receive proof of arrival at a reception center. It will allow access to state benefits, such \
                                as accommodation, medical treatment, and food.");
step2_body.setText(persian, "متقاضی مدرک ورود به مرکز پذیرش را دریافت خواهد کرد. این امکان دسترسی به مزایای دولتی مانند مسکن، درمان پزشکی و غذا را فراهم می کند.")
step2_body.setText(german, "German description of NGO");

export let step3_title = new Dictionary();
step3_title.setText(english, "Reception Centers");
step3_title.setText(persian, "مراکز پذیرش");
export let step3_body = new Dictionary();
step3_body.setText(english, "The decision for acceptance to a reception center can take up to 6 months. To keep families together, \
                                applicants may be moved to different centers. Procedures in a reception center include \
                                medical examinations, recording of personal data, identity check, asylum application, asylum interview, \
                                and initial integration measures.");
step3_body.setText(persian, "تصمیم برای پذیرش در یک مرکز پذیرش می تواند تا 6 ماه طول بکشد. برای حفظ خانواده ها در کنار هم، متقاضیان ممکن است به مراکز مختلف منتقل شوند. اقدامات در یک مرکز پذیرش شامل معاینات پزشکی، ثبت اطلاعات شخصی، بررسی هویت، درخواست پناهندگی، مصاحبه پناهندگی و اقدامات اولیه ادغام است.")
step3_body.setText(german, "German description of NGO");

export let step4_title = new Dictionary();
step4_title.setText(english, "Personal Asylum Application");
step4_title.setText(persian, "درخواست پناهندگی شخصی");
export let step4_body = new Dictionary();
step4_body.setText(english, "The applicant can apply at a Federal Office branch like an arrival center or an AnkER facility. The \
                                applicant must be able to prove identity with official documents (e.g. national passport, birth \
                                certificate, or driver’s license). All information will be in the applicant’s native language and \
                                interpreters are available.");
step4_body.setText(persian, `متقاضی می تواند در شعبه اداره فدرال مانند یک مرکز ورود یا یک مرکز AnkER درخواست دهد. اینمتقاضی باید بتواند هویت خود را با مدارک رسمی (مانند گذرنامه ملی، تولد) اثبات کندگواهینامه یا گواهینامه رانندگی). تمام اطلاعات به زبان مادری متقاضی خواهد بود و مترجمان در دسترس هستند.`)
step4_body.setText(german, "German description of NGO");

export let step5_title = new Dictionary();
step5_title.setText(english, "Receive Residence Permit");
step5_title.setText(persian, "دریافت مجوز اقامت");
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
step51_body.setText(persian, "الف) در صورتی که متقاضی از شرایط خوبی برخوردار باشد، باید به مدت 3 ماه در مرکز پذیرش بماند، اما پس از آن می تواند آزادانه در آلمان حرکت کند.");
step52_body.setText(persian, "ب) اگر متقاضی شرایط بدی دارد، باید در مرکز پذیرش بماند و در صورت رد شدن درخواست شخصی، باید قبل از ترک آلمان در محل بماند.");
step53_body.setText(persian, "ج) اگر درخواست شخصی به‌عنوان «صراحتاً بی‌اساس» یا «غیر قابل قبول» رد شود، متقاضیان باید قبل از ترک آلمان در مراکز پذیرش بمانند.");


export let step6_title = new Dictionary();
step6_title.setText(english, "Contact Foreign Office to Set Up Personal Interview");
step6_title.setText(persian, "برای تنظیم مصاحبه شخصی با وزارت خارجه تماس بگیرید");
export let step61_body = new Dictionary();
export let step62_body = new Dictionary();
step61_body.setText(english, "The most important part of the asylum seeking process, where applicant presents case for asylum.\
                                Applicant can set up the interview on this website: ");
step62_body.setText(english, "https://www.auswaertiges-amt.de/en/about-us/contact");
step61_body.setText(german, "German description of NGO");
step62_body.setText(german, "https://www.auswaertiges-amt.de/de/about-us/contact");
step61_body.setText(persian, "مهمترین بخش از روند درخواست پناهندگی، ارائه پرونده برای پناهندگی متقاضی است. متقاضی می تواند مصاحبه را در این وب سایت تنظیم کند:");
step62_body.setText(persian, "https://www.auswaertiges-amt.de/de/about-us/contact");


export let step7_title = new Dictionary();
step7_title.setText(english, "Personal Interview");
step7_title.setText(persian, "مصاحبه شخصی");
export let step7_body = new Dictionary();
step7_body.setText(english, "Applicants must attend the personal interview, or notify interviewers of an absence. It is possible for\
                            another person who is not in the asylum process to attend as an advisor, with permission of the interviewee\
                            Applicants will be given sufficient time to present reason for flight, describe route, what would happen if\
                            they returned. Applicants must be honest and are allowed to bring applicable evidence (photographs,\
                            documents from police or other authorities, medical reports) to support their case. ");
step7_body.setText(german, "German description of NGO");
step7_body.setText(persian, "متقاضیان باید در مصاحبه شخصی شرکت کنند، یا غیبت را به مصاحبه کننده اطلاع دهند. این امکان وجود دارد که فرد دیگری که در پروسه پناهندگی نیست به عنوان مشاور شرکت کند، با اجازه مصاحبه شونده به متقاضیان فرصت کافی داده می شود تا دلیل پرواز را ارائه دهند، مسیر را توضیح دهند، در صورت بازگشت چه اتفاقی می افتد. متقاضیان باید صادق باشند و اجازه دارند مدارک قابل اجرا (عکس ها، اسناد پلیس یا سایر مقامات، گزارش های پزشکی) را برای حمایت از پرونده خود بیاورند.");


export let step8_title = new Dictionary();
step8_title.setText(english, "Receive Decision");
step8_title.setText(persian, " دریافت تصمیم");
export let step8_body = new Dictionary();
step8_body.setText(english, "Possible decisions include entitlement to asylum, refugee protection, subsidiary protection, ban on\
                                deportation, and denial of asylum. Decisions can be appealed in the case of a denial. If applicant\
                                is accepted they are provided with one of three residence permits: given right to asylum, subsidiary\
                                protection, or national ban on deportation.");
step8_body.setText(german, "German description of NGO");
step8_body.setText(persian, "تصمیمات احتمالی شامل حق پناهندگی، حمایت از پناهندگان، حفاظت فرعی، ممنوعیت اخراج و رد پناهندگی است. تصمیمات در صورت رد قابل تجدید نظر هستند. اگر متقاضی پذیرفته شود، یکی از سه مجوز اقامت به آنها داده می شود: حق پناهندگی، حمایت فرعی، یا ممنوعیت ملی اخراج.O");

export let step9_title = new Dictionary();
step9_title.setText(english, "Unaccompanied Minors");
step9_title.setText(persian, " خردسالان بدون همراه");
export let step9_body = new Dictionary();
step9_body.setText(english, "If the applicant is under 18 and enters an EU member state without an adult or if left unaccompanied\
                            they are an unaccompanied minor. Minors are put in care of the youth welfare office and can possibly\
                            be reunited with family.");
step9_body.setText(german, "German description of NGO");
step9_body.setText(persian, "اگر متقاضی زیر 18 سال باشد و بدون بزرگسال وارد یکی از کشورهای عضو اتحادیه اروپا شود یا اگر بدون همراه رها شود، یک خردسال بدون همراه است. خردسالان تحت مراقبت اداره رفاه جوانان قرار می‌گیرند و احتمالاً می‌توانند به خانواده ملحق شوند.");

export let step10_title = new Dictionary();
step10_title.setText(english, "Integration and Future Prospects");
step10_title.setText(persian, ". یکپارچگی و چشم اندازهای آینده");
export let step10_body = new Dictionary();
step10_body.setText(english, "Integration courses are offered by the Federal Foreign Office at specific reception\
                            centers. The reception center also offers access to local employment agencies.");
step10_body.setText(german, "German description of NGO");
step10_body.setText(persian, "دوره های ادغام توسط وزارت خارجه فدرال در مراکز پذیرش خاص ارائه می شود. مرکز پذیرش همچنین دسترسی به آژانس های کاریابی محلی را ارائه می دهد.");