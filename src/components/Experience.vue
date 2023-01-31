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
            ExperienceCard(:title="experience.title", :subtitle="experience.subtitle", :text="experience.text")
            //- div.card.mb-2
            //-     div.card-body
            //-         h5.card-title= experience.title
            //-         h5(class="card-subtitle mb-2 text-muted")= experience.subtitle
            //-         p.card-text= experience.text
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
            ExperienceCard(:title="education.title", :subtitle="education.subtitle", :text="education.text")
            //- div.card.mb-2
            //-     div.card-body
            //-         h5.card-title {{education.title}}
            //-         h5(class="card-subtitle mb-2 text-muted") {{education.subtitle}}
            //-         p.card-text {{education.text}}
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