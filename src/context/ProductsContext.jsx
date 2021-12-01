import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        await fetch("../src/Productos.json")
        .then((response) => JSON.stringify(response , console.log('La respuesta es: ',response)))
        .then((data) => setProducts(data));
      } catch (error) {
        console.log('esto es un error' , error)
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={products ? products : null}>
      {children}
    </ProductContext.Provider>
  );
};