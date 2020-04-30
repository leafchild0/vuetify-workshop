import Vue from 'vue';
import App from './QueriesTab.vue';
import vuetify from './VuetifyConf';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	vuetify
}).$mount('#app');
