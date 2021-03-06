<template>
	<v-app>
		<v-content>
			<div id='queries-tab'>
				<tab-header></tab-header>

				<tab-query
					v-for="q in queries"
					:query="q"
					:responses="responses"
					:key="q.id"
					@open="openQueryBuilder"
					@response="openQueryBuilderWithStatus"
				>
				</tab-query>
			</div>

			<template-selector
				:templates="templates"
				@selected="openQueryBuilderWithTemplate"
			></template-selector>

		</v-content>

		<v-snackbar v-model="notification">
			{{ notificationText }}
			<v-btn
				color="accent"
				text
				@click="notification = false"
				timeout=2000
			>
				Close
			</v-btn>
		</v-snackbar>
	</v-app>
</template>
<script>
	import axios from 'axios';

	import TabHeader from './components/Header.vue';
	import TabQuery from './components/Query.vue';
	import TemplateSelector from './components/TemplateSelector.vue';

	export default {
		name: 'queries-tab',
		components: {
			TabHeader,
			TabQuery,
			TemplateSelector
		},
		data: () => 
		{
			return {
				notification: false,
				notificationText: 'Open New Query',
				responses: [],
				queries: [],
				templates: []
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
			openQueryBuilderWithTemplate(template) 
			{
				if (template) 
				{
					this.notificationText =
						'Open New Query with template ' + template.name;
				}
				// Logic to open query builder
				this.notification = true;
			},
			openQueryBuilderWithStatus(value) 
			{
				if (value) 
				{
					this.notificationText =
						'Open New Query with value ' + value.status;
				}
				// Logic to open query builder
				this.notification = true;
			},
			async addNewQuery() 
			{
				const newQuery = {
					id: this.queries.length + 1,
					status: 'Agree',
					template: 'Other',
					physician: 'Victor Malyshev',
					sendDate: '10/03/2020',
					impact: 'CC'
				};

				try 
				{
					const queriesResponse = await axios.post('/queries', newQuery);
					if (queriesResponse.status === 201) 
					{
						this.notificationText = 'Added New Query';
						this.notification = true;
						this.queries.push(newQuery);
					}
				}
				catch (e) 
				{
					console.error(e);
				}
			}
		},
		async created() 
		{
			try 
			{
				const responsesResponse = await axios.get('/responses');
				if (responsesResponse.status === 200) 
				{
					this.responses = responsesResponse.data;
				}

				const templatesResponse = await axios.get('/templates');
				if (templatesResponse.status === 200) 
				{
					this.templates = templatesResponse.data;
				}

				const queriesResponse = await axios.get('/queries');
				if (queriesResponse.status === 200) 
				{
					this.queries = queriesResponse.data;
				}
			}
			catch (e) 
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
