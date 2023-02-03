<template lang="pug">
TopNavBar(:maininfo="maininfo")
div.container
    MainInfoBar(:maininfo="maininfo")
    Background(:maininfo="maininfo")
    Skills(:maininfo="maininfo")
    Experience(:maininfo="maininfo")
    JobProjects(:maininfo="maininfo")
    PersonalProjects(:maininfo="maininfo")
    Gamejams(:maininfo="maininfo")
    Footer(:maininfo="maininfo")
</template>

<script>
    import TopNavBar from './components/TopNavBar.vue';
    import MainInfoBar from './components/MainInfoBar.vue';
    import Background from './components/Background.vue';
    import Skills from './components/Skills.vue';
    import Experience from './components/Experience.vue';
    import JobProjects from './components/JobProjects.vue';
    import PersonalProjects from './components/PersonalProjects.vue';
    import Gamejams from './components/Gamejams.vue';
    import Footer from './components/Footer.vue';
    import maininfojson from './data/maininfo.json';

    export default {
        components: {
            TopNavBar, 
            MainInfoBar, 
            Background, 
            Skills, 
            Experience, 
            JobProjects,
            PersonalProjects,
            Gamejams,
            Footer 
        },
        data() {
            return {
                maininfo: maininfojson
            }
        }
    };
</script>