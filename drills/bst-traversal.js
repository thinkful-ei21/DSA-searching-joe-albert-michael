'use strict';

/*
		Pre-order
			process node - whatever you want to do with the data
			recursively step left
			recursively step right
		In-order
			recursively step left
      process node - whatever you want to do with the data
      recursively step right
		Post-order
			recursively step left
			recursively step right
      process node - whatever you want to do with the data
*/

const BinarySearchTree = require('./binary-search-tree.js');

const str = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22';
const tempData = str.split(' ');
const data = tempData.map(each => Number(each));

const bst = new BinarySearchTree();
data.forEach(each => bst.insert(each, null));

// create in-order search algorithm
function getInOrder(tree, arr=[]) {
  if (tree) {
    getInOrder(tree.left, arr);
    arr.push(tree.key);
    getInOrder(tree.right, arr);
  }
  return arr;
}

// create pre-order
function getPreOrder(tree, arr=[]) {
  if (tree) {
    arr.push(tree.key);
    getPreOrder(tree.left, arr);
    getPreOrder(tree.right, arr);
  }
  return arr;
}

// create post-order
function getPostOrder(tree, arr=[]) {
  
  if (tree) {
    getPostOrder(tree.left, arr);
    getPostOrder(tree.right, arr);
    arr.push(tree.key);
  }
  return arr;
}

console.log(getInOrder(bst));
console.log(getPreOrder(bst));
console.log(getPostOrder(bst));