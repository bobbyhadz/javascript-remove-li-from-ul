console.log('bobbyhadz.com');

const ul = document.getElementById('my-list');

// 👇️ Remove all list elements
ul.innerHTML = '';

// ------------------------------------------

// // Example 2 - Removing all `li` elements from a `ul` while iterating

// const listItems = document.querySelectorAll('#my-list li');

// // 👇️ NodeList(5) [li, li, li, li, li]
// console.log(listItems);

// listItems.forEach(listItem => {
//   listItem.parentNode.removeChild(listItem);
// });
