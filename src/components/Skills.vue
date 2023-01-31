<template lang="pug">
a(class="anchor" name="skills")

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        hr
    div.col-md-2

div(class="row d-print-none")
    div.col-md-2
    div.col-md-8
        h2.mb-4 Навыки
        div.table-responsive
            table(class="table table-borderless")
                thead
                    tr
                        th(scope="col") Языки
                        th(scope="col") Движки/Фреймворки
                        th(scope="col") Инструменты
                tbody
                    tr(v-for="n in maxSkills")
                        td= maininfo.skills.languages[n]
                        td= maininfo.skills.engines[n]
                        td= maininfo.skills.tools[n]
    div.col-md-2

    div.col-md-2
    div.col-md-8
        h5 Прочее:
        p В работе часто использую событийное программирование через #[b C# events] и #[b UnityEvents], а так же #[b Scriptable objects]
        p Использую такие паттерны проектирования как #[b State], #[b Observer] и #[b Command].
        p Так же был опыт добавления рекламных баннеров #[b AdMob] в своё приложение Rate Anything, но на Xamarin.
    div.col-md-2
</template>

<script>
    export default {
        props: ['maininfo'],
        computed: {
            maxSkills() {
                return Math.max(this.maininfo.skills.languages.length, this.maininfo.skills.engines.length, this.maininfo.skills.tools.length);
            }
        }
    };
</script>