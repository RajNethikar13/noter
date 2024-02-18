import React from "react";
import { MdDeleteForever } from 'react-icons/md';

function notes({ id, text, date, handleDeleteNote }){
    return (
        <div className="note"> 
            <h1>This is the title</h1>
            <p>This is the content</p>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
        </div>
    );
}

export default notes;