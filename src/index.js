import './styles.scss';
import { createApp } from 'vue';
import App from './App.vue';
//import * as uiv from 'uiv'

//Vue.use(uiv, {prefix: 'uiv'})
const app = createApp(App).mount('#app');
//app.use(uiv);

//app.config.globalProperties.$carouselIndex = 0;