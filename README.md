## Cloud-Based E-Commerce Platform

Develop an e-commerce platform that uses cloud NoSQL databases, serverless functions etc to provide an ecommerce platform for people to list, sell and buy products.

# Strategically Architectured E-Commerce Platform: A Multi-tiered Application Approach

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository showcases a robust, cloud-native e-commerce platform developed with React, leveraging the power of AWS cloud services. The platform supports a wide range of functionalities, including product listing across various categories, shopping cart management, and a streamlined checkout process.

To provide a comprehensive understanding of the integration process, we have curated a series of insightful articles hosted on Hashnode:

- [Intro to the blog](https://sridurgeshv.hashnode.dev/how-to-build-a-strategic-e-commerce-platform-a-complete-guide)
- [AWS Cognito - Part 1](https://sridurgeshv.hashnode.dev/enhancing-security-with-aws-cognito-in-your-react-application-part-1)
- [AWS Cognito - Part 2](https://sridurgeshv.hashnode.dev/user-authentication-with-aws-cognito-part-2)
- [Leveraging Amazon S3 for Order Data Management](https://hashnode.com/edit/clwhldln4000209kybvmwghk5)

## Features

- Display products from diverse categories (e.g., men's clothing, jewelry, electronics)
- Add products to the shopping cart
- View and modify cart items
- Proceed to checkout for secure online purchases

## Architecture 
![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/Ecommerce-site.png)

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
![Alt Text]()


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

## License
This project is licensed under the MIT License.   
