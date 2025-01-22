//! Friday is Shopner Bazar
//? Offer-01: 550 taker Shoping a jodi bkash a payment koran. 50 taka Cash Back Paben.

// let totalAmount = 600;
// let paymentMethod = "bkash";

// if (paymentMethod === "bkash") {
//   if (totalAmount >= 550) {
//     console.log(
//       "Your Payment is Successfull and you got 50 taka cash back for paying using Bkash"
//     );
//   } else {
//     console.log("Your payment is Successfully done");
//   }
// } else {
//   console.log("Your payment is successfull!");
// }

//? Offer-02: 1010 taker Shoping a jodi visa Card a Payment koran. 100 taka Cash Back Paben.

// let totalAmount = 3333;
// let paymentMethod = "visa";

// if (paymentMethod === "visa") {
//   if (totalAmount >= 1010) {
//     console.log(
//       "Your payment is Successfull and you got 100 taka cash back for paying using visa"
//     );
//   } else {
//     console.log("Your payment is done");
//   }
// } else {
//   console.log("Your payment is successfully done");
// }

//? Offer-03: 5500 taker shoping a jodi bkash/nagad a payment koran 100 taka cash back paben and visa card diya payment korla 5% discount paben upto 500 taka.

let totalAmount = 5500;
let paymentMethod = "visa";

if (paymentMethod === "bkash") {
  if (totalAmount >= 5500) {
    console.log("You got 100 taka cash back for paying using Bkash");
  } else {
    console.log("Your Bkash payment is done");
  }
} else if (paymentMethod === "nogod") {
  if (totalAmount >= 5500) {
    console.log("You got 100 taka cash back for paying using Nogod");
  } else {
    console.log("Your Nogod Payment is done");
  }
} else if (paymentMethod === "visa") {
  if (totalAmount >= 5500) {
    let discount = (totalAmount * 5) / 100;
    if (discount < 500) {
      console.log(
        `You got ${discount} taka cash back for paying using visa card`
      );
    } else if (discount >= 500) {
      console.log("You got 500 taka cash back for paying using visa card");
    }
  } else {
    console.log("Your visa card payment is done");
  }
}
