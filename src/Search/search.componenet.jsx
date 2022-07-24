import {React} from 'react'
import '../Search/search.componenet.css'

export const SearchString=({placeholder,handlechange})=>{
    return(
        <div className='searchboxContainer'>
            <input  className="searchbox" type="search"
            placeholder={placeholder}
            onChange={handlechange}
            ></input>
        </div>
    )

}