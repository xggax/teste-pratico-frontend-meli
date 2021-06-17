import { ProductDetail } from "./ProductDetail";
import { Breadcrumbs } from "../../components/molecules/Breadcrumbs";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { Header } from "../../components/organisms/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

interface ParamTypes {
    id: string;
}

interface Price {
    amount: string;
    currency: string;
    decimals: number;
}

interface SingleProduct {
    condition: string;
    description: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    sold_quantity: number;
    title: string;
}

export function ProductPage() {
    const [product, setProduct] = useState<SingleProduct>();
    const [categories, setCategory] = useState<string[]>([]);
    let { id } = useParams<ParamTypes>();

    useEffect(() => {
        async function getItem() {
            const { data: { item, categories } } = await api.get(`/${id}`);
            setProduct(item);
            setCategory(categories);
        }
        if (id) getItem();
    }, [id]);

    return (
        <MainTemplate Header={<Header />} Breadcrumbs={<Breadcrumbs categories={categories} />}>
            <ProductDetail description={product?.description}/>
        </MainTemplate >
    )
}