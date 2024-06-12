import React,{useContext, useState} from "react";
import { Link } from "react-router-dom"
import logo from "./logo.png"
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md"
import { MdOutlineMenu } from "react-icons/md"
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { PiShoppingBagBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import { IoShieldHalfSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpenNotificationDrop, setIsOpenNotificationsDrop] = React.useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openMyNotifications = Boolean(isOpenNotificationDrop);

    const context = useContext(MyContext);

    const handleOpenlyMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleOpenNotificationsDrop = () =>{
        setIsOpenNotificationsDrop(true);
    };
    const handleCloseNotificationsDrop = () =>{
        setIsOpenNotificationsDrop(false);
    };
    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'}>
                                <img src={logo} className="logo px-5"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar===false ? <MdMenuOpen/> : <MdOutlineMenu/>
                                }
                            </Button>
                            <SearchBox/>
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode/></Button>
                            <Button className="rounded-circle mr-3"><PiShoppingBagBold/></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>
                            
                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle mr-3" onClick={handleOpenNotificationsDrop}><FaRegBell/></Button>
                                <Menu
                                        anchorEl={isOpenNotificationDrop}
                                        className="notifications dropdown_list"
                                        id="notifications"
                                        open={openMyNotifications}
                                        onClose={handleCloseNotificationsDrop}
                                        onClick={handleCloseNotificationsDrop}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <div className="head ps-3 pl-0">
                                            <h4>Notifications (2)</h4>
                                        </div>

                                        <Divider style={{ background: 'black' }} variant="middle" />
                                        
                                        <div className="scroll">
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src = "https://th.bing.com/th/id/R.fba6ecd5d2f7c7925177bceb222b09b1?rik=Ghf2DCU4j3SiZQ&riu=http%3a%2f%2fmedia.techeblog.com%2fimages%2fjoaquin-phoenix-joker.jpg&ehk=bl0nW7Dbn5gDa4Dm1mQ1oRYsz38uRyTfPAdVcWu6GvQ%3d&risl=&pid=ImgRaw&r=0"/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Joker</b>
                                                            Assigned a task
                                                            <b> Kill Batman</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                                </div>
                                            </MenuItem>

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src = "https://th.bing.com/th/id/R.fba6ecd5d2f7c7925177bceb222b09b1?rik=Ghf2DCU4j3SiZQ&riu=http%3a%2f%2fmedia.techeblog.com%2fimages%2fjoaquin-phoenix-joker.jpg&ehk=bl0nW7Dbn5gDa4Dm1mQ1oRYsz38uRyTfPAdVcWu6GvQ%3d&risl=&pid=ImgRaw&r=0"/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Joker</b>
                                                            Assigned a task
                                                            <b> Kill Justice League</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                                </div>
                                            </MenuItem>
                                        </div>
                                        <div className="ps-2 pe-2 w-100 pt-2 pb-1">
                                            <Button className="btn-blue w-100">View all notifications</Button>
                                        </div>
                                    </Menu>
                            </div>
                            
                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenlyMyAccDrop}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src = "https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"/>
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Uday Kumar S</h4>
                                        <p className="mb-0">@udaysn10</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp />
                                    </ListItemIcon>
                                    Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
        </>
    )
}

export default Header;