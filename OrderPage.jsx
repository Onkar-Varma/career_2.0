import React from 'react';
import { useNavigate } from 'react-router-dom';
import './orderpage.css';
import User from '../../img/user-solid.svg';
import Pen from '../../img/pen-to-square-regular.svg';
import Eye from '../../img/eye-solid.svg';
import Download from '../../img/download-solid.svg';

const OrderPage = () => {

    const naviagte = useNavigate();

    const handleOrder = ()=>{
        naviagte('/customer')
    }
  return (
    <div className='orderPage'>
        <div className="table_header">
        <p className='title'>Order Listing Page</p>
            <div className="user">
                <img src={User} alt="User" width="18px"/>
                <p>Richard Trecartin</p>
            </div>
            <div className='order'><p><span className='underline'>My Orders</span><span onClick={handleOrder}>My Customers</span></p></div>
            <div className="date">
                <p>Order date: <span>12/01/2022 - 23/03/2022</span></p>
                <button className='add_btn'>+ Place order</button>
            </div>
        </div>
        <div className="table_section">
            <table>
                <thead>
                    <tr>
                        <th>Merchant <br/>Order No.</th>
                        <th>Brand</th>
                        <th>Order Date</th>
                        <th>Customer Name</th>
                        <th>Exp. devlivery date</th>
                        <th>Products</th>
                        <th>Ordered quality</th>
                        <th>Confimed quality</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1245</td>
                        <td>Vizari</td>
                        <td>14/03/2022</td>
                        <td>Annie's Sports</td>
                        <td>27/09/2022</td>
                        <td>5</td>
                        <td>174</td>
                        <td>159</td>
                        <td>Confirmed</td>
                        <td>
                            <div className='action_icon'>
                                <img src={Eye} alt="Eye" width="18px"/>
                                <img src={Pen} alt="Pen" width="18px"/>
                                <img src={Download} alt="Download" width="18px"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1245</td>
                        <td>Vizari</td>
                        <td>14/03/2022</td>
                        <td>Annie's Sports</td>
                        <td>27/09/2022</td>
                        <td>5</td>
                        <td>174</td>
                        <td>159</td>
                        <td>Confirmed</td>
                        <td>
                            <div className='action_icon'>
                                <img src={Eye} alt="Eye" width="18px"/>
                                <img src={Pen} alt="Pen" width="18px"/>
                                <img src={Download} alt="Download" width="18px"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1245</td>
                        <td>Vizari</td>
                        <td>14/03/2022</td>
                        <td>Annie's Sports</td>
                        <td>27/09/2022</td>
                        <td>5</td>
                        <td>174</td>
                        <td>159</td>
                        <td>Confirmed</td>
                        <td>
                            <div className='action_icon'>
                                <img src={Eye} alt="Eye" width="18px"/>
                                <img src={Pen} alt="Pen" width="18px"/>
                                <img src={Download} alt="Download" width="18px"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1245</td>
                        <td>Vizari</td>
                        <td>14/03/2022</td>
                        <td>Annie's Sports</td>
                        <td>27/09/2022</td>
                        <td>5</td>
                        <td>174</td>
                        <td>159</td>
                        <td>Confirmed</td>
                        <td>
                            <div className='action_icon'>
                                <img src={Eye} alt="Eye" width="18px"/>
                                <img src={Pen} alt="Pen" width="18px"/>
                                <img src={Download} alt="Download" width="18px"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderPage