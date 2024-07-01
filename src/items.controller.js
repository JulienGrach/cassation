const service = require('./items.service');

function isItem(itemCandidate) {
	return (typeof itemCandidate === 'object' && itemCandidate !== null) &&
		Object.keys(itemCandidate).every(_ => ['isActive'].includes(_)) &&
		typeof itemCandidate.isActive === 'boolean'
}

async function findItem(req, res, next, id) {
	const item = service.findItem(id);
	if (!item) {
		return res.status(404).json({
			message: 'invalid item',
			errors: { id: 'is unknown' },
		});
	}
	req.item = await item;
	next();
}

async function createItem(req, res, next) {
	const newItem = await service.createItem();
	return res.json({ item: newItem });
}

async function getAllItems(req, res, next) {
	const filter = {}
	switch (req.query.is_active) {
		case 'true':
			filter.isActive = true
			break;
		case 'false':
			filter.isActive = false
			break;
		default:
			filter.isActive = null
	}

	const items = await service.getAllItems(filter);
	return res.json({ items });
}

async function getOneItem(req, res, next) {
	return res.json({ item: req.item });
}

async function updateItem(req, res, next) {
	if(!isItem(req.body?.item)) return res.status(404).json({
		message: 'invalid item',
		errors: { id: 'is unknown' }, // @TODO: fix an error format
	});

	return res.json({ item: await service.updateItem(req.item, req.body.item || {}) });
}

async function deleteItem(req, res, next) {
	service.deleteItem(req.item);
	return res.json({ item: req.item });
}

module.exports = {
	findItem,
	createItem,
	getAllItems,
	getOneItem,
	updateItem,
	deleteItem,
};
