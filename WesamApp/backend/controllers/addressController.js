const Address = require('../models/Address');
const Contact = require('../models/Contact');

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve addresses' });
  }
};

// Add a new address
exports.addAddress = async (req, res) => {
  const { address, city, zip } = req.body;
  try {
    const newAddress = await Address.create({ address, city, zip });
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add address' });
  }
};

// Edit an existing address
exports.editAddress = async (req, res) => {
  const { id } = req.params;
  const { address, city, zip } = req.body;
  try {
    const updatedAddress = await Address.update(
      { address, city, zip },
      { where: { id } }
    );
    if (updatedAddress[0] === 0) {
      res.status(404).json({ error: 'Address not found' });
    } else {
      res.json({ message: 'Address updated successfully' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update address' });
  }
};

// Delete an address
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Address.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Address deleted successfully' });
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete address' });
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

// Add a new contact
exports.addContact = async (req, res) => {
  const { name, phone, email, address, city, zip } = req.body;
  try {
    const newContact = await Contact.create({ name, phone, email, address, city, zip });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add contact' });
  }
};

// Edit an existing contact
exports.editContact = async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, address, city, zip } = req.body;
  try {
    const updatedContact = await Contact.update(
      { name, phone, email, address, city, zip },
      { where: { id } }
    );
    if (updatedContact[0] === 0) {
      res.status(404).json({ error: 'Contact not found' });
    } else {
      res.json({ message: 'Contact updated successfully' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update contact' });
  }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Contact.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Contact deleted successfully' });
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};