import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pad0n', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pad0n');
    assert.ok(route);
  });
});
