import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions/index';
import { useEffect } from 'react';
import Loading from './Loading';
import '../styles/Details.css';

export default function Details(){
    const allDetails = useSelector((state) => state.dogDetails);
    const dispatch = useDispatch();
    
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetails(id));
    });


    return (
        <div className='detal'>
            {allDetails.length > 0 ? (
                <div className='det'>
                    <h1>{allDetails[0].name}</h1>
                    <div style={{width: '60%', float: 'left'}}>
                        <img src={allDetails[0].image} alt='img not found' width='400px' height='300px'/>
                    </div>
                        <div>
                            <h2>Height: {allDetails[0].heightMin} - {allDetails[0].heightMax} cms.</h2>
                        </div>
                        <div>
                            <h2>Weight: {allDetails[0].weightMin} - {allDetails[0].weightMax} kg.</h2>
                        </div>
                    <div>
                        <h2>Lifespan: {allDetails[0].lifespan.length > 8 ? 
                        allDetails[0].lifespan.slice(0, 7) : allDetails[0].lifespan.slice(0, 2)
                        } years</h2>
                    </div>
                    <div style={{width: '40%', float: 'right'}}>
                        <h2><span>
                            Temperaments: {allDetails[0].temperament}
                        </span></h2>
                    </div>
                </div>    
                    ) : (
                        <div>
                            <Loading/>
                        </div>
                    )} 
                <Link to='/home'><button className='botback'>Back</button></Link>     
        </div>
    );
}