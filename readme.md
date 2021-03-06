# TypeScript

---

# Instalación

---

Para poder usar TS necesitamos instalar Node.js y NPM previamente.

```java
npm i typescript -g
```

```java
// Nos aseguramos que tenemos TS instalado
tsc --version 
```

# Compilación

---

Al final del día TS es un lenguaje compilado que transformará su contenido en JS para que sea legible por cualquier navegador.

Entonces compilamos nuestro archivo .ts en un .js.

```java
// file.ts >> file.js
tsc file.ts 
```

## Watch

---

Para hacer un watch sobre el archivo sobre el que estemos trabajando usaremos la flag -w o —watch.

```java
tsc file.ts -w
tsc file.ts --watch
```

# Tipos de datos

---

```tsx
// STRONG/STATIC TYPING - Syntactic sugar
// The language allows to declare optinal static type notation
// syntactic sugar or type annotations

var aCounter; // unkwnow (any) type
var bCounter = 0; // number(inferred)
var cCounter:number; //number
var dCounter:number = 0; //number

// when a type is detected automatically
// the process is calle type inference
// the ts primitive types are:
    // numbers, booleans, string, void, null, undefined

// - Number: all numbers are floiting point numbers
var height: number = 6;

// - strings
var myName: string = "Aaron";
myName = 'Isaac';

// - Boolean
var isDone:boolean = true;
isDone= true;

// Arrays of types
var listOfNumbers:number[] = [1,2,3];
var listOfNumbers:Array<number> = [12,12,12];

var listOfStrings:string[] = ["hello", "how are you"];
var listOfNumbers2:Array<string> = ["hola", "que tal"];

var listOfBooleans:boolean[] = [true, false, true];

// tuples
var strNumTuple: [string, number];
strNumTuple = ['Hello', 1000];
strNumTuple = ['Hello', 2000, 3, 4];

// Enum
// gives more friendly Names to numeric Values
enum Color {Red, Green, Blue};
var c:Color = Color.Red; //0

// enums work by naming numeric values
enum Role {Employee, Manager, Admin}
var role:Role = Role.Employee; // 0

// by default is 0, but you can tweak either the start
// and also you can set individual values
enum Permissions {Root = 4, Invited}
var fazt = Permissions.Root; // 4
var jesus = Permissions[5]; // Invited

// Any
// all types in ts are subtypes of 'Any Type'
// types that are automatically detected is know as
// 'type inference', and when it cannot detect the type
// is any
var anyData:any = 1;
anyData = true;
anyData = "maybe a string instead";

var listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;

//Void: absence of any type

var myVoidData:void = null;
var myNullData:null = null;
var myUndefinedData:undefined = null;
var myUndefinedData:undefined = undefined;
```

> Var, let y const funcionan igual que en JS.

# Funciones

---

```tsx
function greets(name: string): string {
  return `Hello + ${name}`;
}

greets("world");

function myVoid(): void {
  return;
}

// function annotation with parameter
// type annotation and return type annotation
var sayHello: (name: string) => string;
// implementation
sayHello = (name: string) => {
  return "Hello" + name;
};

// type of parameters
function add(x: number, y: number): number {
  return x + y;
}

// Optional type
function add(x: number|string, y: number|string): number {
	if(typeof(x) === 'string'){
		x = parseInt(x);
	}
	if(typeof(y) === 'string'){
		y = parseInt(y);
	}
  return x + y;
}

//optional parameter
// when is not parameter, ts assign null value to it
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y + z;
}

function greetMe(name: string, greeting?: string): string {
  if (!greeting) {
    greeting = hello;
  }
  return greeting + ", " + name;
}

// default parameter
function greetMeRefactored(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

// overloads
// we can use the add strings and numbers

function polimorphicAdd(x: string, y: string): string;
function polimorphicAdd(x: number, y: number): number;
function polimorphicAdd(x: any, y: any): any {
  return x + y;
}

// to operate unlimited parameters
// a rest parameter can only be the final param in a function
function sumarMuchosParametros(arg1: string, ...args: string[]): string;
function sumarMuchosParametros(arg1: number, ...args: number[]): number;
function sumarMuchosParametros(arg1: any, ...args: any[]): any {
  var total = arg1;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// además podemos crear un arreglo que represente 
// nuestra lista indeterminada de parametros

function sumaCuantosQuieras(arg1) {
  var args = [];
  for (var _i = 0; _i < arguments.length - 1; _i++) {
    args[_i] = arguments[_i + 1];
  }

  var total = arg1;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}
```

# Interfaces

---

```tsx
// if a type annotation becomes to complex
// you can create an interface to represent
// the type to simplify annotations
// also is reusable
// are not limite to objets
// they can describe any structure

interface IPerson {
    name: string;
    heighInCentimeters: number;
}
var myperson:IPerson = {
    name:'Mark',
    heighInCentimeters: 181
}

interface IPoint {
    x: number,
    y: number
}

interface ICompare {
    compare(p2: IPoint):number;
}

// las interfaces se pueden heredar a traves de la clausula "extends"

interface ISumador {
    sumar(arg1:number, ...args:number[]):number;
}

interface ISubstrator {
    restar(arg1:number, ...args:number[]):number;
}

/*
interface ICalculador extends ISumador, ISubstrator{
    multiplicar(arg1:number, ...args:number[]):number;
    dividir(arg1:number, arg2:number):number;
}
*/
// luego podemos usarla en una funcion
function ejecutaCalculos(calculadora:ICalculador, num1, num2) {
    calculadora.sumar(num1,num2);
    calculadora.restar(num1,num2);
    calculadora.multiplicar(num1,num2);
    calculadora.dividir(num1,num2);
    return true;
}

// ademas del codigo anterior, estos pueden estar separados

interface ICalculador extends ISumador {
    multiplicar(arg1:number, ...args:number[]):number;
}

interface ICalculador extends ISubstrator {
    dividir(arg1:number, ...args:number[]):number;
}

// tambien se puede crear una interface en el proceso de 
// declaracion mismo

function addPoints(p1:IPoint, p2:IPoint):IPoint {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x:x, y:y}
}

//Valido
var newPoint = addPoints({x:3,y:4},{x:5,y:1});
// Error
//var newPoint = addPoints({x:1},{x:5,y:1});

interface ITodo {
    titulo:string;
    texto:string
} 

function hacerTarea(todo:ITodo){
    console.log(todo.titulo + " " + todo.texto);
}
```

# Clases

---

```tsx
interface IUser {
    name: string;
    email: string;
    age: number;
    register();
    payMembership();
}

class User implements IUser{
     name: string;
     email: string;
     age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ', this.name);
    }

    register() {
        console.log(this.name + 'is now regitered')
    }

    payMembership() {
        console.log(this.name + 'paid membership');
    }
}

// inheritance

class Member extends User{
    id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payMembership(){
        super.payMembership();
    }
}

let isaacNewton = new User('isaac Newton', 'isaacNewton@gmail.com', 34);

console.log(isaacNewton.age);
isaacNewton.register();

let mike = new Member(1, 'Mike Portnoy', 'mike@email.com', 50);
mike.payMembership();
```