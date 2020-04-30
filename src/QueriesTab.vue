<template>
  <div id='queries-tab'>
    <tab-header></tab-header>
  </div>
</template>

<script>

	import TabHeader from './components/Header.vue';

	export default {
		name: 'queries-tab',
		components: {
			TabHeader
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
