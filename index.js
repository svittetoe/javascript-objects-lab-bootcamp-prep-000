var recipes = {'key': 'value'};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value) {
return Object.assign({}, recipes, { [key]: value });
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  recipes[key-1];
  return recipes;
}

function deleteFromObjectByKey(object, key) {
delete recipes[key];
return recipes;
}
