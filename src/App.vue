<template lang="pug">
TopNavBar(:maininfo="maininfo")
div.container
    MainInfoBar(:maininfo="maininfo")
    Background(:maininfo="maininfo")
    Skills(:maininfo="maininfo")
    Experience(:maininfo="maininfo")
    JobProjects(:maininfo="maininfo")
</template>

<script>
    import TopNavBar from './components/TopNavBar.vue';
    import MainInfoBar from './components/MainInfoBar.vue';
    import Background from './components/Background.vue';
    import Skills from './components/Skills.vue';
    import Experience from './components/Experience.vue';
    import JobProjects from './components/JobProjects.vue';
    import maininfojson from './data/maininfo.json';

    export default {
        components: {
            TopNavBar, MainInfoBar, Background, Skills, Experience, JobProjects
        },
        data() {
            return {
                maininfo: maininfojson
            }
        }
    };
</script>