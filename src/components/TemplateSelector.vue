<template>
	<v-menu
		class="template-selector"
		top
		:close-on-content-click="false"
		v-model="isMenuOpen"
		z-index="30"
		offset-y
	>
		<template v-slot:activator="{ on }">
			<v-btn
				fixed
				fab
				bottom
				right
				color="primary"
				v-on="on"
			>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</template>
		<v-list
			class="template-list"
			dense
		>
			<v-list-item @click="selectTemplate">
				<v-list-item-title class="template-item">Freeform template</v-list-item-title>
			</v-list-item>
			<v-list-item>

				<v-text-field
					single-line
					prepend-inner-icon="search"
					v-model="search"
					class="template-search"
					placeholder="Type to search"
				></v-text-field>

			</v-list-item>
			<v-list-item
				v-for="item in filteredTemplates"
				:key="item.id"
				@click="selectTemplate(item)"
			>
				<v-list-item-title class="template-item">{{ item.name }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
	export default {
		name: 'template-selector',
		props: {
			templates: Array
		},
		data: () => 
		{
			return {
				search: '',
				isMenuOpen: false
			};
		},
		computed: {
			filteredTemplates() 
			{
				return (
					this.templates.filter(t => t.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) ||
					this.templates
				);
			}
		},
		methods: {
			selectTemplate(template) 
			{
				this.$emit('selected', template);
				this.isMenuOpen = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.template-selector {
	}

	.template-list {
		width: 280px;
		height: 380px;
		overflow-y: auto;

		.v-list-item {
			padding: 0;
			height: 30px;
			width: 100%;
			padding: 0 5px;
			border-bottom: 1px solid #e5dee8;
			min-height: inherit;
		}
	}

	.template-item {
		font-size: 12px;
	}
</style>