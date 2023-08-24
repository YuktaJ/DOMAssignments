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
    new_ele.textContent = obj.name + " " +obj.email +" " + obj.phone;
    ListofItems.append(new_ele);
}