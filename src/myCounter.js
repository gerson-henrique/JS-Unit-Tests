

const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counte = 2; counte <= 3; counte += 1) {
      myArray.push(counte);
    }
  }
  return myArray;
};

module.exports = myCounter;
