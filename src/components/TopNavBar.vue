<template lang="pug">
//div
    meta(name="viewport" content="width=device-width, initial-scale=1")
    meta(charset="utf-8")
    meta(property="og:title" :content="maininfo.og_info.title")
    meta(property="og:site_name" :content="maininfo.og_info.site_name")
    meta(property="og:url" :content="maininfo.og_info.url")
    meta(property="og:description" :content="maininfo.og_info.description")
    meta(property="og:image" :content="maininfo.og_info.image")
    link(rel="icon" href="dist/img/face(500x500).png")

a(class="anchor" name="top")
nav(class="navbar navbar-expand-lg navbar-light bg-light sticky-top")
    button(class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation")
        span.navbar-toggler-icon
    div(class="collapse navbar-collapse d-lg-flex justify-content-lg-center" id="navbarNavDropdown")
        ul(class="navbar-nav pl-2")
            each anchor in maininfo.top_links
                li(class="nav-item")
                    a(class="nav-link" :href="'#' + anchor.name")= anchor.title
            li.nav-item
                div(class="position-relative d-inline-block dark-theme-toggle-wrapper ml-5")
                    i(class="fas fa-sun position-absolute day-mode-icon")
                    ToggleButton(@onToggleChanged="darkmodeToggleChanged" :toggleValue="isDarkmode")
                    //- a(v-if="isDarkmode == 0" v-on:click.prevent="toggleDarkmode" href="#" target="_blank")
                    //-     i(class="fas fa-toggle-off")
                    //- a(v-else v-on:click.prevent="toggleDarkmode" href="#" target="_blank")
                    //-     i(class="fas fa-toggle-on")
                    i(class="fas fa-moon position-absolute night-mode-icon")
</template>

<script>
    import ToggleButton from './elements/ToggleButton.vue';
    export default {
        props: ['maininfo'],
        components: {
            ToggleButton
        },
        data() {
            return {
                isDarkmode: false 
            }
        },
        mounted() {
            if (localStorage.dark_theme) {
                this.isDarkmode = JSON.parse(localStorage.dark_theme) === true;

                if (this.isDarkmode == false) {
                    document.body.classList.remove('dark-theme');
                } else {
                    document.body.classList.add('dark-theme');
                }
            }
        },
        methods: {
            darkmodeToggleChanged() {
                //this.isDarkmode = (this.isDarkmode == true) ? false : true;
                this.isDarkmode = !this.isDarkmode;
                localStorage.dark_theme = this.isDarkmode;

                if (this.isDarkmode == false) {
                    document.body.classList.remove('dark-theme');
                } else {
                    document.body.classList.add('dark-theme');
                }
            }
        }
    };
</script>