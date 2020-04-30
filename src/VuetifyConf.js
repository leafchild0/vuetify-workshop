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
				primary: '#532d6d',
				secondary: '#eecc52',
				accent: '#19a652'
			}
		}
	}
};

export default new Vuetify(opts);