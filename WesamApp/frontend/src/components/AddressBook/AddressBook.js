import React, { useState } from 'react';
import './AddressBook.css';

const AddressBook = () => {
    const [addresses, setAddresses] = useState([]);
    const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });
    const [currentAddress, setCurrentAddress] = useState({ address: '', city: '', zip: '' });
    const [editIndex, setEditIndex] = useState(null);

    const handleAddOrEditAddress = () => {
        if (editIndex !== null) {
            const updatedAddresses = addresses.map((addr, index) => index === editIndex ? currentAddress : addr);
            setAddresses(updatedAddresses);
            setEditIndex(null);
        } else {
            setAddresses([...addresses, currentAddress]);
        }
        setCurrentAddress({ address: '', city: '', zip: '' });
    };

    const handleEditClick = (index) => {
        setCurrentAddress(addresses[index]);
        setEditIndex(index);
    };

    const handleDeleteClick = (index) => {
        const updatedAddresses = addresses.filter((_, idx) => idx !== index);
        setAddresses(updatedAddresses);
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setCurrentAddress({ ...currentAddress, [name]: value });
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="path_to_plush_toy_image.jpg" alt="Plush Toy" />
            </div>
            <p className="description">Plush toy with a happy face and a small green flower.</p>
            
            <div>
                <h3>Manage Addresses</h3>
                <input type="text" name="address" placeholder="Address" value={currentAddress.address} onChange={handleAddressChange} />
                <input type="text" name="city" placeholder="City" value={currentAddress.city} onChange={handleAddressChange} />
                <input type="text" name="zip" placeholder="ZIP Code" value={currentAddress.zip} onChange={handleAddressChange} />
                <button onClick={handleAddOrEditAddress}>{editIndex !== null ? 'Edit Address' : 'Add Address'}</button>
                <ul>
                    {addresses.map((addr, index) => (
                        <li key={index}>
                            {addr.address}, {addr.city}, {addr.zip}
                            <button onClick={() => handleEditClick(index)}>Edit</button>
                            <button onClick={() => handleDeleteClick(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Update Contact Information</h3>
                <input type="text" name="name" placeholder="Name" value={contactInfo.name} onChange={handleContactChange} />
                <input type="text" name="phone" placeholder="Phone" value={contactInfo.phone} onChange={handleContactChange} />
                <input type="email" name="email" placeholder="Email" value={contactInfo.email} onChange={handleContactChange} />
            </div>
        </div>
    );
};

export default AddressBook;