import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = (props) => {
    return (
        <div className='container'>
            <div>
                <form action="">
                    <label htmlFor="search " className='shadow rounded w-100 p-2'>
                            <FaSearch className='iconS m-2 ' />
                            <input type="search" name="" id="search" placeholder={props.plasholder} className='w-75' />
                       
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Search