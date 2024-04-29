

const API_URL = 'https://fakestoreapi.com'; // Base URL of the API

const ProductService = {
  // Function to fetch all products
  getAllProducts: () => {
    return fetch(`${API_URL}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        return [];
      });
  },
};

export default ProductService;
