<template>
  <v-card class="query" outlined>
        <div class="query__status">{{query.status}}</div>
        <div class="query__template">{{query.template}}</div>
        <div class="query__physician">{{query.physician}}</div>
        <div class="query__date">{{query.sendDate}}</div>
        <div class="query__impact">{{query.impact}}</div>
  </v-card>
</template>

<script>
	export default {
		name: 'tab-query',
		props: {
			query: Object,
			responses: Array
		}
	};
</script>

<style scoped lang="scss">

.query {
	width: 100%;
	height: 60px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	font-size: 14px;
	height: 50px;
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
		}

		&__template {
			flex: 1;
			justify-content: flex-start;
		}

		&__physician {
			width: 160px;
		}

		&__date {
			width: 100px;
		}

		&__impact {
			width: 140px;
		}
}

</style>