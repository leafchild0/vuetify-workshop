<template>
  <v-app>
    <v-content>
      <div id='queries-tab'>
        <tab-header></tab-header>
      </div>

      <v-btn absolute fab bottom right color="primary" @click="openQueryBuilder">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-content>

    <v-snackbar v-model="notification">
      {{ notificationText }}
      <v-btn color="accent" text @click="notification = false" timeout=2000>
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>
<script>

	import TabHeader from './components/Header.vue';

	export default {
		name: 'queries-tab',
		components: {
			TabHeader
		},
		data: () => 
		{
			return {
				notification: false,
				notificationText: 'Open New Query'
			};
		},
		methods: {
			openQueryBuilder()
			{
				// Logic to open query builder
				this.notification = true;
			}
		}
	};
</script>

<style lang="scss">
#queries-tab {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: rgb(226, 226, 226);
  margin: 10px;
}
</style>
