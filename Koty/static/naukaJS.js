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



//34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  Go to the editor
function largest(x,y) {

    if ((x>60 || x<40) || (y>60 || y<40) ){

        return "either or both inputs are out of bound of range between 40 and 60"

    }
    else {
        if (x>y) {
            return x
        }
        if (y>x) {
            return y
        }


    }

}
console.log("Zadanie 34");

console.log(largest(40,50))
console.log(largest(60,50))
console.log(largest(100,50))


//35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  Go to the editor

function characterCheck(word, cha) {

    if (word[1] == cha) { return true }
    else if (word[2] == cha) { return true }
    else if (word[3] == cha) { return true }
    else return false;


}
console.log("Zadanie 35");
console.log(characterCheck("slowo", "s"));

// cwiczenie wlasne

function makeCounter() {

    var i = 0;

    return function() {
        console.log(i++)
    }

}

var counter = makeCounter();
counter();
counter();

//36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  Go to the editor

function digits(x,y,z) {

    if (x>0 && y>0 && z>0) {

        return (x % 10 == y % 10 && y % 10 == z % 10 && z % 10 == x % 10)

    }
    else return false;
}
console.log("Zadanie 36");
console.log(digits(10,100,1000));
console.log(digits(11,100,1000));
console.log(digits(20,230,1230));
console.log(digits(20,230,-1230));
console.log(digits(20,230,1231));

//37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  Go to the editor


function lowerCa(word) {

    if (word.length <= 3) {
        return word.toUpperCase();
    }
    else {
        var retword = word.substring(0,3);
        retword = retword.toLowerCase();
        var retword1 = word.replace(/^[a-zA-Z0-9]{3}/g, "")
        return retword + retword1
    }

}
console.log(lowerCa("Epidemia"))


//38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

function examination(totMarks, finExam) {

if (finExam) {

    return totMarks >= 90;

}

return (totMarks >= 89 && totMarks <= 100);
}

console.log(examination(70,50))
console.log(examination(90,90))
console.log(examination(100,100))



//39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  Go to the editor

function sumNew(x,y) {

    z = x + y;
    if ((z >= 50) && (z<=80)) {

        return 65
    }
    else return 80;
}

console.log("Zadanie 39");

console.log(sumNew(50,60));
console.log(sumNew(20,30));
console.log(sumNew(70,75));


//40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  Go to the editor

function checker(x,y) {

    if ((x == 8) || (y == 8)) {return true}
    else if ((x + y) == 8) {return true}
    else if ((Math.abs((x - y)) == 8) || (Math.abs((y - x))) == 8) {return true}
    else return false

}

console.log("Zadanie 40");
console.log(checker(4,4));
console.log(checker(8,8));
console.log(checker(2,3));
console.log(checker(0,10));



//41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  Go to the editor

function three_numbers(x,y,z) {

    if (x == y && y == z) { return 30;}
    else if (x == y || y == z || z == x) { return 40;}
    else return 20;

}
console.log("Zadanie 41");
console.log(three_numbers(10,10,10));
console.log(three_numbers(10,10,10));
console.log(three_numbers(10,10,10));

//42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  Go to the editor

function softOrStrict(x,y,z) {

    if (y>x && z > y) {return console.log("Strict")}
    else if (z > x) {return console.log("Soft")}
    else {return console.log("does not increase: False")}

}
console.log("Zadanie 42");

softOrStrict(1,2,3)

softOrStrict(1,1,3)
softOrStrict(3,2,1)

//43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  Go to the editor

function rightmost(x,y,z) {
    xmod = x % 10;
    ymod = y % 10;
    zmod = z % 10;
    if (x < 0 || y < - 0 || z < 0) {return console.log(" one or more of numbers is less than zero")}
    else if ((xmod == ymod) && (ymod == zmod)) {return console.log("all of digits have the same rightmost digit")}
    else if ((xmod == ymod) || (ymod == zmod) || (zmod == xmod)) {return console.log("at least two of numbers have the same rightmost digit")}
    else return (console.log("None of numbers have the same rightmost digit"))


}
console.log("Zadanie 43");
rightmost(10,20,30)
rightmost(100,200,300)
rightmost(101,201,302)
rightmost(101,202,303)



//44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.  Go to the editor

function greater20(x,y,z) {

    return console.log((x>=20 && (x<y || x<z)) || (y>=20 && (y<x || y<z)) || (z>=20 && (z<y || z<x)))

}
console.log("Zadanie 44");
greater20(20,30,40);
greater20(20,20,20);
greater20(40,40,50);
greater20(10,10,10);

