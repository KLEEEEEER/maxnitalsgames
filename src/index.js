import './styles.scss';
import { createApp } from 'vue';

const VueApp = {
    data() {
        return {
            message: 'Hello!'
        }
    }
}

createApp(VueApp).mount('#vue-app');

