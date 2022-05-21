import React from 'react'
import './sidebar.css'
import { LineStyle, TrendingUp, Timeline, Mail, Message } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Time
                        </li>
                        <li className="sidebarListItem">  
                            <TrendingUp className='sidebarIcon'/>
                            Sales 
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick  Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Time
                        </li>
                        <li className="sidebarListItem">  
                            <TrendingUp className='sidebarIcon'/>
                            Sales 
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Mail className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">  
                            <Message className='sidebarIcon'/>
                            Messages 
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Sidebar