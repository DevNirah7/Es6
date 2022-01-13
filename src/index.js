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
