import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import './CustomersList.scss'

function CustomersList(props) {
    const { productData } = props;

    const state = useSelector((state) => state);

    const customers = selectors.$purchasesForProduct(state, productData.id);

    const renderCustomersList = () => {
        return customers.map((c) => {
            return (
                <div key={c.id} className="wrap-Customer" >
                    <Link to={'/edit-customer-page'}> {c.customerName}</Link>               
                </div>
            );
        });
    };

    return <div className="wrap-Customers-List">{renderCustomersList()}</div>;
}

export default CustomersList;
