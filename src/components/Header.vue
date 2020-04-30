<template>
  <div class="header-tab">
	  <span class="header-tab__status">Status</span>
	  <span class="header-tab__template">Template</span>
	  <span class="header-tab__physician">Physician</span>
	  <span class="header-tab__date">Send Date</span>
	  <span class="header-tab__impact">Expected Impact</span>
  </div>
</template>

<script>
	export default {
		name: 'tab-header'
	};
</script>

<style scoped lang="scss">
	.header-tab {
		display: flex;
		justify-content: space-between;
		margin: 0 20px;
		font-size: 14px;
		font-weight: 700;
		height: 50px;
		align-items: center;
		color: grey;

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