import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id){
  return items.find(i => i.id === id);
}

function addItem(name){
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id){
  let i = findById(id);
  i.checked = !i.checked;
}

function findAndUpdateName(id, newName){
  try {
    item.validateName(newName);
    let i = this.findById(id);
    i.name = newName;

  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id){
  let i = findById(id);
  this.items = items.filter(item => item !== i);
}

function toggleCheckedFilter () {
  this.hideCheckedItems = !hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
}