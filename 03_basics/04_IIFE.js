// Immediately Invoked Function Expressions
// These help to avoid pollution from global variables

(function chai() { //named IIFE
    console.log('DB Connected')
})(); //here ; is must if writting multiple IIFE otherwise there will be errors

((name) => {
    console.log(`${name} DB Connected Two`)
})('Waleed');
 