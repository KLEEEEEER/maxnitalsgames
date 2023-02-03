<template lang="pug">
a(v-if="toggleValue == false" v-on:click.prevent="toggleOn" href="#" target="_blank")
    i(class="fas fa-toggle-off")
a(v-else v-on:click.prevent="toggleOff" href="#" target="_blank")
    i(class="fas fa-toggle-on")
</template>

<script>
    export default {
        props: ['toggleValue'],
        methods: {
            toggleOn() {
                this.$emit('onToggleChanged');
            },
            toggleOff() {
                this.$emit('onToggleChanged');
            }
        }
    };
</script>