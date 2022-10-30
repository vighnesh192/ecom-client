import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Card({flow, title, body, linkTo, ...props}) {
    const location = useLocation();

    return (
        <Link to={{ pathname: `${linkTo}`}} state={{ prevPath: location.pathname }}>
            <div
                className='border border-slate-400 rounded-md grid grid-rows-2 px-7 py-3 hover:cursor-pointer hover:border-primary'
            >
                <div className='font-semibold'>{title}</div>
                <div>{body}</div>
            </div>
        </Link>
    )
}

export default Card