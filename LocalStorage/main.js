function SaveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const phone = event.target.contactNo.value; //name attribute used 

    let obj = {
        name,
        email,
        phone
    }
    localStorage.setItem("obj", JSON.stringify(obj));
    console.log(localStorage.getItem("obj"));
    button1(obj);
}

function button1(obj) {
    let new_ele = document.createElement("li");
    new_ele.textContent = obj.name + " " + obj.email + " " + obj.phone;
    ListofItems.append(new_ele);

    let new_button = document.createElement("input");//important
    new_button.type = "button";
    new_button.value = "delete";
    new_ele.appendChild(new_button);

    new_button.onclick = () => {
        localStorage.removeItem('obj');
        new_ele.remove();
    }

    let edit_button = document.createElement("input");
    edit_button.type = "button";
    edit_button.value = "edit";
    new_ele.appendChild(edit_button);

    edit_button.onclick = () => {
        localStorage.removeItem('obj');
        new_ele.remove();

        usernameInputTag.value = obj.name;
        emailInputTag.value = obj.email;
        phoneNumberInputTag.value = obj.phone;
    }
}

