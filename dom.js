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
var header_title = document.getElementById('header-title');
var header = document.getElementById('main-header');
var add_items = document.querySelector('.title')
console.log(header_title);
// header_title.textContent = 'Hello';
// header_title.style.borderBottom= 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';
add_items.style.color = "green";

// GET ELEMENTBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].style.backgroundColor = 'yellow';

for(let i =0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}