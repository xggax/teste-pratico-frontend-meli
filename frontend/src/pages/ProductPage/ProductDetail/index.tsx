interface ProductDetailProps {
    description?: string;
}

export function ProductDetail({description}: ProductDetailProps) {
    return (
        <div>Product: {description}</div>
    );
}