// EXAMINE THE DOCUMENT OBJECT //
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// // console.dir(document);

// console.log(document.forms[0]);
// console.log(document.links);


// GET ELEMENTBYID // 
// console.log(document.getElementById('header-title'));
// var header_title = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var add_items = document.querySelector('.title')
// console.log(header_title);
// // header_title.textContent = 'Hello';
// // header_title.style.borderBottom= 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';
// add_items.style.color = "green";

// // GET ELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].style.backgroundColor = 'yellow';

// for(let i =0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
// }

// GET ELEMENTS BY TAG NAME //


// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.backgroundColor = 'yellow';

// for(let i =0;i<li.length;i++){
//     li[i].style.fontWeight = "bold";
// }

// QUERY SELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = "solid 3px #ccc";

//Trying to edit item 5 using getElementsByClassName//
// var item_5 = document.getElementsByClassName('list-group-item');
// let fifth_item = item_5[item_5.length-1];
// fifth_item.textContent = "Hello Item 5";

//Trying to edit item 5 using getElementsByTagName//
// var item_5 = document.getElementsByTagName('li');
// let fifth_item = item_5[item_5.length-1];
// fifth_item.textContent = "Hello Item 5";



