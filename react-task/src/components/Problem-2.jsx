import { Button } from 'bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Problem2 = () => {
    const [modalA,setModalA] = useState(false);
    const [modalB,setModalB] = useState(false);

    const handleModalA = ()=>{
        setModalA(!modalA);
        // setModalB(modalA);
    }
    const handleModalB = ()=>{
        setModalB(!modalB);
        // setModalA( modalB);
    }
    useEffect(()=>{

    },[setModalA,setModalB])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" 
                onClick={handleModalA}
                >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" 
                onClick={handleModalB}
                >US Contacts</button>
                </div>
                {
                    modalA&&(
                        <div>
                           <button style={{
                            backgroundColor:'#46139f'
                           }}>
                           All Contacts
                           </button>
                           <button
                           style={{backgroundColor:'#ff7f50'}}
                           onClick={()=>(setModalB(true),setModalA(false))}>
                           US Contacts
                           </button>
                           <button 
                           style={{
                            backgroundColor:'#46139f'
                           }}
                           onClick={()=>setModalA(!modalA)}>
                            Close
                           </button>
                        </div>
                    )
                }
                {
                    modalB&&(
                        <div>
                           <button
                            style={{
                                backgroundColor:'#46139f'
                               }}
                            onClick={()=>(setModalB(false),setModalA(true))}>
                           All Contacts
                           </button>
                           <button 
                           style={{backgroundColor:'#ff7f50'}}
                           >
                           US Contacts
                           </button>
                           <button 
                           style={{
                            backgroundColor:'#46139f'
                           }}
                           onClick={()=>setModalB(!modalB)}>
                            Close
                           </button>
                        </div>
                    )
                    
                }
            </div>
        </div>
    );
};

export default Problem2;