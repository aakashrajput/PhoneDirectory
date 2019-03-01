let name = []
let phone = []

function addItemToExistingList(){
    let noOfItems = name.length
    let phone_no = phone.length

    name[noOfItems] = document.getElementById("txtValue").value
    phone[phone_no] = document.getElementById("phoneValue").value

    displayResults()
    console.log(name)
    document.getElementById('id01').style.display='none'
}

function displayResults(){
    let n = name.length
    let p = phone.length

    document.getElementById("itemsCount").innerHTML = "No. of Items added: " + n.toString() + "No of Contact no:" + p.toString()

    let itemsListDiv = document.getElementById("itemsList")

    while(itemsListDiv.hasChildNodes()){
        itemsListDiv.removeChild(itemsListDiv.lastChild)
    }

    for(i=0;i<n;i++){
        let newDiv = document.createElement("tr")
        newDiv.innerHTML = "<td>"+ (i + 1).toString() + "</td><td>"+name[i]+"</td><td>"+phone[i]+"</td><td><input type='button' style='background-color:red;' value='Delete' onclick='deleteRow(this)'></td>"
        itemsListDiv.appendChild(newDiv)

    }

}
