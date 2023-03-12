//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
console.log('ETHIOPIA NOT EXITS');
let countries=['ENGLAND','INDIA','AFGANISTHAN','BANGLADESH','FRANCE','EUROPE','USA','TURKEY','ASIA'];

if(countries.includes('ETHIOPIA')){

    console.log('Already exits');
}
else{
    countries.push('ETHIOPIA')
}
console.log('after adding ETHIOPIA');
console.log(countries);

console.log('EUTHOPIA EXITS');
let countries1=['ENGLAND','INDIA','AFGANISTHAN','BANGLADESH','FRANCE','EUROPE','USA','ETHIOPIA','TURKEY','ASIA'];

if(countries1.includes('ETHIOPIA')){

    console.log('Already exits');
}
else{
    countries1.push('euthopia')
}
