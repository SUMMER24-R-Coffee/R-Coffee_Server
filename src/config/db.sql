CREATE TABLE IF NOT EXISTS Category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Banner (
    banner_id INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    product_img VARCHAR(255),
    description TEXT,
    price DOUBLE NOT NULL,
    category_id INT,
    is_available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

CREATE TABLE IF NOT EXISTS Users (
    email_user VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    phone VARCHAR(15),
    user_img VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Address (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(255) NOT NULL,
    email_user VARCHAR(255),
    FOREIGN KEY (email_user) REFERENCES Users(email_user)
);

CREATE TABLE IF NOT EXISTS Basket (
    basket_id INT PRIMARY KEY AUTO_INCREMENT,
    quantity INT NOT NULL,
    product_id INT,
    email_user VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    FOREIGN KEY (email_user) REFERENCES Users(email_user)
);

CREATE TABLE IF NOT EXISTS Voucher (
    voucher_id INT PRIMARY KEY AUTO_INCREMENT,
    voucher_code VARCHAR(255) NOT NULL,
    percent DOUBLE NOT NULL,
    valid_date DATE NOT NULL,
    exp_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS `Order` (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATETIME NOT NULL,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME,
    payment_method VARCHAR(50),
    total_amount DOUBLE NOT NULL,
    discount_amount DOUBLE,
    status_order ENUM('pending', 'delivering', 'cancel', 'delivered') NOT NULL DEFAULT 'pending',
    address_id INT,
    voucher_id INT,
    basket_id INT,
    email_user VARCHAR(255),
    FOREIGN KEY (address_id) REFERENCES Address(address_id),
    FOREIGN KEY (voucher_id) REFERENCES Voucher(voucher_id),
    FOREIGN KEY (basket_id) REFERENCES Basket(basket_id),
    FOREIGN KEY (email_user) REFERENCES Users(email_user)
);

CREATE TABLE IF NOT EXISTS Rating (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    rating INT NOT NULL,
    review TEXT,
    product_id INT,
    email_user VARCHAR(255),
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    FOREIGN KEY (email_user) REFERENCES Users(email_user)
);

CREATE TABLE IF NOT EXISTS Favorite (
    favorite_id INT PRIMARY KEY AUTO_INCREMENT,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id VARCHAR(255),
    product_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(email_user),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

CREATE TABLE IF NOT EXISTS Notification (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    message TEXT,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE,
    email_user VARCHAR(255),
    order_id INT,
    FOREIGN KEY (email_user) REFERENCES Users(email_user),
    FOREIGN KEY (order_id) REFERENCES `Order`(order_id)
);

CREATE TABLE IF NOT EXISTS Employee (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    password VARCHAR(255) NOT NULL,
    emp_name VARCHAR(255) NOT NULL,
    emp_gender VARCHAR(10),
    emp_img VARCHAR(255),
    emp_role ENUM('manager', 'employee') NOT NULL,
    emp_phone VARCHAR(15)
);
