# Object Deep Assign

Object deep assign, recursive function.

## Install

```sh
npm install obj-deep-assign
```

```sh
yarn add obj-deep-assign
```

## Usage

```js
import objDeepAssign from "obj-deep-assign";
```

Example Objects

```js
const obj1 = {
  name: "John",
  age: 26,
  stats: {
    point: 43,
    energy: 10,
    title: "Newbie",
    skill: {
      js: 96,
      node: 74
    }
  }
};
```

```js
const obj2 = {
  name: "John",
  age: 27,
  stats: {
    point: 83,
    energy: 90,
    title: "Master",
    skill: {
      js: 100,
      node: 97,
      react: 78
    }
  },
  avatar: "src/john.png"
};
```

Assign

```js
const newObj = objDeepAssign(obj1, obj2);

console.log(newObj);

/*
{
  name: 'John',
  age: 27,
  stats: {
    point: 83, 
    energy: 90, 
    title: 'Master', 
    skill: { 
      js: 100, 
      node: 97, 
      react: 78 },
  },
  avatar: 'src/john.png',
};
*/
```

---
