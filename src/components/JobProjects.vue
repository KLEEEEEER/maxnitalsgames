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
        div.row.pt-3.projects-list
            each work_project in maininfo.work_projects
                ProjectCard(:project="work_project")
    div.col-md-2
</template>

<script>
    import ProjectCard from './cards/ProjectCard.vue';
    export default {
        components: {
            ProjectCard
        },
        props: ['maininfo'],
    };
</script>