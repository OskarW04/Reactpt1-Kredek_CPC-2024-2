import React from 'react';

const Taskfilter = ({filter, setFilter}) => {
    return(
        <div className='filter'>
            <button className='filterButton'
                onClick={() => setFilter('all')}
                style={{
                    backgroundColor: filter === 'all' ? 'blue' : 'lightgray'
                }}
            >
                All
            </button>
            <button className='filterButton'
                onClick={() => setFilter('completed')}
                style={{
                    backgroundColor: filter === 'completed' ? 'blue' : 'lightgray'
                }}
            >
                Completed
            </button>
            <button className='filterButton'
                onClick={() => setFilter('pending')}
                style={{
                    backgroundColor: filter === 'pending' ? 'blue' : 'lightgray'
                }}
            >
                Pending
            </button>
        </div>
    )
}

export default Taskfilter;
