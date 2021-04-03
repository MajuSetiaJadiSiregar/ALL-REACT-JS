/**
 * tipe data String => biasa nya di tandai dengan tanda kutip, 
 * tipe data boolean => value nya cuma dua, true dan false
 */
var nama = 'Maju Siregar';
var umur = "17";
//console.log(typeof(nama))

var isDisable = false;
var jalan = true;

console.log(typeof(jalan));

/**variabel => menampung data
 * keyword membuat variabel => var, let, const
 * cara membuat variabel => keywordVariabel namaVariabelnya = valueTipeData
 */

var beli = 'Mahal'; /**sifat nya hoisting */
let jadi = "Lihat-lihat dulu"; /**bisa diubah */
jadi ='ok deh'
const mahal = true; /**tidak bisa diubah */
mahal = false;
console.log(beli, jadi, mahal);