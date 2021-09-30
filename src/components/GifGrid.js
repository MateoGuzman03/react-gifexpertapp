import React from 'react'
import { useFetchGIfs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

    

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGIfs( category )

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

        {loading && <p classname='animate__animated animate__flash'>Loading...</p>}

        <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}
