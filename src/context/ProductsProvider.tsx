import {
  createContext,
  ReactElement,
  useEffect,
  useState,
  useRef,
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

  const effectRun = useRef(true);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      return await fetch(
        "https://apiautomationplayground.pythonanywhere.com/api/shop/products/",
      )
        .then((res) => res.json())
        .then((res) => {
          return res;
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
    };

    if (effectRun.current) {
      fetchProducts().then((products) => setProducts(products));
    }

    return () => {
      effectRun.current = false;
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
