function save() {


    var fname = document.getElementById("fname").value;

    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    //alert(document.getElementById("age").value);
    //alert(age);
    var favColor1 = document.getElementById("favColor1").value;
    var favColor2 = document.getElementById("favColor2").value;
    var favColor3 = document.getElementById("favColor3").value;

    var Secfname = document.getElementById("2fname").value;
    var Seclname = document.getElementById("2lname").value;
    var Secage = document.getElementById("2age").value;
    var SecfavColor1 = document.getElementById("2favColor1").value;
    var SecfavColor2 = document.getElementById("2favColor2").value;
    var SecfavColor3 = document.getElementById("2favColor3").value;

    //var source = document.getElementsByClassName('.form')[0];
var person1 ={
    "firstName":fname,
    "lastName":lname,
    "age" : age,
    "favColor1": favColor1,
    "favColor2":favColor2,
    "favColor3": favColor3
};

var person2 ={
    "Secfname":Secfname,
    "Seclname":Seclname,
    "Secage" : Secage,
    "SecfavColor1": SecfavColor1,
    "SecfavColor2":SecfavColor2,
    "SecfavColor3": SecfavColor3
};


    // var people = '{"people":[' +
    //     '{"firstName":" ' + fname + ' ","lastName":" ' + lname + ' ","age":" ' + age + '","favColor1": ' + favColor1 + '","favColor2": ' + favColor2 + '","favColor3": ' + favColor3 + '" },' +
    //     '{"Secfname":" ' + Secfname + ' ","Seclname":" ' + Seclname + ' ","Secage":" ' + Secage + '","SecfavColor1": ' + SecfavColor1 + '","SecfavColor2": ' + SecfavColor2 + '","SecfavColor3": ' + SecfavColor3 + '" },';

    var people = [];
    people.push(person1);
    people.push(person2);
    console.log(people);

    var message = "Hello " + people[0].firstName + ", You are " + people[0].age + " years old, your friend, " + people[1].Secfname + " is " + people[1].Secage + " years old.";
    var message2 = " By the way, " + people[0].favColor1 + " and " + people[1].SecfavColor1 + " are two of the worst colors. Just saying."; 

    document.getElementById("printBox").innerText = message + message2;



}


function print() {
    //this will print their JSON data on the screen
}