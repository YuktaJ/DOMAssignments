var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event 
form.addEventListener('submit',addItem); 
//on clicking submit the addItem function will be called.

//Removing the item from the list 
itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventDefault();
    // Get input value 
    var newItem = document.getElementById('item').value;

    //Create new li element 
    var li = document.createElement('li');

    //Add class name 
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to list
    li.appendChild(deleteBtn);

    //Append li to list 
    itemList.appendChild(li);
    
}

//Remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Edit button 
const itemsList = document.getElementById('items');

// Get all the <li> elements within the <ul>
const listItems = itemsList.querySelectorAll('li');

// Iterate through each list item and add an "Edit" button
listItems.forEach(item => {
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'float-right', 'edit');
    editButton.textContent = 'Edit';
    // Append the "Edit" button to the list item
    item.appendChild(editButton);
});

