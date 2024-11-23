const Contact = require('../models/Contact');

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