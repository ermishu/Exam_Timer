var minArray = localStorage.getItem("minArray");
var secArray = localStorage.getItem("secArray");

const min = minArray.split(',');
const sec = secArray.split(',');

var array = [];

for (let i = 0; i < min.length; i++) {
  var obj = {};
  obj.Question = "Question " + (i + 1);
  obj.Minutes = min[i];
  obj.Seconds = sec[i];
  array.push(obj);
}
function generateTableHead(table) {
  let thead = table.createTHead();
  
  let row = thead.insertRow();
    for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(array[0]);
generateTableHead(table, data);
generateTable(table, array);

var TotalQuestion = localStorage.getItem("TQ");
var TotalTime = localStorage.getItem("TT");
var RevisionTime = localStorage.getItem("RT");

var SolvedQuestion = parseInt(localStorage.getItem("SQ"));
var RemainingQuestion = parseInt(localStorage.getItem("RQ"));

var TT = document.querySelector("#TT span#Total-Time");
var TQ =document.querySelector("#TQ span#Total-Question");
var TR = document.querySelector("#TR span#Total-Revision");
var TQA = document.querySelector("#TQA span#Attemped");
var TQL = document.querySelector("#TQL span#Left");

TT.innerText = TotalTime;
TQ.innerText = TotalQuestion;
TR.innerText = RevisionTime;
TQA.innerText = SolvedQuestion+1;
TQL.innerText = RemainingQuestion-1;

var grade = document.querySelector("#Grade");
if(RemainingQuestion-1!=0){
  grade.innerText="BETTER LUCK NEXT TIME";
}else{
  grade.innerText="CONGRATULATION";
}