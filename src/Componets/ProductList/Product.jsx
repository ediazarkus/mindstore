import React, { useEffect, useState } from 'react';
import { CardProductContainer, ProductContainer } from './ProductStyles';

import CardProduct from '../CardProduct/CardProduct';
import fetchData from '../../Services/ProductsService';
import Spinner from '../Spinner/Spinner';

const Product = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductContainer>
            <CardProductContainer>
              {data.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </CardProductContainer>
          </ProductContainer>
        </>
      )}
    </>
  );
};

export default Product;
