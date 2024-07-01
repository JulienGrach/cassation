const db = require("./database");
const { ObjectId } = require('mongodb');
const storedItems = db.collection('items')

async function createItem(itemData = { isActive: false }) {
	const newItem = { ...itemData, lastUpdate: new Date() };
	const { insertedId } = await storedItems.insertOne(newItem)
	return {...newItem, _id: insertedId};
}

function getAllItems(filter) {
	return storedItems.find(filter).toArray()
}

function findItem(id) {
	return storedItems.findOne({ _id: ObjectId.createFromHexString(id) });
}

async function updateItem(item, itemData = {}) {
	const updatedItem = { ...itemData, lastUpdate: new Date() };
	const _ = await storedItems.replaceOne({ _id: item._id }, updatedItem)
	return { ...item, ...updatedItem }
}

async function deleteItem(item) {
	return storedItems.deleteOne({ _id: item._id })
}

module.exports = { createItem, getAllItems, findItem, updateItem, deleteItem };
