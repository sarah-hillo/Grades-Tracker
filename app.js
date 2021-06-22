'use strict';
let tableHeader = ["Student Name", "Student Grade", "Course", "Status"];
let student = [];

function Student(name, course) {
    this.name = name;
    this.course = course;
    this.grade = 0;
    this.status = "";
    student.push(this);
}

Student.prototype.getGrade = function () {

    this.grade = getRndInteger();

}

Student.prototype.getStatus = function () {
 if( this.grade>=50){
    this.status ="pass";}
    else if(this.grade<50){
        this.status ="fail";

    }

}
function getRndInteger() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}

let container = document.getElementById('container');


let table = document.createElement('table');
container.appendChild(table);

function makingHeader() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    for (let i = 0; i < tableHeader.length; i++) {

        let tabeHead = document.createElement('th');
        table.appendChild(tabeHead);
        tabeHead.textContent = tableHeader[i];
    }

}
makingHeader();


Student.prototype.render = function () {

    let row = document.createElement('tr');
    table.appendChild(row);
  

        let tableData = document.createElement('td');
        row.appendChild(tableData);
        tableData.textContent = this.name;

        let tableData1 = document.createElement('td');
        row.appendChild(tableData1);
        tableData1.textContent = this.grade;

        let tableData2 = document.createElement('td');
        row.appendChild(tableData2);
        tableData2.textContent = this.course;

        let tableData3 = document.createElement('td');
        row.appendChild(tableData3);
        tableData3.textContent = this.status;

}

let form=document.getElementById('form');
form.addEventListener('submit',submitter);
function submitter(event){
event.preventDefault();
let name=event.target.studentName.value;
let course=event.target.course.value;
new Student(name,course);

table.textContent="";
makingHeader();
for (let i = 0; i < student.length; i++) {
    student[i].getGrade();
    student[i].getStatus();
    student[i].render();
    
}
updateStorage();



}
getStudentData();

function updateStorage(){
let string=JSON.stringify(student);
localStorage.setItem('student',string);

}
function getStudentData(){
let data=localStorage.getItem('student');
let studentData=JSON.parse(data);
if(studentData!==null){
for (let i = 0; i < studentData.length; i++) {
    new Student(studentData[i].name,studentData[i].grade);
    
}

}

}

