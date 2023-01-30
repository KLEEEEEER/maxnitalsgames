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
                    a(href="#" id="dark_theme_toggle_off" target="_blank")
                        i(class="fas fa-toggle-off")
                    a(href="#" id="dark_theme_toggle_on" target="_blank")
                        i(class="fas fa-toggle-on")
                    i(class="fas fa-moon position-absolute night-mode-icon")
</template>

<script>
    export default {
        props: ['maininfo'],
    };
</script>