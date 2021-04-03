/**
 * array => menampung banyak data
 * biasa nya di tandai dengan kurung siku []
 */
let FullstackJs = ['Mongoose', 'Express', 'React', 'Node JS'];
const arrayBebas = [1, 'Makan', false, ['dalam', 'array'], function apakahArray(){console.log('tes-array')}]
//console.log(FullstackJs)
//console.log(arrayBebas);

/**
 * cara akses array
 */
const kumpulanData = [10,22,322,42,55];
//console.log(kumpulanData[kumpulanData.length - 1])
// kumpulanData.push(66);
// console.log(kumpulanData)
// console.log(kumpulanData.length)

for(let i=0; i < kumpulanData.length; i++) {
   console.log(kumpulanData[i]);
}