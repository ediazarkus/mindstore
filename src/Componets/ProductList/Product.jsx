import React, { useEffect, useState } from 'react';
import { CardProductContainer, ProductContainer } from './ProductStyles';

import CardProduct from '../CardProduct/CardProduct';
import fetchData from '../../Services/ProductsService';
import Spinner from '../Spinner/Spinner';

const Product = ({ searchTerm, addToCart }) => {
  const [originalData, setOriginalData] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setOriginalData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setData(originalData);
      return;
    }
    const filteredResults = originalData
      ? originalData.filter(
          (item) =>
            item &&
            item.title &&
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
    setData(filteredResults);
  }, [searchTerm, originalData]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductContainer>
            <CardProductContainer>
              {data.map((product) => (
                <CardProduct
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </CardProductContainer>
          </ProductContainer>
        </>
      )}
    </>
  );
};

export default Product;
