import React from 'react';
import Parent from './Parent';
import kumpulanData from './KumpulanData';

const App = () => {
    
    return(
        <div className='container'>
            <h1>Ini bagian props</h1>
            <div className='my-4 border border-secondary'>

                <Parent 
                    lesson={kumpulanData[0].lesson}
                    statusValid={kumpulanData[0].status}
                    gambar={kumpulanData[0].imageUrl} />

                <Parent 
                    lesson={kumpulanData[1].lesson}
                    statusValid={kumpulanData[1].status}
                    gambar={kumpulanData[1].imageUrl} />
            </div>
            <div className='my-4 border border-primary'>
                {kumpulanData.map((listData) => {
                    return(
                        <Parent key={listData.id}
                            lesson={listData.lesson}
                            statusValid={listData.status}
                            gambar={listData.imageUrl} />
                    )
                })}
            </div>
        </div>
    );
};
export default App;