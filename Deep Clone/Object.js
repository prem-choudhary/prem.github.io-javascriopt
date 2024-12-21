function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  // Example
  const original = {a: 1, b: {c: 2}};
  const clone = deepClone(original);
  console.log(clone); // {a: 1, b: {c: 2}}
  clone.b.c = 3;
  console.log(original.b.c); // 2 (remains unchanged)
  