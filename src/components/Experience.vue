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
        div.row
            div.col-md-6
                h2.mb-4 Опыт работы:
            div.col-md-6.d-flex.justify-content-end.mb-4.toggle-button-holder
                p.toggle-button-holder__text-left.mr-3 Показать всё
                ToggleButton(@onToggleChanged="webToggleChanged" :toggleValue="isWebAvailable")
        div
            each experience in getExperience() 
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
    import ToggleButton from './elements/ToggleButton.vue';
    export default {
        data() {
            return {
                isWebAvailable: false
            }
        },
        components: {
            ExperienceCard,
            ToggleButton
        },
        methods: {
            webToggleChanged() {
                this.isWebAvailable = !this.isWebAvailable;
            },
            getExperience() {
                if (!this.isWebAvailable) {
                    return this.maininfo.experiences.filter((data) => data.isGameRelated).sort(
                        (a, b) => {
                            if (a.order > b.order) return 1;
                            if (a.order < b.order) return -1;
                            return 0;
                        }
                    );
                }
                else {
                    return this.maininfo.experiences.sort(
                        (a, b) => {
                            if (a.order > b.order) return 1;
                            if (a.order < b.order) return -1;
                            return 0;
                        }
                    );
                }
            }
        },
        props: ['maininfo'],
    };
</script>