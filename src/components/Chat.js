import React, { useState } from 'react';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton } from '@material-ui/core';
function Chat() {
	const [ input, setInput ] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();

		setInput('');

		// firebase magic
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<h4>
					To: <span className="chat__name">Channel Name</span>
				</h4>
				<strong>Details</strong>
			</div>
			{/* chat message */}
			<div className="chat_messages" >
				<h2>user typing....</h2>
				<h2>user typing....</h2>
				<h2>user typing....</h2>
				<h2>user typing....</h2>
				<h2>user typing....</h2>
				<h2>user typing....</h2>
			
			
			</div>
			{/* chat input */}
			<div className="chat__input">
				<form>
					<input
						type="text"
						placeholder="iMessage"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>

					<button onClick={sendMessage}>Send Message</button>
				</form>
				<IconButton>
					<MicIcon className="chat__mic" />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
