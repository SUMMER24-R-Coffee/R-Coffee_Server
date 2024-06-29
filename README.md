# R'Coffee Server

## About

R'Coffee Server is the backend component of the R-Coffee application, designed following the MVC (Model-View-Controller) architecture. This project is developed using Node.js, Express.js and Bootstrap 4 custom from [Breeze-Free-Bootstrap-Admin-Template](https://github.com/BootstrapDash/Breeze-Free-Bootstrap-Admin-Template) , providing APIs for the app and CRUD operations for management and authentication. Read more about [Frontend](https://github.com/SUMMER24-R-Coffee/R-Coffee_App)

## Features

- **Product Management**: CRUD operations for coffee products.
- **Order Management**: Handle customer orders and transactions.
- **Database Integration**: MySQL for data persistence.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SUMMER24-R-Coffee/R-Coffee_Server.git
    cd R-Coffee_Server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary configurations:
    ```
    # MySQL
    DB_HOST=your_mysql_host
    DB_USER=your_mysql_user
    DB_NAME=your_mysql_database
    DB_PASSWORD=your_mysql_password
    DB_PORT=3306

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    # Email
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

4. Run the server:
    ```bash
    npm start
    ```

## Usage

- Access the server at `http://localhost:3000`.
## Screens Shot
| |
|---|
|![Login](./public/assets/images/readme/login.png)<h4 align="center">Login</h4> |
|![dasboard](./public/assets/images/readme/hm1.png)<h4 align="center">Dasboard</h4> |
|![product](./public/assets/images/readme/prd.png)<h4 align="center">Product</h4> |
|![Detail Product](./public/assets/images/readme/epr.png)<h4 align="center">Detail Product</h4> |
|![Order](./public/assets/images/readme/ord.png)<h4 align="center">Order</h4> |
|![Order](./public/assets/images/readme/ord1.png)<h4 align="center">Order Detail</h4> |
|![Order](./public/assets/images/readme/ord2.png)<h4 align="center">Order Detail</h4> |
|![Order](./public/assets/images/readme/ord3.png)<h4 align="center">Order Detail</h4> |
|![Order](./public/assets/images/readme/ord4.png)<h4 align="center">Order Detail</h4> |
|![Baner](./public/assets/images/readme/baner.png)<h4 align="center">Baner</h4> |
|![voucher](./public/assets/images/readme/voucher.png)<h4 align="center">Voucher</h4> |
|![Emp](./public/assets/images/readme/emp1.png)<h4 align="center">Employee</h4> |
|![Add](./public/assets/images/readme/adv.png)<h4 align="center">Modal Add</h4> |
|![Edit](./public/assets/images/readme/edv.png)<h4 align="center">Modal Edit</h4> |
|![Delete](./public/assets/images/readme/del.png)<h4 align="center">Modal Delete</h4> |

## Contact

For any inquiries or feedback, please reach out to [datlowashere@gmail.com](mailto:datlowashere@gmail.com).
### Note
This is not the final version, this application will be further improved in the future.
