'use strict';

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'wtp',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},

		fontawesome: {
			icons: {
				'free-solid-svg-icons': 'all',
				'free-brands-svg-icons': 'all'
			}
		},

		torii: {
			sessionServiceName: 'session',
			providers: {
				'google-oauth2': {
					apiKey: '473312347142-h5shc2qj1pru7plp00e3th3mcv3abjrt.apps.googleusercontent.com',
					redirectUri: 'https://what-to-play.herokuapp.com/oauth2callback',
					tokenExchangeUri: 'https://what-to-play-api.herokuapp.com/oauth/callback'
				}
			}
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
		ENV['ember-cli-mirage'] = {
			enabled: false
		};

		ENV.torii.providers['google-oauth2'] = {
			apiKey: '473312347142-h5shc2qj1pru7plp00e3th3mcv3abjrt.apps.googleusercontent.com',
			redirectUri: 'http://localhost:4200/oauth2callback',
			tokenExchangeUri: 'http://localhost:1337/oauth/callback'
		};
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;

		ENV.torii.providers['google-oauth2'] = {
			apiKey: '473312347142-h5shc2qj1pru7plp00e3th3mcv3abjrt.apps.googleusercontent.com',
			redirectUri: 'https://test-what-to-play.herokuapp.com/oauth2callback',
			tokenExchangeUri: 'https://test-what-to-play-api.herokuapp.com/oauth/callback'
		};
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
	}

	return ENV;
};
