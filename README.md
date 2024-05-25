# Empowering E-Commerce: A Cloud-Native Platform for a Seamless Online Shopping Experience

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository showcases a robust, cloud-native e-commerce platform developed with React, leveraging the power of AWS cloud services. The platform supports a wide range of functionalities, including product listing across various categories, shopping cart management, and a streamlined checkout process.

To provide a comprehensive understanding of the integration process, we have curated a series of insightful articles hosted on Hashnode:

- [Intro to the blog](https://sridurgeshv.hashnode.dev/how-to-build-a-strategic-e-commerce-platform-a-complete-guide)
- [AWS Cognito - Part 1](https://sridurgeshv.hashnode.dev/enhancing-security-with-aws-cognito-in-your-react-application-part-1)
- [AWS Cognito - Part 2](https://sridurgeshv.hashnode.dev/user-authentication-with-aws-cognito-part-2)
- [Leveraging Amazon S3 for Order Data Management](https://sridurgeshv.hashnode.dev/data-handling-via-amazon-s3)
- [Email Notifications with AWS SES](https://sridurgeshv.hashnode.dev/optimizing-e-commerce-communication-implementing-email-notifications-with-aws-ses)

## Features

- Display products from diverse categories (e.g., men's clothing, jewelry, electronics)
- Add products to the shopping cart
- View and modify cart items
- Secure online checkout process
  
## Architecture 
![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/final-architecture.png)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ecommerce-website.git
   ```
2. Navigate to the project directory:
   ```bash
    cd ecommerce-website
   ```
3. Install dependencies:
   ```bash
      npm install
   ```

4. Start the development server:
    ```bash
      npm start
    ```

5. Open your browser and navigate to http://localhost:3000 to view the website.

## Usage
- Browse through different categories of products.
- Click on a product to view details and add it to the shopping cart.
- View and modify the items in the shopping cart.
- Proceed to checkout and complete the purchase.

## Contributing
Contributions are welcome! Please open issues and pull requests for any improvements or bug fixes.

## Screenshots
- Main Page
![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/main-page.png)

- Register Page
![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/register.png)

## Testing : 
[Click here to test the platform](https://ecommerce-store-61124.web.app/)

## FAQ
**1. Why React.JS?**

ANS: – React allows you to create a web application that can update and render efficiently without reloading the entire page. React's use of JSX enables the combination of HTML with JavaScript, making it easier to build complex interfaces.

**2. Why AWS Cognito service?**

ANS: – AWS Cognito provides a scalable and secure way to manage user authentication, including sign-up and sign-in functionality. It supports social identity providers like Google and Facebook, and offers secure access to AWS resources.

**3. How can we add additional attributes along with a Username and password?**

ANS: – Additional attributes can be added to the attributeList while calling the signup method of the AWS Cognito User Pool.

**4. Can we pass the email address in the username field?**

ANS: – Yes, you can use email addresses as usernames by passing the email address in the username attribute during the signup process.

**5. Can we verify the user using an email link instead of OTP?**

ANS: – Yes, users can be verified using an email link. This can be configured in the Cognito User Pool under General Settings -> Message Customization -> Verification Type, changing the verification type from code to link.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
