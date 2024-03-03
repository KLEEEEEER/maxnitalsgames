<template lang="pug">
div(class="pt-3 mb-3 col-md-6")
    div(class="gameproject card")
        div(id="carousel"+this.id class="carousel slide carousel-fade mb-3" data-ride="carousel")
            div.carousel-inner
                each image, index in project.images
                    div(class="carousel-item " + active_text)
                        a(:href="image.detail" class="d-flex justify-content-center" target="_blank")
                            img(:src="image.min" class="d-block" :alt="image.alt")
            a(class="carousel-control-prev" href="#carousel"+this.id role="button" data-slide="prev")
                span(class="carousel-control-prev-icon" aria-hidden="true")
                span(class="sr-only") Previous
            a(class="carousel-control-next" href="#carousel"+this.id role="button" data-slide="next")
                span(class="carousel-control-next-icon" aria-hidden="true")
                span(class="sr-only") Next
        h3.text-center
            img(:src="project.logo" class="logo-icon")
            span= project.title
        div.container
            div.row
                div.col-6
                    p.text-center= project.subtitle
                div.col-6
                    p.text-center= project.time
        p(v-html="project.description")
        p.text-center
            each link in project.links
                a(:class="link.button_class" target="_blank" :href="link.href" v-html="link.button_text")
</template>

<script>
    export default {
        props: ['project'],
        data() {
            return {
                id: ''
            }
        },
        mounted() {
            this.id = this.$carouselIndex;
            this.$carouselIndex++;
        }
    };
</script>