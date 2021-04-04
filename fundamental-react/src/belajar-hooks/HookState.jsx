import React, {useState} from 'react';

const dataCustomer = [
    {
        id : 1,
        alamat : 'Margonda',
        status : 'Member'
    },
    {
        id : 2,
        alamat : 'Bintaro',
        status : 'Pengunjung'
    }
]


const HookState = () => {
    /**desctruting array */
    const [totalBelanja, setTotalBelanja] = useState({nama : 'Maju', clan : 'Siregar'});
    const [dataPelanggan, setDataPelanggan] = useState(dataCustomer);

    const gantiNama = () => {
        setTotalBelanja({nama : 'Maju Setia Jadi', clan : 'Bebas'})
    }
    console.log(totalBelanja);
    // console.log(dataPelanggan);
    return(
        <div>
            <h1>Bagian hooks state</h1>
            <h1>{totalBelanja.nama} {totalBelanja.clan}</h1>
            <button onClick={() => console.log('Test Button')}>Test</button>
            <button onClick={gantiNama}>testt</button>

            {dataPelanggan.map((listPelanggan) => {
                return(
                    <div key={listPelanggan.id}>
                        <h1>Alamat : {listPelanggan.alamat}</h1>
                        <p>Status : {listPelanggan.status}</p>
                    </div>
                )
            })}
        </div>
    );
};
export default HookState;