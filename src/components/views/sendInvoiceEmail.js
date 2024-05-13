import AWS from 'aws-sdk';
import Invoice from '../services/Invoice'; // Import the Invoice component from the same directory
import ReactDOMServer from 'react-dom/server';

// Configure AWS with your credentials and region
AWS.config.update({
      accessKeyId: 'AKIA2KFSGM3U6BXOBSU2',
      secretAccessKey: 'WKcps235lqKKMtJ5OLSypE4kDsvwJkmvGOqVBRrR',
      region: 'us-east-1',
    });

const ses = new AWS.SES();

const sendInvoiceEmail = async (to, orderDetails) => {
  try {
    // Generate the invoice HTML using ReactDOMServer.renderToString
    const invoiceHTML = ReactDOMServer.renderToString(
      <Invoice orderDetails={orderDetails} isEmailRendering={true} />
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