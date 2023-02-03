<template lang="pug">
a(class="anchor" name="gamejams")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Геймджемы 
        div.row.pt-3.projects-list
            each gamejam in maininfo.gamejams
                ProjectCard(:project="gamejam")
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