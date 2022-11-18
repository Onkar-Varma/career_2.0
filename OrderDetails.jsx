import React from 'react';
import './details.css';
import Pen from '../../img/pen-to-square-regular.svg';

const OrderDetails = () => {
  return (
    <div className='customerDetails'>
      <h2>Customer Details</h2>
      <form>
        <div>
          <input type="text" placeholder='Customer ID' />
          <input type="text" placeholder='Customer Name' />
          <input type="text" placeholder='Company Name' />
        </div>

        <div>
          <input type="email" placeholder='Contact e-mail' />
          <select>
            <option value="country">Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          <select>
            <option value="State">State</option>
            <option value="country">Maharashtra</option>
            <option value="India">Delhi</option>
          </select>
          
          <select>
            <option value="City">City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Pune</option>
          </select>
          <input type="email" placeholder='zip code' />
        </div>
        <div className="address">
          <div className='billing'>
            <label htmlFor="billing">Billing Address </label>
            <textarea name="" id="billing" cols="30" rows="10"></textarea></div>
          <div className='shipping'>
            <label htmlFor="shipping">Shipping Address
            </label>
            <textarea name="" id="shipping" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="items">
        <h2>Order Items</h2>
          <table>
            <thead>
              <tr>
                <th>product Name</th>
                <th>SKU</th>
                <th>Style No.</th>
                <th>Style</th>
                <th>Color</th>
                <th>Size</th>
                <th>UPC</th>
                <th>Quantity Ordered</th>
                <th>Confirm Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>VZSE93303-8</td>
                <td>VZSE93303</td>
                <td>CLASSICO</td>
                <td></td>
                <td></td>
                <td></td>
                <td>400</td>
                <td>
                <div className="action_icon">
                    <span className='price'>400</span>
                    <img src={Pen} alt="Pen" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>300</td>
                <td>
                <div className="action_icon">
                    <span className='price'>400</span>
                    <img src={Pen} alt="Pen" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>650</td>
                <td>
                <div className="action_icon">
                    <span className='price'>400</span>
                    <img src={Pen} alt="Pen" width="18px" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="salesDetails">
          <div>
          <h2>Sales Representatives details</h2>
            <input type="text" placeholder='Customer Name' />
            <input type="text" placeholder='Company Name' />
            <input type="email" placeholder='Contact e-mail' />
            <input type="number" placeholder='Contact No.' />
          </div>
          <div className="deliveryDetails">
            <h2>Delivery Details</h2>
          <div className='details_content'>
          <label htmlFor="date"> Expected delivery date
            <input type="date" id='date'/>
            </label>
            <label htmlFor="shipping1"> Shipping Method
            <select>
            <option value="FedEx">FedEx</option>
          </select>
            </label>
            <input type="text" placeholder='Account/Shipper No.'/>
          </div>
          </div>
          <div className="submitDetail">
          <input type="submit" className='submitBtn' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default OrderDetails