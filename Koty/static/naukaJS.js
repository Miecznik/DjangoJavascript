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
    var p = (x + y + z) / 2;
    var pole = Math.sqrt(p*(p-x)*(p-y)*(p-z));
    alert("Polem trojkata o bokach : " + x + " " + y + " " + z + "Jest: " + pole);
}

//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  Go to the editor


function obrot() {
    var slowo = 'w3resource';
    for (let i = 0; i<slowo.length; i++) {
        var litera = slowo.slice(0,-1);
        slowo = litera + slowo
    }
    alert(slowo)
}

//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor

function rokPrzestepny(){
        const rok = prompt('Podaj rok a ja ustale czy jest przestepny');


        if ( (rok % 100 === 0) ? (rok % 100 === 0) : (rok % 4 === 0) ) {
            alert(" To rok przestepny")
        }
        else {
            alert(" To nie jest rok przestepny")
        }


}


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor


console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');

//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor

function zgadywarka() {
    const num = Math.ceil(Math.random() * 10);
    console.log(num);
    const gnum = prompt('Guess the number between 1 and 10 inclusive');
    if (gnum == num)
        alert('Matched');
    else
        alert('Not matched, the number was ' + gnum);
}

// 9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor

function dniDoSwiat() {
     data1 = Date.now()
     data2 = new Date("2023-12-24")
    swieta = data2 - data1
    jedenDzien = 1000*60*60*24
    alert(" do swiat pozostalo :" + (swieta / jedenDzien ) + "Dni")
}

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor

function dzielenie() {
    numer1 = document.getElementById("firstNumber").value;
    numer2 = document.getElementById('secondNumber').value;
    document.getElementById("wynik").innerHTML = numer1 / numer2
}
function mnozenie(){
    numer1 = document.getElementById("firstNumber").value;
    numer2 = document.getElementById("secondNumber").value;
    document.getElementById("wynik").innerHTML = numer1 * numer2

}


// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor

function celToFar() {
    celciusz = document.getElementById("celciusz").value;
    faren = document.getElementById("faren").value;
    document.getElementById("wynikCelciusz").innerHTML = (faren-32)/9;
    document.getElementById("wynikFaren").innerHTML = celciusz/5;
}
 // cwiczenia z palindromu
function pali() {
    test = "ababa"
    test1 = test[0];
    alert(test1);
}

//12. Write a JavaScript program to get the website URL (loading page).  Go to the editor

function adress() {
    alert(document.URL)
}

//13. Write a JavaScript exercise to create a variable using a user-defined name.  Go to the editor

function nazwaZmiennej() {
    var nazwa = document.getElementById("nazwaZmiennej").value;
    var wartosc = document.getElementById("wartosc").value;
    this[nazwa] = wartosc;
    alert(this[nazwa])
}

function roznica13() {
    var liczba = document.getElementById("liczba").value;
    if (Math.abs(liczba - 13) > 13) {
        alert(Math.abs(liczba - 13) * 2);
    }
    else {
        alert(Math.abs(liczba - 13))
    }
}

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  Go to the editor

function suma() {

    let war1 = document.getElementById("wartosc1").value;
    let war2 = document.getElementById("wartosc2").value;
    let suma = parseInt(war1) + parseInt(war2);
    if (war1 == war2) {

        alert("suma " + war1 + " i " + war2 + " to" + suma * 3);
    }
    else alert("suma " + war1 + " i " + war2 + " to " + suma)


}

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  Go to the editor

function difference() {

    let base = document.getElementById("zmienna1").value;

    let difference = base - 19;
    difference = Math.abs(difference);
    if (base>19) {
        difference = difference * 3;
    }
    alert("difference between 19 and " + base + " is " + difference)

}