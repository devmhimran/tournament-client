import React from 'react';

const AddTournament = () => {
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title">Add Tournament</h2>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
            
        </div>
    );
};

export default AddTournament;