//45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  Go to the editor

function isOrSum15(x,y) {

    if (x == 15 || y == 15) {return true}
    else if ((x + y == 15) || (Math.abs(x-y) == 15)) {return true}
    else return false
}

console.log("Zadanie 45");
console.log(isOrSum15(0,0))
console.log(isOrSum15(7,8))
console.log(isOrSum15(15,0))
console.log(isOrSum15(30,15))
console.log(isOrSum15(8,8))

//46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  Go to the editor


function multitudeOf7Or11(x,y) {

    if (x<0 || y<0) {return false};

    if ((x%7 == 0 && y%7 == 0) || (x%11 == 0 && y%11 == 0)) {return false}
    else if ((x%7 == 0 || y%7 == 0) || (x%11 == 0 || y%11 == 0)) {return true}
    else return false


}

console.log("Zadanie 46");
console.log(multitudeOf7Or11(7,7))
console.log(multitudeOf7Or11(11,11))
console.log(multitudeOf7Or11(7,12))
console.log(multitudeOf7Or11(-1,-1))
console.log(multitudeOf7Or11(14,6))
console.log(multitudeOf7Or11(22,5))


//47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  Go to the editor

function exists(x) {
    return (x>= 40 && x<= 10000)
}
console.log("Zadanie 47");

console.log(exists(30))
console.log(exists(50))
console.log(exists(10000))
console.log(exists(10001))

//48. Write a JavaScript program to reverse a given string.  Go to the editor

function stringReversal(word) {

    return word.split("").reverse().join("")


}
console.log("Zadanie 48");
console.log(stringReversal("Kogut"))

//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  Go to the editor

function charReplacement(word) {
/*
    replaced = word.split("")
    console.log(replaced)

    for (i=0; i<=replaced.length - 1; i++) {
        replaced[i] = replaced.charCodeAt(i)



    }
    replaced = replaced.join("")
    console.log(replaced)
*/
    replaced = word.split()
    console.log("charcode w 0 pozycji indeksu string word to: " + word.charCodeAt(0))
    for (let i=0; i<=word.length -1; i++) {
        replaced[i] = word.charCodeAt(i)
        replaced[i] = replaced[i] + 1;
        replaced[i] = String.fromCharCode(replaced[i])
    }
    replaced = replaced.join("")
        console.log(replaced)

}

console.log("Zadanie 49");
charReplacement("Pies")
charReplacement("Glowa")
charReplacement("Zz9")


//50. Write a JavaScript program to capitalize the first letter of each word in a given string.  Go to the editor

function upperWord(word) {
    effectOfFunction = word.split("")
    console.log(effectOfFunction)
    effectOfFunction[0] = effectOfFunction[0].toUpperCase()
    console.log(effectOfFunction)
    effectOfFunction = effectOfFunction.join("")
    return effectOfFunction

    //return word.split("").map(function(x){return x.toUpperCase();}).join("")
   // return word.split("").at(0).toUpperCase().join("")

}

console.log("Zadanie 50");
console.log(upperWord("pies"))


//51. Write a JavaScript program to convert a given number into hours and minutes.  Go to the editor

function hoursMinutes(x) {

    hours = Math.floor(x/60)
    minutes = x % 60
    return hours + ":" + minutes

}
console.log("Zadanie 51 ");

console.log(hoursMinutes(350))

//Write a JavaScript program to convert letters of a given string alphabetically.

function alphabetically(word) {

    sorted = word.split("").sort().join("");
    return sorted
}

console.log("Zadanie 52 ");
console.log(alphabetically("Python"))

//53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  Go to the editor

function whiteSpaces(word) {

    return /a...b/.test(word) || /b...a/.test(word)

}


console.log("Zadanie 53 ");
console.log(whiteSpaces("abecadlo"))
console.log(whiteSpaces("Chainsbreak"))

//54. Write a JavaScript program to count the number of vowels in a given string.  Go to the editor

function vovels(word) {

    tool = word.split("");
    number = 0;
    for (var i = 0; i<= tool.length; i++) {

        if (tool[i] == "a" || tool[i] == "e" || tool[i] == "i" || tool[i] == "o" || tool[i] == "u") {
            number +=1

        }

    }
    return number

}


console.log(vovels("abecadlo"))
console.log(vovels("Chainsbreakaa"))