import { CalendarViewDayRounded, CalendarViewMonth, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Public, Publish } from '@mui/icons-material'
import React from 'react'
import './user.css'
import {Link} from 'react-router-dom'

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='userShowImg'/>

                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Odeke Trevor</span>
                        <span className="userShowUserTitle">Full stack developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">Odeke12</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarViewMonth className='userShowIcon'/>
                    <span className="userShowInfoTitle">12 12 1997</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">0771419370</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">angulotrevor@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">New York</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Odeke12' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full name</label>
                            <input type="text" placeholder='Odeke Trevor' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='angulotrevor@gmail.com' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phonenumber</label>
                            <input type="text" placeholder='0771419370' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='New York' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='userUpdateImg'/>
                            <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div>
                <button className="userUpdateButton">Update</button>

                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}
