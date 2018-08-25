let data = [ {
    "firstImage":"img01"}];
    //establish an array with which to pull the data from? Array of obj?


data.forEach(function (element) {
    // create and append table row
    let row = document.createElement("tr");
    mainTable.appendChild(row);
    // create cells for row
    let firstCell = document.createElement("td"); //rename these cell names ---> or do we even need cell names??
    let lastCell = document.createElement("td");
    let emailCell = document.createElement("td");
    // append cells to row
    row.appendChild(firstCell);
    row.appendChild(lastCell);
    row.appendChild(emailCell);
    // add text to cells
    firstCell.innerHTML = element.firstName; // will we have different element names? just numbered???
    lastCell.innerHTML = element.lastName;
    emailCell.innerHTML = element.email;

});

function flipCard(){
    if(basicH1.innerHTML === "This is a heading"){
        basicH1.innerHTML = "Changed by JavaScript Magic!"
        image01.src = "marvin02.jpg";
    }else{
        basicH1.innerHTML = "This is a heading";
        image01.src = "marvin01.jpg";
    }
}
button01.addEventListener('click',changeH1);
blueButton.addEventListener('click',makeBlue);