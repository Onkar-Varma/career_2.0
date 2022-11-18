import React from 'react';
import Pen from '../../img/pen-to-square-regular.svg';
import Check from '../../img/check.svg';
import Download from '../../img/download-solid.svg';

const CreateNewCustomer = () => {
  return (
    <div className='customerDetails'>
      <h2>Customer Details</h2>
      <form>
        <div>
          <input type="text" placeholder='Customer Name' />
          <input type="text" placeholder='Company Name' /><br/>
          <input type="text" placeholder='Contact no.' />
          <input type="email" placeholder='Contact e-mail' />
        </div>

        <div>
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
        <article className='billing_container'>
        <div className="billingAddress">
            <h3>Billing Address <input type="sumit" className='add_btn' value='Add new address' /></h3>
            <div className="billingInput">
              <input type="email" placeholder='Attention' />
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
            <textarea className='billingAddress' name="" id="" cols="30" rows="10" placeholder='Type an Address here.....' />
            <div>
            <label htmlFor="addBilling">
              <input type="checkbox" id='addBilling' />
              Add as a Billing address
            </label>
            <label htmlFor="default">
              <input type="checkbox" id='default' />
              Mark as Default
            </label>
            <input type="submit" className='add_btn' value='Save' />
            <input type="submit" className='add_btn' value='Cancel' />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Attention</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Zip code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className='shipping_container'>
        <div className="shippingAddress">
            <h3>Shipping Address <input type="sumit" className='add_btn' value='Add new address' /></h3>
            <div className="shippingInput">
              <input type="email" placeholder='Attention' />
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
            <textarea className='shippingAddress' name="" id="" cols="30" rows="10" placeholder='Type an Address here.....' />
            <div>
            <label htmlFor="addShipping">
              <input  type="checkbox" id='addShipping' />
              Add as a Billing address
            </label>
            <label htmlFor="default">
              <input type="checkbox" id='default' />
              Mark as Default
            </label>
            <input type="submit" className='add_btn' value='Save' />
            <input type="submit" className='add_btn' value='Cancel' />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Attention</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Zip code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Annie McKenzie</td>
                <td>15352, Ranson Rd, Arlington,<br />
                  Texas, 647462</td>
                <td>+19864327465</td>
                <td>United States</td>
                <td>Texas</td>
                <td>Houston</td>
                <td>647462</td>
                <td>
                  <div className='action_icon'>
                    <img src={Check} alt="Eye" width="18px" />
                    <img src={Pen} alt="Pen" width="18px" />
                    <img src={Download} alt="Download" width="18px" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </article>

        <div className="submitDetail">
          <div className="note_container">
            <h4>Note:</h4>
            <textarea className='note' id="note" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" className='submitBtn' />
        </div>
      </form>
    </div>
  )
}

export default CreateNewCustomer