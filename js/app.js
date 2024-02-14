import {sortID, sortFirst, sortLast, sortHeight, sortAge} from "./sorts.js";
import data from "../data/data.json" assert {type: "json"}
let ttlBtn = document.getElementById("ttlBtn");
let sortBtn = document.getElementById("sortBtn");
let idCol = document.getElementById("idCol");
let firstCol = document.getElementById("firstCol");
let lastCol = document.getElementById("lastCol");
let heightCol = document.getElementById("heightCol");
let ageCol = document.getElementById("ageCol");
let nextBtn = document.getElementById("nextBtn")
let prevBtn = document.getElementById("prevBtn")
let scendBtn = document.getElementById("scendBtn")
let mysteryBtn = document.getElementById("mysteryBtn")

let json = data;
let startInc = 0;

let descendBool = false;

let ttlArr = [10, 20, 30, 40, 50];
let ttl = 0;

let sortArr = ["Id", "FirstName", "LastName", "Height", "Age"]
let sortI = 0;

ttlBtn.addEventListener('click', () =>{
    ttl++;
    if(ttl > 4){
        ttl = 0;
    }
    ttlBtn.innerText = ttlArr[ttl];
    startInc = 0;
    genList(startInc)
})

sortBtn.addEventListener('click', () =>{
    sortI++;
    if(sortI > 4){
        sortI = 0;
    }
    sortBtn.innerText = sortArr[sortI];
    startInc = 0;
    genList(startInc)
})

nextBtn.addEventListener('click', () =>{
    startInc = startInc+((ttl+1)*10);
    if(startInc >= data.People.length){
        startInc = 0;
    }
    genList(startInc)
})

prevBtn.addEventListener('click', () =>{
    startInc = startInc-((ttl+1)*10);
    if(startInc < 0){
        startInc = data.People.length - ((ttl+1)*10);
    }
    genList(startInc)
})

scendBtn.addEventListener('click', () =>{
    if(!descendBool){
        descendBool = true;
        scendBtn.innerText = "Descending";
    }
    else if(descendBool){
        descendBool = false;
        scendBtn.innerText = "Ascending"
    }
    genList(startInc)
})

mysteryBtn.addEventListener('click', () =>{
    if(bgDiv.classList.contains("bg-gray-500")){
        bgDiv.classList.replace("bg-gray-500", "rainbow");
    }
    else{
        bgDiv.classList.replace("rainbow", "bg-gray-500");

    }
    console.log(bgDiv.classList)
})


const genList = async (startInc) =>{
    
    idCol.innerHTML = '';
    firstCol.innerHTML = '';
    lastCol.innerHTML = '';
    heightCol.innerHTML = '';
    ageCol.innerHTML = '';

    if(sortBtn.innerText == "Id"){
        json.People.sort(sortID);
    }
    else if(sortBtn.innerText == "FirstName"){
        json.People.sort(sortFirst);
    }
    else if(sortBtn.innerText == "LastName"){
        json.People.sort(sortLast);
    }
    else if(sortBtn.innerText == "Height"){
        json.People.sort(sortHeight);
    }
    else if(sortBtn.innerText == "Age"){
        json.People.sort(sortAge);
    }

    if(descendBool){
        json.People.reverse();
    }

    json.People.slice(startInc,startInc + (ttl+1)*10).map(person =>{
        let idRow = document.createElement('div')
        let firstRow = document.createElement('div')
        let lastRow = document.createElement('div')
        let heightRow = document.createElement('div')
        let ageRow = document.createElement('div')

        let rowClasses = ['row', 'mb-2', 'text-xl']
        rowClasses.map(clas =>{
            idRow.classList.add(clas)
            firstRow.classList.add(clas)
            lastRow.classList.add(clas)
            heightRow.classList.add(clas)
            ageRow.classList.add(clas)
        })

        idRow.innerText = person.Id;
        firstRow.innerText = person.FirstName;
        lastRow.innerText = person.LastName;
        heightRow.innerText = person.Height;
        ageRow.innerText = person.Age;

        idCol.appendChild(idRow);
        firstCol.appendChild(firstRow);
        lastCol.appendChild(lastRow);
        heightCol.appendChild(heightRow);
        ageCol.appendChild(ageRow);
    })
}

genList(0, 10)