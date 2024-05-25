import React from 'react';
import ReactToPrint from 'react-to-print';
import Barcode from 'react-barcode';
import './Invoice.css';

const Invoice = ({ orderDetails, total, isEmailRendering = false }) => {
  const ref = React.createRef();

  if (!orderDetails || !orderDetails.items) {
    return <div>Invalid order details</div>;
  }

  return (
    <div className="container" ref={ref}>
      <div className="row">
        <div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 brcode">
                <Barcode
                  value={`4n%${orderDetails.orderId}+ut%`}
                  width={1}
                  height={50}
                  displayValue={false}
                />
              </div>
              <div className="col-md-8 text-right bbc">
                <h4 style={{ color: '#325aa8' }}>
                  <strong>CloudCart</strong>
                </h4>
                <p>sridurgeshv@gmail.com</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 style={{ color: '#325aa8' }}>INVOICE</h2>
                <h5>Id: {orderDetails.orderId}</h5>
              </div>
            </div>
            <br />
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h5>Products</h5>
                    </th>
                    <th>
                      <h5>Amount</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.items.map((item, index) => (
                    <tr key={index}>
                    <td className="col-md-9">{item.title}</td>
                    <td className="col-md-3">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                  ))}
                  <tr>
                    <td className="text-right">
                      <p>
                        <strong>Total Amount: </strong>
                      </p>
                      <p>
                        <strong>Payable Amount: </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                      <strong>${total}</strong>
                      </p>
                      <p>
                      <strong>${total}</strong>
                      </p>
                    </td>
                  </tr>
                  <tr style={{ color: '#F81D2D' }}>
                    <td className="text-right">
                      <h4>
                        <strong>Total:</strong>
                      </h4>
                    </td>
                    <td className="text-left">
                      <h4>
                      <strong>${total}</strong>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="col-md-12">
                <p>
                  <b>Date :</b> {orderDetails.timestamp}
                </p>
                <br />
                <p>
                  <b>
                    Name: {orderDetails.userData.name} {orderDetails.userData.family_name}
                  </b>
                </p>
                <p>
                  <b>Contact: {orderDetails.userData.phone_number}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isEmailRendering && (
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => ref.current}
          documentTitle={`INVOICE ${orderDetails.orderId}`}
        />
      )}
    </div>
  );
};

export default Invoice;