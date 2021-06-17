import { createContext, useState, useEffect, ReactNode, useContext, Dispatch, SetStateAction } from "react";
import { api } from "../services/api";

interface Author {
    name: string,
    lastName: string
}

interface Price {
    amount: string;
    currency: string;
    decimals: number;
}

export interface Product {
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    sold_quantity: number;
    title: string;
}

interface Items {
    author: Author;
    categories: string[];
    products: Product[];
    product: Product;
    setProduct: Dispatch<SetStateAction<Product>>;
    search: string;
    setCategories: Dispatch<SetStateAction<string[]>>
    setSearch: Dispatch<SetStateAction<string>>;
}

interface ItemsProviderProps {
    children: ReactNode
}

const ItemsContext = createContext<Items>({} as Items);

export function ItemsProvider({ children }: ItemsProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>({} as Product);
    const [categories, setCategories] = useState<string[]>([]);
    const [author, setAuthor] = useState<Author>({} as Author);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        async function getItems() {
            const { data: { items, categories, author } } = await api.get('', { params: { search } })
            setProducts(items);
            setCategories(categories);
            setAuthor(author);
        }
        async function getItem() {
            const { data: { item, categories, author } } = await api.get(`/${product.id}`)
            setProduct(item);
            setCategories(categories);
            setAuthor(author);
        }
        if (search) getItems();
        if (product) getItem();
    }, [search, product]);

    return (
        <ItemsContext.Provider value={{ author, categories, setCategories, products, product, setProduct, search, setSearch }}>
            {children}
        </ItemsContext.Provider>
    )
}

export function useItems() {
    const context = useContext(ItemsContext)

    return context;
}


