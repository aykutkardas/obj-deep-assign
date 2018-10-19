const objDeepAssign = (obj1, obj2) => {
  if (!isObject(obj1) || !isObject(obj2)) {
    return false;
  }

  let newObj = {};

  Object.keys(obj1).forEach(key => {
    if (isObject(obj1[key]) && obj2[key] && isObject(obj2[key])) {
      newObj[key] = objDeepAssign(obj1[key], obj2[key]);
    } else {
      newObj[key] = obj2[key] ? obj2[key] : obj1[key];
    }
  });

  Object.keys(obj2).forEach(key => {
    if (!obj1[key]) {
      newObj[key] = obj2[key];
    }
  });

  return newObj;
};

const isObject = obj => typeof obj === "object";

export default objDeepAssign;
