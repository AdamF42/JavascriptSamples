const dynamic_property = "test";

const PI = Math.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [dynamic_property]: 42, // when the object is created the property becomes test:42
  PI // It is possible to define e property PI with the same value of Math.Pi without writing PI:PI since it is already defined
};

