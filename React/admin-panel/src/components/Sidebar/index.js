import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { PiShoppingBagBold } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { FaAngleRight } from 'react-icons/fa';
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { MyContext } from '../../App';

const Sidebar = () => {
    const [activeTabs, setActiveTabs] = useState([false, false, false]); 

    const context = useContext(MyContext);

    const toggleSubmenu = (index) => {
        const newActiveTabs = [...activeTabs];
        newActiveTabs[index] = !newActiveTabs[index];
        setActiveTabs(newActiveTabs);
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[0] ? 'active' : ''}`} onClick={() => toggleSubmenu(0)}>
                        <span className='icon'><MdDashboard /></span>
                        Dashboard
                    </Button>
                    
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[1] ? 'active' : ''}`} onClick={() => toggleSubmenu(1)}>
                        <span className='icon'><MdOutlineMailOutline /></span>
                        Inbox
                    </Button>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[2] ? 'active' : ''}`} onClick={() => toggleSubmenu(2)}>
                        <span className='icon'><BsPerson /></span>
                        Me
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[2] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Leave</Link></li>
                            <li><Link to="#">Attendance</Link></li>
                            <li><Link to="#">Performance</Link></li>
                            <li><Link to="#">Helpdesk</Link></li>
                            <li><Link to="#">Apps</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[3] ? 'active' : ''}`} onClick={() => toggleSubmenu(3)}>
                        <span className='icon'><BsMicrosoftTeams /></span>
                        Teams
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[3] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Team History</Link></li>
                            <li><Link to="#">Team Updates</Link></li>
                            <li><Link to="#">Team Manager</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[4] ? 'active' : ''}`} onClick={() => toggleSubmenu(4)}>
                        <span className='icon'><FaMoneyCheck /></span>
                        My Finances
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[4] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Summary</Link></li>
                            <li><Link to="#">Taxes</Link></li>
                            <li><Link to="#">Salary Slip</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[5] ? 'active' : ''}`} onClick={() => toggleSubmenu(5)}>
                        <span className='icon'><BsPerson /></span>
                        Orders
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[5] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Order List</Link></li>
                            <li><Link to="#">Order View</Link></li>
                            <li><Link to="#">Order Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[6] ? 'active' : ''}`} onClick={() => toggleSubmenu(6)}>
                        <span className='icon'><CgOrganisation /></span>
                        Organisation
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[6] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Employees</Link></li>
                            <li><Link to="#">Policies</Link></li>
                            <li><Link to="#">Hiring</Link></li>
                            <li><Link to="#">Engage</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTabs[7] ? 'active' : ''}`} onClick={() => toggleSubmenu(7)}>
                        <span className='icon'><MdGroups /></span>
                        Customers
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTabs[7] ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Customer List</Link></li>
                            <li><Link to="#">Customer View</Link></li>
                            <li><Link to="#">Customer Upload</Link></li>
                        </ul>
                    </div>
                </li>

            </ul>
            <br/>
            <div className='logoutWrapper'>
                <div className='logoutBox'>
                    <Button variant='contained'><CiLogout/>Logout</Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
