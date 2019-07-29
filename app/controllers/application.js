import Controller from '@ember/controller';
import { inject } from '@ember/service';
import config from '../config/environment';

export default Controller.extend({
	session: inject(),
	config: config.torii.providers['google-oauth2'],
	actions: {
		login() {
			this.get('session').authenticate('authenticator:torii', 'google');
		},

		logout() {
			this.get('session').invalidate();
		}
	}
});
