import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal_entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://picsum.photos/200/300)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Entry Title</p>
                <p className='journal__entry-content'>Aliquam sapien dui, malesuada id aliquam non, blandit vel odio.</p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>15</h4>
            </div>
        </div>
    );
};