/**
 * 
 */
/**function tampa return dan tampa parameter */
function makan() {
   /**
    * kumpulan logic
    */
   let ayam = 'Goreng';
   console.log(ayam)
};
//makan();

/**function dengan parameter */
function restoran(open,close){
   let buka = open;
   let tutup = close;
   let keterangan = 'Restoran buka di jam ' + buka + 'tutup di jam ' + tutup;
   console.log(keterangan);
};
//restoran(12,14);
//restoran(10, 14);

/**function dengan retrun dan parameter */
function tambah(bilPertama, bilKedua){
   return bilPertama + bilKedua;
};
//console.log(tambah(1,2))

function kosong(){
   return function test(){console.log('test')}
};
console.log(kosong())
