import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'




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
      {/* <button >Submit</button> */}
      {/* <div className="actions">
           <button style={{cursor:"pointer"}} className="sign-tx" onClick={()=>{
              // this should be the thing that triggers the save data to the user form
            }} type="submit" >
                Submit
            </button>
        </div> */}
    </form>
  );
};

const UserDetails = (props) => {
  const info = props.info
  return (
    <div className='user-details'>
      <div className={props.isGenerating ? "back disabled" : "back"} onClick={()=>{
        props.closeUserDetails()
      }}>
        <FaArrowLeft /> Back
      </div>
      <div className="container">
        <div className="info">
            User Details


        </div> 
        <ShippingForm />

        <div className="actions">
            {info && <button style={{cursor:"pointer"}} className="sign-tx" onClick={()=>{
              props.openReciept(info)
            }}>
                Confirm Details
            </button>}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
