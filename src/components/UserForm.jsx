import React, { useState }from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import axios from 'axios';
import { connectToDB } from "./db/connect"



// trying to get the mongoose to send the get  request to trigger the db setup
const ShippingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    postcode:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      const response = await axios.post('/api/shipping', formData);
      console.log(response.data); // the server response
      // Clear the form after successful submission
      setFormData({
        name: '',
        address: '',
        city: '',
        country: '',
        postcode:''

      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="userForm">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Postcode:
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

// export default ShippingForm;

const UserForm = (props) => {
  const info = props.info
  return (
    <div className='user-form'>
      <div className='user-form'>
        <div className={props.isGenerating ? "back disabled" : "back"} onClick={()=>{
          props.closeUserForm()
        }}>
          <FaArrowLeft /> Back
        </div>
        <div className="container">
          <div className="info">
              <ShippingForm />
              {/* this should have a form component that takes the shipping details and then pass that data to the minting and either use an hash to store it too the block chain or just add it to a database */}
              
          </div> 
          <div className="actions">
              {info && <button style={{cursor:"pointer"}} className="sign-tx" onClick={()=>{
                props.openUserDetails(info)
              }}>
                  Save
              </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm
