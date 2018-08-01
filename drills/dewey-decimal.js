'use strict';

// Dewey Decimal System
// 000 - 099: General Knowledge
// 100 - 199: Philosophy & Psychology
// 200 - 299: Religion
// 300 - 399: Social Sciences
// 400 - 499: Languages
// 500 - 599: Science
// 600 - 699: Technology
// 700 - 799: Arts & Recreation
// 800 - 899: Literature
// 900+ : History & Geography

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' }, //1
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' }, //2
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' }, //3
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' }, //4
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' }, //5
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' }, //6
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' }, //7
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' }, //8
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' }, //9
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' } //10 Chuck Norris counted to infinity... Twice.
];

// Want to find: { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' }

const binarySearch = (lib, dewey, start = 0, end = lib.length - 1, count = 1) => {

  if (start > end) {
    return 'not found';
  }

  let index = Math.floor((start + end) / 2); // middle index
  let middle = lib[index]; // middle element in array

  if (middle.dewey === dewey) {
    console.log(`O(${count})`);
    return middle.title; //book title?
  }

  else if (middle.dewey < dewey) {
    return binarySearch(lib, dewey, index + 1, end, count + 1);
  }

  else if (middle.dewey > dewey) {
    return binarySearch(lib, dewey, start, index - 1, count + 1);
  }
};

console.log(binarySearch(library, '796.8092'));
