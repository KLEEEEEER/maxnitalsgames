<template lang="pug">
a(class="anchor" name="background")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Бэкграунд
        p(v-html="maininfo.background_info.main_text")
</template>

<script>
    export default {
        props: ['maininfo'],
    };
</script>