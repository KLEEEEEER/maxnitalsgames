<template lang="pug">
TopNavBar(:maininfo="maininfo")
    div.container
        div.row.first-row
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