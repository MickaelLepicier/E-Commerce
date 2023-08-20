import './ProductsList.scss'
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { Link } from 'react-router-dom';

function ProductsList(props) {
    const { customerData } = props;

    const state = useSelector((state) => state);

    const products = selectors.$productsForCustomer(state, customerData.id);

    const renderProductsList = () => {
        return products.map((p) => {
            return (
                <div key={p.id} className="wrap-Products-List">
                    <Link to={'/edit-product-page'}> {p.productName}</Link>
                </div>
            );
        });
    };

    return <div>{renderProductsList()}</div>;
}

export default ProductsList;
