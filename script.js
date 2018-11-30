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
//==================== DOM MANIPULATION ======================
//================================================================= 

var parent = document.getElementById("dom");

function create(text, element, id) {
    var para = document.createElement(element);
    para.id = id;
    var node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para);
}

function createEmoticon(path, id, alt) {
    var x = document.createElement("IMG");
    x.id = id;
    x.style.position = "relative";
    x.style.left = "25vw";
    x.setAttribute("src", "images/" + path + ".PNG");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("alt", alt);
    parent.appendChild(x);
}

function replace(newElId, oldElId) {
    var para = document.getElementById(newElId);
    var child = document.getElementById(oldElId);
    child.parentNode.replaceChild(para, child);
}

create("Press the button to create an element", "h3", "");
create("Click", "button", "start");

var startButton = document.getElementById("start");
startButton.onclick = function () {
    setTimeout(function () { create(".", "span", "") }, 500)
    setTimeout(function () { create(".", "span", "") }, 1000)
    setTimeout(function () { create(".", "span", "") }, 1500)
    
    var spans = document.getElementsByTagName("span");
    setTimeout(function () { for(var a = 0; a < spans.length; a++){spans[a].style.display = "none" }}, 2000)
    
    setTimeout(function () { createEmoticon("fastidiado", "img1", "A not so happy emiticon") }, 2000)
    setTimeout(function () { create("Why this face, show us some smile!", "p", "p1") }, 4000)
    setTimeout(function () { createEmoticon("better", "img2", "A little more happy emoticon") }, 6000)
    setTimeout(function () { replace("img2", "img1") }, 6000)
    setTimeout(function() { create("This is better, but...come on! smile!!", "p", "p2") }, 8000)
    setTimeout(function () { replace("p2", "p1") }, 8000)
    setTimeout(function () { createEmoticon("best", "img3", "A very happy emoticon") }, 10000)
    setTimeout(function () { replace("img3", "img2") }, 10000)
    setTimeout(function() { create("Yeah!! That's what I'm talking about!", "h4", "p3") }, 11000)
    setTimeout(function () { replace("p3", "p2") }, 11000) 
}
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