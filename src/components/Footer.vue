<template lang="pug">
a(class="anchor d-print-none" name="info")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-4.col-sm-12
        h2.mb-4 Контакты
        each contact in maininfo.contacts
            p=contact.title+": "
                a(:href="contact.href")= contact.text
    div(class="col-lg-3 col-md-12 col-sm-12 mb-2 d-flex justify-content-center position-relative d-sm-none d-md-none d-lg-block")
        p.text-center Ссылка на эту страницу
        img(src="img/site_qr.png" class="qr-code")

    div(class="col-lg-1 col-md-12 col-sm-12 mb-2 d-flex justify-content-center")
        a(href="#top" class="btn btn-primary") ↑ Наверх

    div.col-md-2

div(class="row d-none d-print-block")
    div.col-md-2
    div.col-md-8
        h2.mb-4 О себе:
        p= maininfo.print_info.about_me
    div.col-md-2

div(class="row d-none d-print-block")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-none d-print-block")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Участие в проектах:
        div.row
            each project in maininfo.print_info.projects
                div(class="card mb-2 col-4")
                    img(class="card-img-top" :src="project.image" alt="...")
                    div.card-body
                        h5.card-title= project.title
                        h6(class="card-subtitle mb-2 text-muted")= project.subtitle
                        p.card-text= project.description

    div.col-md-2

div.row.d-none.d-print-block
    div.col-md-12
        br
        p Другие проекты и более подробная информация на
        a(href="https://kleeeeeer.github.io/maxnitalsgames/" target="_blank") https://kleeeeeer.github.io/maxnitalsgames/
</template>

<script>
    export default {
        props: ['maininfo'],
    };
</script>