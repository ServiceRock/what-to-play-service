import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	store: Ember.inject.service(), // we will use Ember.store for search
	foundItems: null, // we need to store found items

	findItem(value) {
		// we get `store` service to search
		// we get `model` to know which model to query
		//    and `key` to narrow down a search to one attribute
		const { store, model, key } = this.getProperties('store', 'model', 'key');

		let query = {};
		query[key] = value;

		// we query the data and set the results as ‘foundItems’
		store.query(model, query).then((items) => {
			this.set('foundItems', items);
		});
	},

	actions: {
		keyUp(value) {
			this.findItem(value);
		}
	}
});
