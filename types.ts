//? Primitive Datatypes
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = "Hello There";
myNum = 22;
myBool = false;
myVar = "hello";
myVar = 2;

//? Derived Datatypes

//* <- Arrays ->
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

strArr = ["Hello", "world"];
numArr = [1, 2, 3, 4];
boolArr = [true, false, true];

//* <- Tuple ->
let strNumTuple: [string, number];

strNumTuple = ["hello", 4];

//* <- Void ->
let myVoid: void = undefined;

console.log(myVoid)
