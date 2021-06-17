import { ProductItem } from "../ProductItem";
import { useItems } from "../../../hooks/useItems";

import './styles.scss';

export function ProductList() {
    const { products } = useItems();

    return (
            <section className="product-list">
                <ul>
                    {products.map((product, index) => <ProductItem key={index} product={product} />
                    )}
                </ul>
            </section>
    )
}