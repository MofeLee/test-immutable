const Immutable = require('immutable');
const _ = require('lodash');
const {
  Record,
  Map
} = Immutable;

const TestRecord = Record({a:0});
const instance1 = TestRecord({a:1});
const instance2 = TestRecord({a:1});
console.log('TestRecord', Immutable.is(instance1, instance2)); // true


const TestRefRecord = Record({a:0, b: { c: 0 }});
const instance3 = TestRefRecord({a:1, b: {c:0}});
const instance4 = TestRefRecord({a:1, b: {c:0}});
console.log('TestRefRecord', Immutable.is(instance3, instance4)); // false


const instance5 = Immutable.fromJS({a: {b: [10, 20, 30]}});
const instance6 = Immutable.fromJS({a: {b: [10, 20, 30]}});
console.log('fromJs', Immutable.is(instance5, instance6)); // true
console.log('deepEqual', _.isEqual(instance5, instance6)); // true
