<template lang="pug">
div.card.mb-2
    div.card-body
        h5.card-title {{place.title}}
        h5(class="card-subtitle mb-2 text-muted") {{place.subtitle}}
        p.card-text(v-html="place.text")
</template>

<script>
    export default {
        props: ['place'],
    };
</script>