'use strict';

module.exports = function(app) {
	const express = require('express');
	let gamesRouter = express.Router();

	gamesRouter.get('/', function(req, res) {
		const query = req.query || null;
		const games = [
			{
				type: 'game',
				id: 1,
				attributes: {
					name: 'Counter Strike 1.6'
				}
			},
			{
				type: 'game',
				id: 2,
				attributes: {
					name: 'Counter Strike: Global Offensive'
				}
			},
			{
				type: 'game',
				id: 3,
				attributes: {
					name: 'Minecraft'
				}
			},
			{
				type: 'game',
				id: 4,
				attributes: {
					name: 'Mortal Kombat 8'
				}
			},
			{
				type: 'game',
				id: 5,
				attributes: {
					name: 'Mortal Kombat 9'
				}
			},
			{
				type: 'game',
				id: 6,
				attributes: {
					name: 'Mortal Kombat 10'
				}
			},
			{
				type: 'game',
				id: 7,
				attributes: {
					name: 'Mortal Kombat 11'
				}
			},
			{
				type: 'game',
				id: 8,
				attributes: {
					name: 'Metro 2033: Exodus'
				}
			},
			{
				type: 'game',
				id: 9,
				attributes: {
					name: 'Metro 2033'
				}
			},
			{
				type: 'game',
				id: 10,
				attributes: {
					name: 'Metro 2033: Last Light'
				}
			}
		];

		res.send({
			data: games.filter((game) => {
				return game.attributes.name.indexOf(query.name) !== -1;
			})
		});
	});

	gamesRouter.post('/', function(req, res) {
		res.status(201).end();
	});

	gamesRouter.get('/:id', function(req, res) {
		res.send({
			games: {
				id: req.params.id
			}
		});
	});

	gamesRouter.put('/:id', function(req, res) {
		res.send({
			games: {
				id: req.params.id
			}
		});
	});

	gamesRouter.delete('/:id', function(req, res) {
		res.status(204).end();
	});

	// The POST and PUT call will not contain a request body
	// because the body-parser is not included by default.
	// To use req.body, run:

	//    npm install --save-dev body-parser

	// After installing, you need to `use` the body-parser for
	// this mock uncommenting the following line:
	//
	//app.use('/api/games', require('body-parser').json());
	app.use('/api/games', gamesRouter);
};
