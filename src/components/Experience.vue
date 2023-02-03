<template lang="pug">
a(class="anchor" name="experience")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-none d-print-block")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Основные навыки:
        ul
            li Владение языками: {{maininfo.skills.languages.join(", ")}}
            li Опыт работы с {{maininfo.skills.engines.join(", ")}}
            li {{maininfo.skills.tools.join(", ")}}
        h5 Иностранные языки:
        ul
            each language in maininfo.print_info.languages
                li= language
    div.col-md-2

div(class="row")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Опыт работы:
        each experience in maininfo.experiences
            ExperienceCard(:place="experience")
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Образование:
        each education in maininfo.educations
            ExperienceCard(:place="education")
            div.col-md-2
</template>

<script>
    import ExperienceCard from './cards/ExperienceCard.vue';
    export default {
        components: {
            ExperienceCard
        },
        props: ['maininfo'],
    };
</script>