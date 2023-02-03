<template lang="pug">
div(class="row d-print-none")
    div.col-md-2
    div.col-md-8.d-flex.justify-content-center
        a(v-if="isShowingAll == false" @click.prevent="showAll" class="btn btn-primary" target="_blank" href="#")= "Показать все"
        a(v-else @click.prevent="hideAll" class="btn btn-primary" target="_blank" href="#")= "Скрыть"
    div.col-md-2
</template>

<script>
    export default {
        data() {
            return {
                isShowingAll: false,
            }
        },
        methods: {
            showAll() {
                this.isShowingAll = true;
                this.$emit('onShowingChanged', this.isShowingAll);
            },
            hideAll() {
                this.isShowingAll = false;
                this.$emit('onShowingChanged', this.isShowingAll);
            }
        }
    };
</script>