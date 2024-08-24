console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//this is for the items in our cart
let basket = [];

//this is our max items const for stretch goals
const maxItems = 5;


//adds an item to the basket
function addItem(item){
    if(isFull()){
        return false
    }
    basket.push(item); return true;
}

console.log(`basket has these items: ${basket}`);
console.log('adding egg', addItem('egg'));
console.log(`basket now has ${basket}`);


//lists items
function listItems(){
    for(item in basket){
        console.log(basket[item]);
    }
}
addItem('list tester');
addItem('list tester 2')
console.log(`basket should countain: ${basket}`);
listItems();
empty();

//resets the basket
function empty(){
    while(basket.length > 0){
        basket.pop();
    }
}

addItem('test');
console.log(`basket is: ${basket}`);
console.log('resetting');
empty();
console.log(`reset basket is: ${basket}`);


//Stretch goal zone

function isFull(){
   return (basket.length >= maxItems);
}

function removeItem(item){
    let ind = basket.indexOf(item);
    if(ind == -1){
        return null;
    }
    return basket.splice(ind, 1)[0];
}

//test

console.log('is full?', isFull());
for(i=0; i<6; i++){
    addItem(i);
}
console.log(`${basket}`);
console.log('is full? expecting true', isFull());
console.log('can add item to full basket?', addItem('fullTest'));
console.log(removeItem(2));
console.log(`basket without 2 is ${basket}`);
empty();




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
