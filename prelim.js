// // let images = new image01(300, 300);
// // images.src = "CardBack.jpg";
// // document.body.appendChild(images);

let data = [ 
    {img01:"greyA.jpg"}, 
    {img02:"greyB.jpg"},
    {img03:"navyA.jpg"},
    {img04:"navyB.jpg"}
    ];
    

let fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);
// //trying to add event listener for the click, but should be applied to all images... .and also, should be limited to only one click per image, and then reset.


data.forEach(function (element) {
    let row = data;
    for(let i = 0; i<data.length; i++){
         row = data[i];
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
let data = new Array();

data[0] = new Image();
data[0].src = 'greyA.jpg';

data[1] = new Image();
data[1].src = 'greyB.jpg';

data[2] = new Image();
data[2].src = 'navyA.jpg';

data[2] = new Image();
data[2].src = 'navyB.jpg';


function nextImage(element)
{
    let img = document.getElementById(element);

    for(let i = 0; i < data.length;i++)
    {
        if(data[i].src == img.src)
        {
            if(i === data.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}