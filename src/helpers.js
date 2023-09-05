export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-_+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    if (!acc[item[key]]) {
      acc[item[key]] = [];
    }
    acc[item[key]].push(item);
    return acc;
  }, {});
}

export const findWhere = (arr, key, value) => {
  return arr.filter(obj => obj[key] === value)
}

export const findBy = (arr, key, value) => {
  return arr.find(obj => obj[key] === value);
}
