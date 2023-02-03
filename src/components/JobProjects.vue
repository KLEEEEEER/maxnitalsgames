<template lang="pug">
a(class="anchor" name="work-projects")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Рабочие проекты
        div.row.pt-3.projects-list(v-if="isShowingAll == true")
            each work_project in maininfo.work_projects
                ProjectCard(:project="work_project")
        div.row.pt-3.projects-list(v-else)
            each work_project in maininfo.work_projects.slice(0, 4)
                ProjectCard(:project="work_project")
    div.col-md-2

ShowAllButton(@onShowingChanged="showingChanged")
</template>

<script>
    import ProjectCard from './cards/ProjectCard.vue';
    import ShowAllButton from './elements/ShowAllButton.vue';
    export default {
        data() {
            return {
                isShowingAll: false
            }
        },
        methods: {
            showingChanged(value) {
                this.isShowingAll = value;
            }
        },
        components: {
            ProjectCard,
            ShowAllButton
        },
        props: ['maininfo'],
    };
</script>