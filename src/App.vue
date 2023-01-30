<template>
    <TopNavBar :maininfo="maininfo"/>
</template>

<script>
    import TopNavBar from './components/TopNavBar.vue';
    import maininfojson from './data/maininfo.json';

    export default {
        components: {
            TopNavBar
        },
        data() {
            return {
                maininfo: maininfojson
            }
        }
    };
</script>