import React from 'react';
import Delete from '../../img/delete.svg'

const CreateNewOrder = () => {
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
        <div className="selectProduct">
          <h3>Select products</h3>
          <div className="search">
            <input type="search" className='searchInput' placeholder='Search by Style, SKU, ASIN, or Product name' />
            <input type="submit" className='add_btn' value='Search' />
          </div>
        </div>
        <div className="items">
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
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>400</td>
                <td>
                  <span className='price'>400</span>
                  <input type="submit" className="add_btn" value='+ Add to order' />
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
                  <span className='price'>300</span>
                  <input type="submit" className="add_btn" value='+ Add to order' />
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
                  <span className='price'>400</span>
                  <input type="submit" className="add_btn" value='+ Add to order' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="orderDetals">
          <h3>Final order details</h3>
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
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>400</td>
                <td>
                <div className="action_icon">
                    <span className='price'>400</span>
                    <img src={Delete} alt="Delete" width='18' />
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
                    <img src={Delete} alt="Delete" width='18' />
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
                    <img src={Delete} alt="Delete" width='18' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="deliveryDetails">
            <h3>Delivery Details</h3>
            <div className='details_content'>
              <label htmlFor="date"> Expected delivery date
                <input type="date" id='shipping1' />
              </label>
              <label htmlFor="shipping1"> Shipping Method
                <select>
                  <option value="FedEx">FedEx</option>
                </select>
              </label>
              <input type="text" placeholder='Account/Shipper No.' />
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

export default CreateNewOrder