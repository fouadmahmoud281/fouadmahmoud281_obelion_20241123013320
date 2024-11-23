CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL
);

INSERT INTO contacts (name, phone, email, address, city, zip) VALUES ('John Doe', '1234567890', 'john@example.com', '123 Main St', 'Anytown', '12345');

SELECT * FROM contacts;

UPDATE contacts SET name = 'Jane Doe' WHERE id = 1;

DELETE FROM contacts WHERE id = 1;

INSERT INTO addresses (address, city, zip) VALUES ('456 Elm St', 'Othertown', '67890');

SELECT * FROM addresses;

UPDATE addresses SET city = 'New City' WHERE id = 1;

DELETE FROM addresses WHERE id = 1;