class Rumah {
   constructor(color, tinggi, lebar){
      this.color = color;
      this.tinggi = tinggi;
      this.lebar = lebar;
   };

   luas(){
      return this.tinggi * this.lebar
   }
};

class RumahDepok extends Rumah{

};
let rumahBaruDepok = new RumahDepok('Hitam', 100, 2).luas();
console.log(rumahBaruDepok);


// /**instance => keyword new */
// let rumahBaru = new Rumah('putih',50, 50);
// let luasRumahBaru = rumahBaru.luas();
// console.log(luasRumahBaru);
// // let rumahLama = new Rumah('Hijau', 2, 2);
// let rumahBaru = new Rumah('putih',50, 50).luas();
// console.log(rumahBaru)
// //console.log(rumahBaru, rumahLama);

