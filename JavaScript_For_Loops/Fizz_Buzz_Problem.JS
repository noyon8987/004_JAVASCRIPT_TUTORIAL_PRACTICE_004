//! Fizz_Buzz Problem Solve:

for (i = 0; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz_Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0 ) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
