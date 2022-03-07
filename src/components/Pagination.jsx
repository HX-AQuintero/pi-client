import React from 'react';
import '../styles/Pagination.css';



export default function Pagination({ dogsPerPage, allDogs, paginate}) {
    const pageNumbers = [];

    for(let i = 0; i <= Math.floor(allDogs/dogsPerPage); i ++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className='paginate' style={{listStyleType: 'none'}}>
                {pageNumbers &&
                pageNumbers.map(e => (
                    <li className='pageItem' key={e}>
                        <button className='paginationbot' onClick={() => paginate(e)}>{e}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}