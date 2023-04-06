<main>
    <a href="mailto:{ngoContact.getText()}" target="_blank" rel="noreferrer"> {baseContact.getText()} {ngoContact.getText()} </a>
</main>

<script>
    import {contact} from "./NGOs/ngoText.js";
    export let baseContact = contact;
    export let ngoContact;
</script>