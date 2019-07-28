import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | proposals list', function(hooks) {
	setupApplicationTest(hooks);

	test('brand name should be clickable', async function(assert) {
		await visit('/');
		await click('.navbar-brand');
		assert.equal(currentURL(), '/');
	});

	test('should show last proposals at the home page', async function(assert) {
		await visit('/');
		assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
	});

	test('should show search at the home page', async function(assert) {
		await visit('/');
		assert.equal(currentURL(), '/');
	});

	test('should show completed games at the home page', async function(assert) {
		await visit('/');
		assert.equal(currentURL(), '/');
	});

	test('should show Sing In / Sign Un links at the home page', async function(assert) {
		await visit('/');
		assert.equal(currentURL(), '/');
	});
});
