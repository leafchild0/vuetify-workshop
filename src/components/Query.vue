<template>
  <v-card class="query" outlined>
        <div>
			<v-select
			ref="status"
			class="query__status"
				v-model="selectedResponse"
				:items="responses"
				solo
				outlined
				height="40">
				<template v-slot:item="data">
					<v-icon>mdi-dropbox</v-icon>
					<div class="status-item">
						{{data.item}}
					</div>
				</template>
			</v-select>
		</div>
        <div @click="openQuery" class="query__template">{{query.template}}</div>
        <div @click="openQuery" class="query__physician">{{query.physician}}</div>
        <div @click="openQuery" class="query__date">{{query.sendDate}}</div>
        <div @click="openQuery" class="query__impact">{{query.impact}}</div>
  </v-card>
</template>

<script>
	export default {
		name: 'tab-query',
		props: {
			query: Object,
			responses: Array
		},
		computed: {
			selectedResponse: {
				get()
				{
					return this.query.status || 'Pending';
				},
				set(value)
				{
					if (value != this.query.response) this.$emit('response', {id: this.query.id, status: value});
				}
			}
		},
		methods: {
			openQuery()
			{
				this.$emit('open', this.query.id);
			}
		}
	};
</script>

<style scoped lang="scss">

.query__status.v-input {
	font-size: 14px;
}

.status-item {
	font-size: 14px;
	padding: 0 4px;
}

.query {
	width: 100%;
	cursor: pointer;
	display: flex;
	justify-content: space-beQueritween;
	padding: 0 10px;
	font-size: 14px;
	height: 60px;
	align-items: center;
	margin-bottom: 8px;
	border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(36, 50, 66, 0.15);
    transition: 0.12s ease;

	&:hover {
		box-shadow: 0 20px 30px 0 rgba(35, 50, 66, 0.14);
    	z-index: 5;
    	position: relative;
	}

	&__status {
			width: 160px;
			height: 40px;
		}

		&__template {
			flex: 1;
			justify-content: flex-start;
			padding-left: 10px;
			height: 100%;
			display: flex;
    		align-items: center;
	
		}

		&__physician {
			width: 160px;
			height: 100%;
			display: flex;
    		align-items: center;
		}

		&__date {
			width: 100px;
			height: 100%;
			display: flex;
    		align-items: center;
		}

		&__impact {
			width: 140px;
			height: 100%;
			display: flex;
    		align-items: center;
		}
}

</style>