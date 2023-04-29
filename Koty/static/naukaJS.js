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


//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  Go to the editor

function fifty() {
    let liczba1 = document.getElementById("fifty1").value;
    let liczba2 = document.getElementById("fifty2").value;
    let wynik = false;
    if ((parseInt(liczba1) + parseInt(liczba2)) == 50) {
        wynik = true;
    }
    else if ((parseInt(liczba1) == 50) || (parseInt(liczba2) == 50)) {
        wynik = true;
    }

    console.log(liczba2 + liczba1);

    alert("Wynikiem jest" + wynik)
}

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  Go to the editor

function within(x) {
    return ((Math.abs(100-x) <= 20) || (Math.abs(400-x) <= 20) )
}

console.log(within(10))
console.log(within(90))
console.log(within(99))
console.log(within(199))
console.log(within(200))


function negpos(x,y) {
    return ((x>0) && (y<0)) || ((x<0) && (y>0))
}
console.log("20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.")

console.log(negpos(10,-10))
console.log(negpos(-10,10))
console.log(negpos(10,10))
console.log(negpos(-10,-10))


//21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  Go to the editor

function addPY(x) {
    let warunek = x.slice(0,2);
    if (warunek == "Py") {
        return x;
    }
    else {
        return ("Py" + x);
    }
    console.log(warunek);
    console.log(x);


}
console.log(addPY("Pycharm"));
console.log(addPY("charm"));
console.log(addPY("Google"));

//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  Go to the editor

function remover(word,y) {
    var part1 = word.substring(0, y);
    var part2 = word.substring(y+1, word.length)
    console.log(part1+part2)


}

remover("trzeci", 2)
remover("trzeci", 3)
remover("trzeci", 4)


//23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  Go to the editor

function changer(word) {
    var lit1 = word.slice(0,1);
    var lit2 = word.slice(word.length -1, word.length);
    var srodek = word.substring(1,word.length -1);
    console.log(lit2 + srodek + lit1);
}

changer("Pierwszy");
changer("Drugi");
changer("Trzeci");
changer("Czwarty");


//24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  Go to the editor

function frontAndBack(word) {

    var litera = word.slice(0,1);
    var wynik = litera + word + litera;
    console.log(wynik);

}

frontAndBack("pierwszy");
frontAndBack("Drugi");
frontAndBack("Trzeci");
frontAndBack("Czwarty");


//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  Go to the editor

function mult(x) {

    if ((x%3) == 0) {
        return true;
    }
    else if ((x%7) == 0) {
        return true;
    }
    else return false
}

console.log(mult(3));
console.log(mult(7));
console.log(mult(10));
console.log(mult(12));
console.log(mult(14));
console.log(mult(17));



//26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  Go to the editor

function newString(word) {

    if (word.length <= 3) {
        return console.log("This string is too short");
    }
    var ret = word.slice(word.length - 3);
    return console.log(ret + word + ret)
}

newString("Pierwszy")
newString("Dwa")
newString("Tzeci")
newString("1")

//27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  Go to the editor

function newJava(word) {

    var test = word.slice(0,4)
    if (test == "Java") {
        return true;
    }
    else {
        return false
    }

}

console.log(newJava("Java to chuj"))
console.log(newJava("Java to wyspa"))
console.log(newJava("Nie ma Javy"))

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  Go to the editor

function piedziesiat99(x,y) {

    if ((x >= 50) && (x <= 99)) {
        return true;
    }
    else if ((y >= 50) && (y <= 99)) {
        return true;
    }
    else return false

}
console.log(" zadanie 28:")
console.log(piedziesiat99(45,67))
console.log(piedziesiat99(1,2))
console.log(piedziesiat99(55,55))
console.log(piedziesiat99(45,105))


//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  Go to the editor

function piedziesiat992(x,y,z) {

    if ((x >= 50) && (x <= 99)) {
        return true;
    }
    else if ((y >= 50) && (y <= 99)) {
        return true;
    }
    else if ((z >= 50) && (z <= 99)) {
        return true;
    }
    else return false

}


console.log(" zadanie 29:")

console.log(piedziesiat992(45,67, 44))
console.log(piedziesiat992(50,67, 76))
console.log(piedziesiat992(99,99,99))
console.log(piedziesiat992(111,111,111))


//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function scri(word) {
    let zmienna = word.split(" ");
    console.log(zmienna);
    console.log(zmienna[4]);

    if (zmienna[4] == "Script") {
        delete zmienna[4];
    }
    return zmienna.join(" ");
}

console.log(scri("In great word of Script there exists a man "))


//31. Write a JavaScript program to find the largest of three given integers.  Go to the editor

function largest(x,y,z) {
    return Math.max(x,y,z)
}
console.log("Zadanie 31");
console.log(largest(2,3,4));
console.log(largest(5,6,7));

//32. Write a JavaScript program to find the closest value to 100 from two numerical values.  Go to the editor

function closest(x,y) {

    if (Math.abs(x - 100) < Math.abs(y-100)) {

        return x;

    }
    else if (Math.abs(x - 100) == Math.abs(y-100)){
        return console.log("Rowne")
    }
    else return y;

}
console.log("Zadanie 32");

console.log(closest(89,110));
console.log(closest(89,90));

console.log(closest(0,200));


//33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  Go to the editor

function ranges(x,y) {

    if (((x>=40) && (x<=60)) && ((y>=70) && (y<=100))) {

        return true;
    }
    else return false;

}
console.log("Zadanie 33");

console.log(ranges(70, 80))
console.log(ranges(60,80))