import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/products');
  
      if (!Array.isArray(data)) {
        throw new Error('Data is not in the correct format.'); 
      }
      return data;
    } catch (error) {
      throw new Error('An error occurred: Failed to fetch products.'); 
    }
  };
  
export const useProducts = () => {
  return useQuery('products', fetchProducts);
};

const addProduct = async (product) => {
    const { data } = await axios.post('http://localhost:3000/api/products', product);
    return data;
  };

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};
