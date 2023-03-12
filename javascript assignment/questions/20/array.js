// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift('Meat');
console.log("After adding meat:");
console.log(shoppingCart);
if(!(shoppingCart.includes('sugar'))){
    console.log("Sugar not existed in the array so adding at end of the array");
    shoppingCart.push("sugar");
}
else{
    console.log('already sugar  exits in array');
}
console.log("after addding sugar");
console.log(shoppingCart);
shoppingCart.splice(4,1);
console.log('after removing honey');
console.log(shoppingCart);
console.log('Modifying Tea to green tea');
shoppingCart[3] = "Green Tea"; 
console.log(shoppingCart);