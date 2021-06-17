import { Link } from 'react-router-dom'
import shippingImg from '../../../assets/ic_shipping.png'

interface ProductItemProps {
    product: {
        condition: string,
        free_shipping: boolean,
        id: string,
        picture: string,
        price: {
            amount: string,
            currency: string,
            decimals: number
        }
        sold_quantity: number,
        title: string,
    }
}
export function ProductItem(props: ProductItemProps) {
    return (
        <>
            <hr />
            <li>
                <Link to={`/${props.product?.id}`}><img src={`${props.product?.picture}`} alt="product" /></Link>
                <div>
                    <div className="item-price">
                        <Link to={`/${props.product?.id}`}><strong>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(Number(props.product?.price?.amount))}</strong></Link>
                        {props.product?.free_shipping && <img src={shippingImg} alt="shipping"></img>}
                    </div>

                    <div className="item-city">city</div>

                    <p>{props.product?.title}</p>
                </div>
            </li>
        </>
    )
}