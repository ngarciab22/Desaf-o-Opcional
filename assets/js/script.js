//Se crea la variable num1 y se le da el valor ingresado por el usuario
let num1 = parseInt(prompt("Ingresa un número distinto a 0")); 
//Se crea la variable num2 y se le da el valor ingresado por el usuario
let num2 = parseInt(prompt("Ingresa un número distinto a 0")) 
//Se usa la interpolación de variables para distintas operaciones, y un alert con el resultado
alert (`El resultado de la suma es ${num1+num2}, el resultado de la resta es ${num1-num2}, el resultado de la división es ${num1/num2}, el resultado de la multiplicación es ${num1*num2} y el módulo es ${num1%num2}.`); 

//Se crea la variable celsius y se le da el valor ingresado por el usuario
let celsius = parseFloat(prompt("Ingresa la temperatura en ºC"))
//Se crea la constante kelvin
const kelvin = parseFloat(celsius + 273.15)
//Se crea la constante fahrenheit
const fahrenheit = parseFloat((celsius*9/5)+32)
//Se crea un alert con ambos resultados
alert(`La temperatura en Kelvin es de ${kelvin}, la temperatura en Fahrenheit es de ${fahrenheit}.`)

//Se crea variable dias y se le da el valor ingresado por el usuario
let dias = parseInt(prompt("Ingresa una cantidad de días para calcular su equivalencia"))
//Se crea constante año
const año = Math.floor(dias/365)
//Se crea constante semanas
const semanas = Math.floor((dias%365)/7)
//Se crea constante dia
const dia = Math.floor((dias%365)%7)
//Se crea un alert con resultados
alert(`Equivale a ${año} año(s), ${semanas} semana(s) y ${dia} día(s)`)

//Se crean las variables nro1 a nro5 y se le da el valor ingresado por el usuario
let nro1 = parseInt(prompt("Ingresa un número"))
let nro2 = parseInt(prompt("Ingresa un número"))
let nro3 = parseInt(prompt("Ingresa un número"))
let nro4 = parseInt(prompt("Ingresa un número"))
let nro5 = parseInt(prompt("Ingresa un número"))
//Se usa la interpolación de variables para sumar y calcular el promedio
alert(`La suma de todos los números es ${nro1+nro2+nro3+nro4+nro5} y el promedio es ${(nro1+nro2+nro3+nro4+nro5)/5}.`)