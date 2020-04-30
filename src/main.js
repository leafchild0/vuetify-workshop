import Vue from 'vue';
import App from './QueriesTab.vue';
import vuetify from './VuetifyConf';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	vuetify
}).$mount('#app');
