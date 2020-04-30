<template>
  <v-app>
    <v-content>
      <div id='queries-tab'>
        <tab-header></tab-header>

        <tab-query v-for="q in queries" 
          :query="q"
          :responses="responses" 
          :key="q.id" 
          @open="openQueryBuilder"
          @response="openQueryBuilderWithStatus">
        </tab-query>
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

	import axios from 'axios';

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
				responses: ['Pending', 'Agreed', 'Disagreed', 'Not responded'],
				queries: []
			};
		},
		methods: {
			openQueryBuilder(id)
			{
				if (id) 
				{
					this.notificationText = 'Open New Query with id ' + id;
				}
				// Logic to open query builder
				this.notification = true;
			},
			openQueryBuilderWithStatus(value)
			{
				if (value) 
				{
					this.notificationText = 'Open New Query with value ' + value.status;
				}
				// Logic to open query builder
				this.notification = true;
			}
		},
		async created()
		{
			try
			{
				const queriesResponse = await axios.get('/queries');
				if (queriesResponse.status === 200)
				{
					this.queries = queriesResponse.data;
				}
			}
			catch(e)
			{
				console.error(e);
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

	.v-text-field--solo .v-input__slot, 
  .v-text-field--outlined .v-input__slot {
		min-height: auto !important;
		min-width: auto !important;
    display: flex !important;
    align-items: center !important;
	}
</style>
