import React from 'react';
import Title from './utils/title';
import Items from './utils/items';

const Sales = ({ ifExists, endpoint }) => {
    const { title, items } = endpoint
    return (
        <div className='nike-container'>
            <Title title={title} />
            <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 
            ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' :
                    'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
                {
                    items?.map((item, i) => {
                        return (
                            <Items {...item} key={i} ifExists={ifExists} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sales;