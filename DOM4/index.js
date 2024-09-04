// points for using form
// 1. wrap every input inside the form
// 2. instead of using button use input with type Submit
// 3. add Event listner to form tag
// 4. event name should be sumbit
// 5. whenever you use form, it will try to send the data to server, in this process the page reloads. to avoid it we will be use event.preventDefault()

document.querySelector("form").addEventListener("submit", todoList);

function todoList(){
    event.preventDefault();

    let itemName= document.querySelector("#name").value;
    let itemQty= document.querySelector("#qty").value;
    let itemPriority= document.querySelector("#priority").value;

    let tr=document.createElement("tr");

    let td1= document.createElement("td");
    td1.innerText= itemName;
    let td2= document.createElement("td");
    td2.innerText= itemQty;
    let td3= document.createElement("td");
    td3.innerText= itemPriority;

    tr.append(td1, td2, td3); //pushing the td values inside tr//

    document.querySelector("tbody").append(tr); //pushing the tr values inside the tbody// 

    //to clear the input values from the form after click on submitting//
    document.querySelector("#name").value="";
    document.querySelector("#qty").value="";
}