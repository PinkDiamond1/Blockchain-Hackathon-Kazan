var ethAdapter = require('../eth/adapter');

exports.home = function (req, res) {
	res.render('pages/home', {
		title: 'Home'
	})
}

exports.deploy = function (req, res) {
	res.render('pages/deploy', {
		title: 'Создание контракта',
		bank: ethAdapter.accounts[0],
		borrower: ethAdapter.accounts[1],
		depository:	ethAdapter.accounts[2],
		registry: ethAdapter.accounts[3],
	})
}

exports.execution = function (req, res) {
	res.render('pages/execution', {
		title: 'Статус исполнения',
		address: req.params.address
	})
}

exports.finalization = function (req, res) {
	res.render('pages/finalization', {
		title: 'Статус завершения',
		address: req.params.address
	})
}

exports.end = function (req, res) {
	res.render('pages/end', {
		title: 'Завершено',
		address: req.params.address
	})
}