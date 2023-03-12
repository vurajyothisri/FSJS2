// The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log("For max min array is sorted");
ages.sort();
console.log(ages);
//max min
let min=ages[0];
let max=ages[ages.length-1]

console.log("min: ",min);
console.log("max: ",max);
//median
middleterm=ages.length/2;
console.log(ages);
console.log(middleterm);
median=(ages[middleterm-1]+ages[middleterm])/2
console.log( "Median: ",median);
//average
let sum=0;
ages.map(val=>sum+=val);
avg=sum/ages.length;
console.log("Average: ",avg);
//range
let range=ages[ages.length-1]-ages[0];
console.log("Range: ",range);
let min_average=Math.abs(avg==min);
let max_average=Math.abs(avg==max)
console.log("comparing min and avg",min_average);
console.log("comparing max and avg",max_average);