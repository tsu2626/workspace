'use strict'
const assert = require('assert');
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
const todo = require('./index.js');

todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(),['ノートを買う','鉛筆を買う']);

todo.done('鉛筆を買う');
assert.deepEqual(todo.list(),['鉛筆を買う']);

todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo,list(), []);
assert.deepEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');
});
