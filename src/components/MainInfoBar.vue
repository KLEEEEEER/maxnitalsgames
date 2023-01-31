<template lang="pug">
div.row.first-row
    .col-md-2.col-lg-3.d-print-none
    div(class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-md-end justify-content-center d-print-none")
        div(class="main-face float-md-right float-sm-none")
    div(class="col-12 col-sm-6 col-md-4 col-lg-4 justify-content-md-end justify-content-center align-items-center d-print-none")
        h2= maininfo.top_info.h2
        h4= maininfo.top_info.h4
        p= maininfo.top_info.about
        div(class="d-flex justify-content-md-start justify-content-center")
            ul(class="list-group list-group-horizontal social-icons")
                each link_icon in maininfo.top_info.link_icons
                    li(class="list-group-item")
                        a(:href="link_icon.link"  target="_blank")
                            i(:class="link_icon.icon_class" data-html="true" data-toggle="tooltip" data-placement="top" :title="link_icon.title + '<i class=\"fas fa-external-link-alt\"></i>'")
    div(class="d-none col-8 col-sm-6 col-md-4 col-lg-4 justify-content-md-end justify-content-center d-print-inline-block")
        p.font-weight-bold.h4= maininfo.print_info.name
        p
            <strong>Контактная информация:</strong><br>
            each contact in maininfo.print_info.contacts
                span {{contact.name}}:
                        a(:href="contact.href" target="_blank")= contact.title
                        br
    div(class="col-4 d-none d-print-inline-block main-face-print-wrapper")
        img(class="main-face-print" :src="maininfo.print_info.image")

    div(class="col-md-6 d-print-none")

div(class="row mt-3 d-print-none")
    div.col-md-2
    div.col-md-8
        p(v-html="maininfo.top_info.about_additional")
        p.info-box(v-html="maininfo.top_info.about_additional_examples")
    div.col-md-2
</template>

<script>
    export default {
        props: ['maininfo'],
    };
</script>