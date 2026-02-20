import {
  createContext,
  ReactElement,
  useEffect,
  useState,
} from "react";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const initState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await fetch(
          "https://apiautomationplayground.pythonanywhere.com/api/shop/products/",
          { signal: controller.signal },
        );
        const data: ProductType[] = await res.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
