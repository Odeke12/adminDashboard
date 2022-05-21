import React from 'react'
import './topbar.css'
// import {NotificationsNoneIcon} from '@mui/icons-material';
// import { NotificationsNone } from '@mui/icons-material';
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Admin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                <NotificationsNone/> 
                <span className="topIconBadge">2</span>
                </div>      
                <div className="topbarIconContainer">
                <Language/> 
                <span className="topIconBadge">2</span>
                </div>   
                <div className="topbarIconContainer">
                <Settings/> 
                </div> 
                <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className="topAvatar" />              
            </div>
        </div>
    </div>
  )
}

export default TopBar