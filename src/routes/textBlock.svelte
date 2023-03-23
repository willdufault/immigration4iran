<script>
    import {Dictionary} from "./dictionary.js";
    let dict = new Dictionary();
    let title = 'Hello World.';
</script>

<main>
    <div class={"text-block-wrapper"}>
        <p> <slot>Hello World</slot> </p>
    </div>
</main>