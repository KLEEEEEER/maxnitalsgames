<template lang="pug">
a(class="anchor" name="projects")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Личные проекты
        div.row.pt-3.projects-list
            each project in maininfo.projects
                ProjectCard(:project="project")
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