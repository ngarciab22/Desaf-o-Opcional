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