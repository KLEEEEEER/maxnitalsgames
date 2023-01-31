<template lang="pug">
div.card.mb-2
    div.card-body
        h5.card-title {{title}}
        h5(class="card-subtitle mb-2 text-muted") {{subtitle}}
        p.card-text(v-html="text")
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'text'],
    };
</script>