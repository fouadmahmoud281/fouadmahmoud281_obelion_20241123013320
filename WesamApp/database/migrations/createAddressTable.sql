CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(20) NOT NULL
);

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(20) NOT NULL
);

INSERT INTO addresses (address, city, zip) VALUES ('123 Elm St', 'Springfield', '12345');
INSERT INTO addresses (address, city, zip) VALUES ('456 Oak St', 'Shelbyville', '67890');

INSERT INTO contacts (name, phone, email, address, city, zip) VALUES ('John Doe', '555-1234', 'john@example.com', '123 Elm St', 'Springfield', '12345');
INSERT INTO contacts (name, phone, email, address, city, zip) VALUES ('Jane Smith', '555-5678', 'jane@example.com', '456 Oak St', 'Shelbyville', '67890');

SELECT * FROM addresses;
SELECT * FROM contacts;

UPDATE addresses SET address = '789 Maple St' WHERE id = 1;
UPDATE contacts SET phone = '555-9999' WHERE id = 1;

DELETE FROM addresses WHERE id = 2;
DELETE FROM contacts WHERE id = 2;