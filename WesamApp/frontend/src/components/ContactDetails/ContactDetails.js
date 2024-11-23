import React, { useState } from 'react';
import './ContactDetails.css';

function ContactDetails() {
  const [addresses, setAddresses] = useState([]);
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [newAddress, setNewAddress] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingAddress, setEditingAddress] = useState('');

  const handleAddAddress = () => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
    }
  };

  const handleEditAddress = index => {
    setEditingIndex(index);
    setEditingAddress(addresses[index]);
  };

  const handleUpdateAddress = () => {
    const updatedAddresses = [...addresses];
    updatedAddresses[editingIndex] = editingAddress;
    setAddresses(updatedAddresses);
    setEditingIndex(null);
    setEditingAddress('');
  };

  const handleDeleteAddress = index => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const handleUpdateContactInfo = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="path_to_plush_toy_image.jpg" alt="Plush Toy" />
      </div>
      <p className="description">Plush toy with a happy face and a small green flower.</p>

      <div>
        <h3>Manage Addresses</h3>
        {addresses.map((address, index) => (
          <div key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingAddress}
                  onChange={e => setEditingAddress(e.target.value)}
                />
                <button onClick={handleUpdateAddress}>Update</button>
              </>
            ) : (
              <>
                <span>{address}</span>
                <button onClick={() => handleEditAddress(index)}>Edit</button>
                <button onClick={() => handleDeleteAddress(index)}>Delete</button>
              </>
            )}
          </div>
        ))}
        <input
          type="text"
          value={newAddress}
          onChange={e => setNewAddress(e.target.value)}
          placeholder="Add new address"
        />
        <button onClick={handleAddAddress}>Add</button>
      </div>

      <div>
        <h3>Contact Information</h3>
        <input
          type="text"
          value={contactInfo.email}
          onChange={e => handleUpdateContactInfo('email', e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={contactInfo.phone}
          onChange={e => handleUpdateContactInfo('phone', e.target.value)}
          placeholder="Phone"
        />
      </div>
    </div>
  );
}

export default ContactDetails;