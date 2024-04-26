## Cloud-Based E-Commerce Platform

Develop an e-commerce platform that uses cloud NoSQL databases, serverless functions etc to provide an ecommerce platform for people to list, sell and buy products.

# Strategically Architectured E-Commerce Platform: A Multi-tiered Application Approach

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository contains the source code for an e-commerce website built using React. The website includes features such as displaying products from various categories, adding products to a shopping cart, and a checkout process.

## Features

- Display products from different categories such as men's clothing, jewelry, electronics, etc.
- Add products to the shopping cart.
- View and modify the items in the cart.
- Proceed to checkout to complete the purchase.

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

## Screenshots


## Contributing
Contributions are welcome! Feel free to open issues and pull requests.


## FAQ
**1. Why React.JS?**

ANS: – React JS allows you to create a web application that can change the data without reloading the whole web page. React JS uses JSX that allows HTML quoting and uses that HTML tag syntax to render subcomponents.

**2. Why AWS Cognito service?**

ANS: – AWS Cognito service lets you quickly add user sign-up and authentication to your web and mobile application. AWS Cognito also enables you to authenticate users through external identity providers like Google, Microsoft, Facebook, etc. It also provides temporary security credentials to access your app’s backend resources using Amazon API Gateway.

**3. How can we add additional attributes along with a Username and password?**

ANS: – We can add additional attributes with their value in attributeList while calling the signup method of the AWS Cognito User Pool.

**4. Can we pass the email address in the username field?**

ANS: – Yes, we can use the email addresses in the username field instead of giving a separate username. We can archive this goal via passing the email address as username attributes in the signup method of the AWS Cognito User Pool.

**5. Can we verify the user using an email link instead of OTP?**

ANS: – Yes, we can verify the user using an email link instead of OTP. For this, we need to configure the Cognito user pool. General Settings => Message Customization => Verification Type Change verification type Code to Link.

**6. Can we display user information on the page?**

ANS: – Yes, we can display the user information on the page. Once the user is logged in, we will get the user information as a JSON object from the AWS Cognito User Pool. by parsing the JSON object, we can display the user information on the page.

**7. Can we display the logged-in user’s username or email?**

ANS: – Yes, we can display the user information on the page. Once the user is logged in, we will get the user information as a JSON object from the AWS Cognito User Pool. by parsing the JSON object, we can display the user information on the page.

**8. Can we redirect the user to login page after logout?**

ANS: – Yes, we can redirect the user to the login page once the user is logged out from the application. We can use navigate or normal javascript method (window.location.href) 

link part1 :  - https://www.cloudthat.com/resources/blog/aws-cognito-service-with-react-js-application-setup

link part 2 : https://www.cloudthat.com/resources/blog/detailed-guide-to-register-a-user-in-aws-cognito-with-reactjs-part-2

link part 3 : https://www.cloudthat.com/resources/blog/verify-the-user-and-login-using-aws-cognito-with-react-js-part-3 

link-part 4 : https://www.cloudthat.com/resources/blog/aws-cognito-with-react-js-session-and-logout-part-4

## License
This project is licensed under the MIT License.   

# API's 
## Products -- https://5qea0sfnn1.execute-api.us-east-1.amazonaws.com/beta/products
## 
