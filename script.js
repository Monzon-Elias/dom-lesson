// JavaScript source code
//=================================================================   
//================== PAGE LAYOUT WITH JAVASCRIPT ==================
//================================================================= 
var section = document.getElementsByTagName("section");
for (var num = 0; num < section.length; num++) {
    section[num].style.display = "none";
}
function change() {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "Varela Round, sans-serif";
    document.getElementById("ftButton").style.display = "none";
    for (var num = 0; num < section.length; num++) {
        /* Creating the parallax effect */
        section[num].style.display = "block";
        section[num].style.width = "100%";
        section[num].style.height = "100vh";
        section[num].style.boxSizing = "border-box";
        section[num].style.background = "url('images/img" + num + ".jpeg') fixed center center / cover";
        section[num].style.position = "relative";

        /* Add style to the content div inside all sections (text) */
        //section[num].firstElementChild.style.width = "inherit";
        section[num].firstElementChild.style.position = "absolute";
        section[num].firstElementChild.style.bottom = "0";
        section[num].firstElementChild.style.color = "#f1f1f1";
        section[num].firstElementChild.style.background = "rgba(0, 0, 0, 0.5)";
        section[num].firstElementChild.style.padding = "20px";
        section[num].firstElementChild.style.fontSize = "1.5em";
    }
}

//=================================================================  
//========================== ANIMATIONS ===========================
//=================================================================

var d = document.getElementById("dancing"); //store the button in a vabiable
d.innerText = "dance Fred!"; // set the button text
var fred = section[1].querySelector("img");
fred.style.display = "none";
fred.style.margin = "0";
fred.style.padding = "0";
fred.style.animation = "setup 2s ease-out, dance 2s 2s ease-out infinite";

function dance() {
    fred.style.display = "inline-block";
    if (d.innerText == "dance Fred!") {
        fred.style.animationPlayState = "running";
        d.innerText = "stop Fred";
    }
    else {
        d.innerText = "dance Fred!";
        fred.style.animationPlayState = "paused";
    }
}

//=================================================================  
//========================== TRANSFORMS ===========================
//=================================================================

var f = document.getElementsByClassName("flip-card-inner");
var fb = document.getElementsByClassName("flip-card-back");
var leo = document.getElementsByClassName("leonidas-container");
function flipping() {
    setTimeout(myTimeout1, 500)
    setTimeout(myTimeout2, 1000)
    setTimeout(myTimeout3, 1500)
    setTimeout(myTimeout4, 2500)
    setTimeout(myTimeout5, 5000)
}
function myTimeout1() {
    f[0].style.transform = "rotateY(180deg)";
    fb[0].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout2() {
    f[1].style.transform = "rotateY(180deg)";
    fb[1].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout3() {
    f[2].style.transform = "rotateY(180deg)";
    fb[2].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout4() {
    leo[0].style.display = "block";
    leo[0].style.animation = "roar .1s linear both infinite";
}
function myTimeout5() {
    leo[0].style.display = "none";
    for (var i = 0; i < fb.length; i++) {
        f[i].style.transform = "rotateY(0deg)";
    }
}

//=================================================================  
//==================== DOM STYLE MANIPULATION ======================
//================================================================= 

var parent = document.getElementById("dom");
function create(text, element, id) {
    var para = document.createElement(element);
    para.id = id;
    var node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para);
}

function createEmoticon(path, id) {
    var x = document.createElement("IMG");
    x.id = id;
    x.style.position = "relative";
    x.style.left = "25vw";
    x.setAttribute("src", "images/"+path+".PNG");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("alt", "Not happy little emoticon");
    parent.appendChild(x);
}

create("Press the button to create an element", "h3", "");
create("Click", "button", "start");
document.getElementById("start").onclick = function () {
    createEmoticon("fastidiado", "img1")
    setTimeout(function () { create("Why this face?, give us a little smile!", "p", "p1") }, 2000) };


//var startButton = document.getElementById("smile");
//smile.onclick = function () { create("Why this face? please, show some smile!", "p", "p1") };
//smile.onclick = function () { create("=)", "button", "change") };
//var changeButton = document.getElementById("change");
//changeButton.onclick = function () { createEmoticon("better") }; 

//function remove() {
//    var child = document.getElementById("p1");
//    parent.removeChild(child);
//}

//function replace() {
//    var node = document.createTextNode("This is new.");
//    para.appendChild(node);

//    var child = document.getElementById("p1");
//    parent.replaceChild(para, child);
//}
//=================================================================   
//====================== JAVA OBJECTS & MORE =========================
//=================================================================

var elias =
{
    name: 'elias',
    yearOfBirth: 1984,
    calculateAge: function () {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction(); //raro no? esta función pertenece a WINDOWS OBJECT
    }
}

elias.calculateAge();

var ricardo =
{
    name: 'Ricardo',
    yearOfBirth: 1980
};

ricardo.calculateAge = elias.calculateAge;
ricardo.calculateAge();


//=================================================================      
//============== Function Constructor & Inheritance================
//=================================================================

//var pirulo = 
//    { 
//    name: 'Pirulo',     
//    yearOfBirth: 1990,
//    job: 'teacher'
//    };

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith'; //todos son hermanos ahora

var elias = new Person('Elías', 1990, 'teacher');
var vanessa = new Person('Vanessa', 1969, 'designer');
var carlos = new Person('Carlos', 1948, 'retired');

elias.calculateAge();
vanessa.calculateAge();
carlos.calculateAge();

console.log(elias.lastName);
console.log(vanessa.lastName);
console.log(carlos.lastName);

//=================================================================      
//======================== Object.create=========================
//=================================================================       
//Create object that inherit from a prototype

// 1st. we create the object prototype
// then we create objects that inherit from the prototype

var personPrototype = // is in lowercase because is not a function constructor
{
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var ricardo = Object.create(personPrototype,
    {
        name: { value: 'Ricardo' },
        yearOfBirth: { value: 1980 },
        job: { value: 'designer' }
    });