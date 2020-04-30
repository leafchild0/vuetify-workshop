import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
	icons: {
		iconfont: 'mdi'
	},
	theme: {
		dark: false,
		themes: {
			light: {
				background: '#ffffff',
			}
		}
	}
};

export default new Vuetify(opts);