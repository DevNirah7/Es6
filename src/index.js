//
// 1.
// ES5 syntax
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

// ES6:
// const aloo=1;
// if(aloo)
// {
//   const a=2;
//   console.log(a)
// }
// console.log(aloo)

// 2.
// Es5 syntax
// var multiply = function(x, y) {
//   return x * y;
// };

// ES6:
// const multiply= (x,y) => x+y;
// console.log(multiply(1,2))

// 3.
// Es5 syntax
// var customer = {
//   name: "Bhaalo"
// };
// var card = {
//   amount: 20,
//   product: "Aaalo",
//   unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product +
//     " for price of " + card.unitprice + " per piece";

// ES6:

// let customer=
// {
//   name: "Bhaloo"
// };

// let card=
// {
//  amount: 20,
//  product: "Aaloo",
//  unitprice:50
// };
// let message=`Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`
// console.log(message);

// 4.
// // Es5 syntax
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

// // // ES6:

// const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
// const [CEO,Mentor]= Neog;
// console.log(CEO,Mentor);

// // 5.
// // Es5 Syntax:
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

// ES6:
// const arr = ["MA", "TA", "PA", "CA"];
// const [firstName,surname]=arr;
// console.log(firstName)
// console.log(surname)

// // 6.
// // ES5 syntax
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

// ES6:
// const Aaloo="tasty", Bhaloo="Cute",
// Obj = {Aaloo,Bhaloo};
// console.log(Obj)

// 7.
// ES5 syntax
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

//ES6:
// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a+b} and not ${2*a+b}`)

// 8.
// ES5 syntax
// var arithmeticsObj = {
//   sum: function sum(num1, num2) {
//     return num1 + num2;
//   },
//   multiply: function multiply(num1, num2) {
//     return num1 * num2;
//   }
// };

// // ES6:
// const arithmeticsObj={
// //   sum: (num1,num2) => num1+num2,
// //   multiply: (num1,num2) => num1*num2
// // };

// // 9.
// // ES5 syntax
// var avengers = {
//   operation: "Assemble",
//   members: [
//     {
//       ironMan: "Tony Stark"
//     },
//     {
//       captainAmerica: "Steve Rogers"
//     },
//     {
//       blackWidow: "Natasha Romanoff"
//     }
//   ]
// };
// var operation = avengers.operation,
//   members = avengers.members;

let avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};

let { operation, members } = avengers;
console.log(avengers);
