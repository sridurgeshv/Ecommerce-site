# Empowering E-Commerce: A Cloud-Native Platform for a Seamless Online Shopping Experience

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Summary

This repository showcases a robust, cloud-native e-commerce platform developed with React and leveraging the power of AWS cloud services. Designed to enhance the online shopping experience, this platform supports a wide range of functionalities, including product listing across various categories, shopping cart management, and a streamlined checkout process. This project aims to deliver a scalable, secure, and user-friendly solution for modern e-commerce needs.

To provide a comprehensive understanding of the integration process, we have curated a series of insightful articles hosted on Hashnode:

- [Intro to the Project](https://sridurgeshv.hashnode.dev/how-to-build-a-strategic-e-commerce-platform-a-complete-guide)
- [AWS Cognito - Part 1](https://sridurgeshv.hashnode.dev/enhancing-security-with-aws-cognito-in-your-react-application-part-1)
- [AWS Cognito - Part 2](https://sridurgeshv.hashnode.dev/user-authentication-with-aws-cognito-part-2)
- [Leveraging Amazon S3 for Order Data Management](https://sridurgeshv.hashnode.dev/data-handling-via-amazon-s3)
- [Email Notifications with AWS SES](https://sridurgeshv.hashnode.dev/optimizing-e-commerce-communication-implementing-email-notifications-with-aws-ses)

## Business Problem, Skills, and Methodology
### Business Problem
In the competitive e-commerce landscape, businesses require a scalable and secure platform that offers a seamless shopping experience to customers. The need to efficiently manage product listings, shopping carts, and checkout processes is paramount to driving sales and customer satisfaction.

### Skills Utilized
- **React**: For creating a dynamic and responsive user interface.
- **AWS Services**: Including AWS Cognito for authentication, Amazon S3 for data management, and AWS SES for email notifications.
- **JavaScript and JSX**: To efficiently combine HTML and JavaScript for building complex interfaces.

### Methodology
This project follows a cloud-native approach, utilizing the full potential of AWS services to ensure scalability, security, and reliability. The development process involves integrating various AWS services to handle authentication, data management, and communication seamlessly.

## Platform Features
- **Diverse Product Categories**: Display products from various categories, such as men's clothing, jewelry, and electronics.
- **Shopping Cart Management**: Add products to the shopping cart and modify cart items.
- **Secure Checkout**: A streamlined and secure online checkout process.
  
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

> [!NOTE]
> The code files lack several essential components that need to be incorporated following the methodology outlined in the blog post.

## Usage
- **Browse Products**: Navigate through different categories of products.
- **Product Details**: Click on a product to view details and add it to the shopping cart.
- **Cart Management**: View and modify items in the shopping cart.
- **Checkout**: Proceed to checkout and complete the purchase.

## Contributing
Contributions are welcome! Please open issues and pull requests for any improvements or bug fixes.

## Screenshots
- Main Page

![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/main-page.png)

- Register Page

![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/register.png)

- Invoice Page

![Alt Text](https://github.com/sridurgeshv/Ecommerce-site/blob/main/images/invoice.png)

## Testing : 

[Click here to test the platform](https://shopping-store-24137.web.app)

## Future Enhancements

This section provides a glimpse into the exciting features planned for this e-commerce platform:

1. **Integrated Payment Gateway:** Streamlining the checkout process with a secure and reliable payment gateway will be a top priority. This will allow users to seamlessly complete their purchases using their preferred payment methods.
2. **Location-Based Services:** Say goodbye to manual address entry! Map integration will streamline the checkout process.
3. **Enhanced User Interface:** I'm constantly revamping the user interface (UI) for a more intuitive and user-friendly shopping experience. This may involve incorporating design elements that improve navigation, product browsing, and overall user experience.

## FAQ

**1. Why React.JS?**

ANS: – React allows you to create a web application that can update and render efficiently without reloading the entire page. React's use of JSX enables the combination of HTML with JavaScript, making it easier to build complex interfaces.

**2. Why AWS Cognito service?**

ANS: – AWS Cognito provides a scalable and secure way to manage user authentication, including sign-up and sign-in functionality. It supports social identity providers like Google and Facebook, and offers secure access to AWS resources.

**3. How can we add additional attributes along with a Username and password?**

ANS: – Additional attributes can be added to the attributeList while calling the signup method of the AWS Cognito User Pool.

**4. Can we verify the user using an email link instead of OTP?**

ANS: – Yes, users can be verified using an email link. This can be configured in the Cognito User Pool under General Settings -> Message Customization -> Verification Type, changing the verification type from code to link.

**5. Can I access Cloud Cart on my mobile device??**

ANS: – We highly advise using our platform from a desktop computer for a better shopping experience.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
