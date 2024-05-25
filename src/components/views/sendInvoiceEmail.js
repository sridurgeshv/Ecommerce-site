import AWS from 'aws-sdk';
import ReactDOMServer from 'react-dom/server';
import Invoice from '../services/Invoice';

// Configure AWS with your credentials and region
AWS.config.update({
      accessKeyId: 'Your-Access-Key',
      secretAccessKey: 'Your-Secret-Access-Key',
      region: 'Your-region',
    });

const ses = new AWS.SES();

const sendInvoiceEmail = async (to, orderDetails) => {
  try {
    // Calculate the total outside the component
    const total = orderDetails.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);

    // Generate the invoice HTML using ReactDOMServer.renderToString
    const invoiceHTML = ReactDOMServer.renderToString(
      <Invoice orderDetails={orderDetails} total={total} isEmailRendering={true} />
    );

    // Prepare the email parameters
    const params = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Invoice</title>
                </head>
                <body>
                  ${invoiceHTML}
                </body>
              </html>
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Invoice for Order ${orderDetails.orderId}`,
        },
      },
      Source: 'sridurgeshv@gmail.com',
    };

    // Send the email using AWS SES
    await ses.sendEmail(params).promise();
    console.log('Invoice email sent successfully');
  } catch (error) {
    console.error('Error sending invoice email:', error);
  }
};

export default sendInvoiceEmail;
