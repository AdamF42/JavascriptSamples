const [one, two,, four] = [10, 20, 30, 40];

const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

const newArray = [...restOfItems];

restOfItems[0] = 1;
console.log(restOfItems); // [1,30,40]
console.log(newArray); // [20,30,40]

const newObject = {
  ...person,
};
