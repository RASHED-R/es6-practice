///
// threeDots
const ages = [12, 14, 16, 15]
const ages2 = [17, 11, 13]
const ages3 = [1, 2, 3, 4, 5]

const allAges = [...ages, ...ages2, 100, ...ages3];
// console.log(allAges);

const business = 650;
const minister = 450;
const mp = 250;
// const maximum = Math.max(business, minister, mp);
// console.log(maximum);
const maximum = [650, 450, 250]
const maxNum = Math.max(...maximum);
console.log(maxNum);

let myString = "abrakadabra";
const splitSting = [...myString];
console.log(splitSting);