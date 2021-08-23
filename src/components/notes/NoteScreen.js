import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awsome title'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea
                    placeholder='What happened today?'
                    className='notes__text-area'
                ></textarea>

                <div className='notes__image'>
                    <img
                        src='https://picsum.photos/200/300'
                        alt='note_image'
                    />
                </div>
            </div>
        </div>
    );
};