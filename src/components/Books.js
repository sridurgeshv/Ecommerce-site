import React from 'react';
import './Books.css';
 
  const Badge = ({children}) => {
    return (
      <div className="bg-gray-200 p-2 rounded text-sm">
        {children}
      </div>
    ); 
  };
  
  const Card = ({children}) => {
    return <div className="bg-white p-4 shadow">{children}</div>; 
  };
  
  const CardContent = ({children}) => {
    return <div>{children}</div>;
  };
  

const Books = ({ addToCart }) => {

  const books = [
    { id: 1, name: "Book 1", imageUrl: "book1.jpg", discount: 15 },
    { id: 2, name: "Book 2", imageUrl: "book2.jpg", discount: 10 },
    { id: 3, name: "Book 3", imageUrl: "book3.jpg", discount: 20 },
  ];

  return (
    <div className="bg-white">
      <div className="flex">
        {/* Category Filters */}
        <div className="w-3/4 p-4">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4">
            {books.map((book) => (
              <Card key={book.id} className="w-full">
                <CardContent>
                  {/* Apply card-image class to ensure consistent image height */}
                  <img src={book.imageUrl} className="card-image" />
                  <h3>{book.name}</h3>
                  <Badge variant="secondary">{book.discount}% off</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;