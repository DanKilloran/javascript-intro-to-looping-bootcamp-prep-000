var forLoop = function (abc) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       abc.unshift("I am 1 strange loop.")
     } else {
       abc.unshift("I am ${i} strange loops.")
     }
  }
  return abc;
}
