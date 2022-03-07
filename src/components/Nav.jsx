import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, listOfTemperaments, filterByTemp, filterByCreated,
    orderByName, orderByWeight } from '../actions/index';
import Loading from './Loading';
import '../styles/Nav.css';

export default function Nav(){
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments); 
    const [, setCurrentPage] = useState(1);

    useEffect (() => {
        dispatch(listOfTemperaments());
        dispatch(getDogs());
    }, [dispatch]);
//------------------------------------------------------------------------------------------
    function handleFilterByCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
    }
//------------------------------------------------------------------------------------------
    function handleFilterByTemp(e){
        e.preventDefault();
        dispatch(filterByTemp(e.target.value));
        setCurrentPage(1);
    }
//------------------------------------------------------------------------------------------
    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
    }
//------------------------------------------------------------------------------------------
    function handleOrderByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
    }

    return(
        <div className='fltros'>
            <select className='peso' onChange={(e) => handleOrderByWeight(e)}> {/* filtro por peso */}
                <option defaultValue value='All'>Sort weight by</option>
                <option value='asc_p'>Asc. weight</option>
                <option value='desc_p'>Desc. weight</option>
            </select>
            <select className='alfab' onChange={(e) => handleOrderByName(e)}> {/* filtro por raza */}
                <option defaultValue value='All'>Sort name by</option>
                <option value='asc_alf'>A-Z</option>
                <option value='desc_alf'>Z-A</option>
            </select>
            <select className='temper' onChange={(e) => handleFilterByTemp(e)}>{/* filtro por temperamento */}
                <option value='All'>Temperaments</option>
                {temperaments.length > 0 ? (
                    temperaments.map(e => {
                        return (
                            <option value={e.temperament}
                            key={e.temperament}
                            >{e.temperament}</option>
                        )
                    })
                ) : (
                        <div>
                            <Loading/>
                        </div>
                )};
            </select>
            <select className='todos' onChange={(e) => handleFilterByCreated(e)}>{/* filtro por origen (API, DB) */}
                <option defaultValue value='all_dogs'>All Dogs</option>
                <option value='dog_api'>API</option>
                <option value='dog_db'>DB</option>
            </select>
        </div>
    )
}