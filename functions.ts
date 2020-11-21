function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(getSum(1, 3));

let mySum = function (num1: number, num2: any): number {
  return num1 + num2;
};

// console.log(mySum(1, '5'));

const getName = (firstName: string, lastName?: string): string => {
  return firstName + " " + lastName;
};

// console.log(getName("MG"));
