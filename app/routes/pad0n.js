import Route from '@ember/routing/route';

export default Route.extend({
	redirect: function() {
		window.location.replace('https://www.youtube.com/user/pad0n');
	}
});
