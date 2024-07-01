const fs = require('fs').promises;
const path = require('path');
const itemsFilename = process.env.ITEMS_FILENAME || 'items.json';

let storedItems = fs.readFile(path.join(__dirname, 'data', itemsFilename), { encoding: 'utf8' }).then(JSON.parse)

async function createItem(itemData = { isActive: false }) {
	const items = await storedItems
	const newItem = { ...itemData, id: items.length + 1, lastUpdate: new Date() };
	storedItems = [...items, newItem];
	return newItem;
}

async function getAllItems({ isActive }) {
	const items = await storedItems
	return isActive === null ?
		items : 
		(await items).filter(_ => _.isActive == isActive);
}

async function findItem(id) {
	const items = await storedItems
	return items.find((i) => +i.id === +id);
}

async function updateItem(item, itemData = {}) {
	const items = await storedItems
	const updatedItem = { ...item, ...itemData, lastUpdate: new Date() };
	storedItems = [...items.filter((i) => i.id !== item.id), updatedItem];
	return updatedItem;
}

async function deleteItem(item) {
	const items = await storedItems
	storedItems = items.filter((i) => i.id !== item.id);
}

module.exports = { createItem, getAllItems, findItem, updateItem, deleteItem };
