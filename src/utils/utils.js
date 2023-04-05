//utils
function formatArrDate(arr) {
  const dateFormatted = arr.map(day => {
    const date = new Date(day);
    return {
      hours: date.getHours(),
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  });

  return dateFormatted;
}

function clearAllObjectFields(obj) {
  const newObj = {};
  for (const prop in obj) {
    newObj[prop] = '';
  }
  return newObj;
}

function removeKeys(obj, keysToRemove) {
  if (!Array.isArray(keysToRemove)) {
    keysToRemove = [keysToRemove];
  }

  return Object.keys(obj)
    .filter(key => !keysToRemove.includes(key))
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
}

function cleanSpecificsFields(object, fields) {
  for (let key in object) {
    if (fields.includes(key)) {
      if (typeof object[key] === 'string') {
        object[key] = '';
      } else if (typeof object[key] === 'number') {
        object[key] = 0;
      }
    }
  }
  return object;
}

export {
  formatArrDate,
  clearAllObjectFields,
  removeKeys,
  cleanSpecificsFields
};
