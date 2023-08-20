import './Product.scss';
import { Json } from '../base/Json/Json';
import Purchases from '../purchases/Purchases';
import { useToggle } from 'react-use';

function Product(props) {
    const { product } = props;
    const [show, toggle] = useToggle(false);

    function renderPurchases() {
        if (!show) {
            return null;
        }

        return <div ><Purchases productId={product.id} /></div>;
    }

    return (
        <div className="Product-wrapper">
            <Json data={product} />
            <button className="btn" onClick={toggle}>Customers who bought that product</button>
            {renderPurchases()}
        </div>
    );
}

export default Product;
