import { Avatar, IconButton, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import React from 'react';

import './Sidebar.css';
import SidebarChat from './SidebarChat';
function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar className='sidebar__avatar' />
				<div className="sidebar__input">
					<SearchIcon />
					<input placeholder="Search" />
				</div>
				<IconButton variant="outline" className="sidebar__inputButton">
					<RateReviewOutlinedIcon />
				</IconButton>
			</div>

			<div className="sidebar__chat" >
                <SidebarChat/>
            </div>
		</div>
	);
}

export default Sidebar;
