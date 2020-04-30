<template>
  <v-app>
    <v-content>
      <div id='queries-tab'>
        <tab-header></tab-header>

        <tab-query v-for="q in queries" :query="q" :key="q.id"></tab-query>
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
	import TabQuery from './components/Query.vue';

	export default {
		name: 'queries-tab',
		components: {
			TabHeader,
			TabQuery
		},
		data: () => 
		{
			return {
				notification: false,
				notificationText: 'Open New Query',
				queries: [
					{id: 1, status: 'PENDING', template: 'Other', physician: 'John Doe', sendDate: '20/05/2020', impact: 'MCC'},
					{id: 2, status: 'AGREED', template: 'Sepsis', physician: 'Victor Malyshev', sendDate: '10/03/2020', impact: 'CC'},
					{id: 3, status: 'PENDING', template: 'Other', physician: 'Joanna Doe', sendDate: '01/05/2018', impact: ''}
				]
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
  height: 100%;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: rgb(226, 226, 226);
  padding: 6px;
}
</style>
