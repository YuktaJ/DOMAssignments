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
// var header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 3px #ccc";

//Trying to edit item 5 using getElementsByClassName//
// var item_5 = document.getElementsByClassName('list-group-item');
// let fifth_item = item_5[item_5.length-1];
// fifth_item.textContent = "Hello Item 5";

//Trying to edit item 5 using getElementsByTagName//
// var item_5 = document.getElementsByTagName('li');
// let fifth_item = item_5[item_5.length-1];
// fifth_item.textContent = "Hello Item 5";

// Changing second item color to green
// var second_item = document.querySelector(".list-group-item:nth-child(2)");
// second_item.style.backgroundColor = 'green';
// second_item.style.color = 'green';

// //making the third item invisible 
// var third_item = document.querySelector(".list-group-item:nth-child(3)");
// third_item.style.display = 'none';

// //Making all odd number item's bg color green 
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
//     //changes odd number items bg color 
// }

// TRAVERSING THE DOM
 var itemList = document.querySelector('#items');
// parentNode property 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

//parentElement property 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

//childNodes property 
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

//firstChild property 
//console.log(itemList.firstChild)

//firstElementChild property important 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1"

//lastChild property 
// console.log(itemList.lastChild);

//lastElementChild property important
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling); gives text as output in console

//nextElementSibling
//  console.log(itemList.nextElementSibling); 
// gives output null because ul has no further siblings 

//previousSibling 
//console.log(itemList.previousSibling);

// previousElementSibling 
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green"

// createElement
var newDiv = document.createElement('div');

//Add a class
newDiv.className='Hello';

//Add id
newDiv.id  = "Hello1";

//Add attribute 
newDiv.setAttribute('title','Hello Div');

//create a text node 
var newDivText = document.createTextNode("Hello World");

//Adding the above text to newly created div 
newDiv.appendChild(newDivText);

//Adding the above created element to the dom 
var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);

//