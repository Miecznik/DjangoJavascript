function myFunction() {
    alert("Hello World")

}

//1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
function mojaData() {
    var dzis = new Date();
    var dzien = dzis.getDay();
    var daylist = ["Niedziela", "Poniedzialek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    var dzienMiesiaca = dzis.getUTCDate()
    var miesiac = dzis.getMonth();
    var rok = dzis. getFullYear();
    var godzina = dzis.getHours();
    var minuta = dzis.getMinutes();
    var sekunda = dzis.getSeconds();

    alert("Dzis jest : " + daylist[dzien] + " " + dzienMiesiaca + "-" + miesiac + "-" + rok + " Godzina: " + godzina + ":" + minuta + ":" + sekunda );
}

//2. Write a JavaScript program to print the contents of the current window.  Go to the editor

function printer() {
    window.print()
}

//3. Write a JavaScript program to get the current date.  Go to the editor

function data2() {
    var dzis = new Date();
    var dzien = dzis.getDay();
    var daylist = ["Niedziela", "Poniedzialek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    var dzienMiesiaca = dzis.getUTCDate()
    var miesiac = dzis.getMonth();
    var rok = dzis. getFullYear();
    var godzina = dzis.getHours();
    var minuta = dzis.getMinutes();
    var sekunda = dzis.getSeconds();

    alert("Dzis jest : " + dzienMiesiaca + "/" + miesiac + "/" + rok );
}


//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor
function trojkat() {
    const x = 5;
    const y = 6;
    const z = 7;
    var p = (x + y + z) / 2
    var pole = Math.sqrt(p*(p-x)*(p-y)*(p-z))
    alert("Polem trojkata o bokach : " + x + " " + y + " " + z + "Jest: " + pole)
}

function