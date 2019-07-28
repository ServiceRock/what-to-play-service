import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
			{
				title: 'Counter Strike 1.6',
				owner: 'pad0n',
				proposals: 15
			},
			{
				title: 'Counter Strike: Global Offensive',
				owner: 'your_problem',
				proposals: 1
			},
			{
				title: 'Detroit: Become Human',
				owner: 'Username1',
				proposals: 3
			},
			{
				title: 'Bioshok Infinity',
				owner: 'Username2',
				proposals: 5
			},
			{
				title: 'PUBG',
				owner: 'Username3',
				proposals: 3
			},
			{
				title: 'Game: Just for text',
				owner: 'Vent',
				proposals: 3
			},
			{
				title: 'Mortal Kombat 11',
				owner: 'Ihor Ostapchuk',
				proposals: 'over999'
			}
		];
	}
});
