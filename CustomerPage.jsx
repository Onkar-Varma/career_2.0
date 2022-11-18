import React from 'react';
import {useNavigate} from 'react-router-dom';
import './customer.css'
import User from '../../img/user-solid.svg';
import Pen from '../../img/pen-to-square-regular.svg';
import Eye from '../../img/eye-solid.svg';


const CustomerPage = () => {

    const navigate = useNavigate();

    const handleCustomer = ()=>{
        navigate('/')
    }
  return (
    <div className='customerPage'>
    <div className="table_header">
    <p className='title'>Customer Table</p>
        <div className="user">
            <img src={User} alt="User" width="18px"/>
            <p>Richard Trecartin</p>
        </div>
        <div className="customer">
        <p><span onClick={handleCustomer}>My Orders</span> <span className='underline'>My Customers</span></p>
        </div>
        <div className="add_customer">
            <button className='add_btn'>+ Add new customer</button>
        </div>
    </div>
    <div className="table_section">
        <table>
            <thead>
                <tr>
                    <th>Customer <br/>ID</th>
                    <th>Customer Name</th>
                    <th>Customer E-mail</th>
                    <th>Contact No.</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Zip code</th>
                    <th>Date Added</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1245</td>
                    <td>Annie's Sports</td>
                    <td>Arkham@erthy.com</td>
                    <td>6343293245</td>
                    <td>US</td>
                    <td>Texas</td>
                    <td>New york</td>
                    <td>627363</td>
                    <td>27/09/2022</td>
                    <td>
                        <div className='action_icon'>
                            <img src={Eye} alt="Eye" width="18px"/>
                            <img src={Pen} alt="Pen" width="18px"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1245</td>
                    <td>Annie's Sports</td>
                    <td>Arkham@erthy.com</td>
                    <td>6343293245</td>
                    <td>US</td>
                    <td>Texas</td>
                    <td>New york</td>
                    <td>627363</td>
                    <td>27/09/2022</td>
                    <td>
                        <div className='action_icon'>
                            <img src={Eye} alt="Eye" width="18px"/>
                            <img src={Pen} alt="Pen" width="18px"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1245</td>
                    <td>Annie's Sports</td>
                    <td>Arkham@erthy.com</td>
                    <td>6343293245</td>
                    <td>US</td>
                    <td>Texas</td>
                    <td>New york</td>
                    <td>627363</td>
                    <td>27/09/2022</td>
                    <td>
                        <div className='action_icon'>
                            <img src={Eye} alt="Eye" width="18px"/>
                            <img src={Pen} alt="Pen" width="18px"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1245</td>
                    <td>Annie's Sports</td>
                    <td>Arkham@erthy.com</td>
                    <td>6343293245</td>
                    <td>US</td>
                    <td>Texas</td>
                    <td>New york</td>
                    <td>627363</td>
                    <td>27/09/2022</td>
                    <td>
                        <div className='action_icon'>
                            <img src={Eye} alt="Eye" width="18px"/>
                            <img src={Pen} alt="Pen" width="18px"/>
                        </div>
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
</div>
  )
}

export default CustomerPage;