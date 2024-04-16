import React from 'react';
import './ContactPage.css';

// Define Input component
const Input = ({ id, placeholder, type }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

// Define Textarea component
const Textarea = ({ id, placeholder }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="min-h-[150px] resize-y"
    />
  );
};

function ContactForm() {
  return (
    <div className="bg-gray-200 py-8 px-4 rounded-md">
      <div className="space-y-6">
        <div className="container py-6 space-y-2">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h1>
          </div>
          <div className="grid max-w-lg gap-6">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium tracking-tighter">Name : </label>
                <Input id="name" placeholder="Enter your name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium tracking-tighter" htmlFor="email">
                  Email :
                </label>
                <Input id="email" placeholder="Enter your email address" type="email" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium tracking-tighter" htmlFor="subject">
                  Subject : 
                </label>
                <Input id="subject" placeholder="Enter your subject" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium tracking-tighter" htmlFor="message">
                Message : 
              </label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>            
            <div className="button-container">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

function FAQs() {
  return (
    <div className="bg-blue-100 border border-blue-400 rounded-md p-4">
      <div className="container py-6 space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">FAQs</h2>
        <div className="space-y-4">
          <details>
            <summary class="font-medium list-none cursor-pointer outline-none">How do I reset my password?</summary>
            <p>
              Please visit the login page and click on the "Forgot Password" link. You will receive an email with
              instructions on how to reset your password.
            </p>
          </details>
          <details>
            <summary class="font-medium list-none cursor-pointer outline-none">
              How can I update my account information?
            </summary>
            <p>
              You can update your account information by logging into your account and clicking on the "My Profile" tab.
              From there, you can update your contact information, shipping address, and payment methods.
            </p>
          </details>
          <details>
            <summary class="font-medium list-none cursor-pointer outline-none">
              Can I return an item for a refund?
            </summary>
            <p>
              Yes, we accept returns for a refund within 30 days of purchase. The item must be in its original condition
              and packaging. Please contact our customer service team to initiate the return process.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="border border-blue-400 rounded-md p-4">
      <div className="container py-6 space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Support
        </h2>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-bold">Contact Us</h3>
            <p className="text-sm text-gray-500 leading-none peer-rtl">
              If you have any questions or need assistance, you can contact us
              using the information below:
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Customer Service</h3>
            <p className="text-sm text-gray-500 leading-none peer-rtl">
              If you have any questions or need assistance, you can contact our
              customer service team during our business hours:
            </p>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-bold">Email</h3>
            <p>support@example.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Phone</h3>
            <p>1-800-123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <ContactForm />
      <FAQs />
      <Support />
    </>
  );
}

export default ContactPage;
