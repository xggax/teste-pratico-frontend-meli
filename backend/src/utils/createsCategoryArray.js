function createsCategoryArray(filterArray = undefined) {
  const itemWithPath = filterArray[0]?.values[0];
  
  if (!itemWithPath) {
    return [''];
  }

  const { path_from_root } = itemWithPath;
  return path_from_root.map(path => path.name);
}

function createsItemDetailCategoryArray(category = undefined) {
  const { data } = category;
  
  if (!data) {
    return [''];
  }

  const { path_from_root } = data;
  return path_from_root.map(path => path.name);
}

module.exports = {
  createsCategoryArray,
  createsItemDetailCategoryArray
}