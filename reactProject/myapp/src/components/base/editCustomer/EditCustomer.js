import { Json } from '../Json/Json';
import { selectors } from '../../../redux/selectors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToggle } from 'react-use';
import ProductsList from '../../products/ProductsList';

function EditCustomer(props) {
    const { customerData } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, toggle] = useToggle(false);

    const [customer, setCustomer] = useState(customerData);

    function onChange(e) {
        selectors.$onChange(customer, e, setCustomer);
    }

    function Update() {
        const action = selectors.$createAction('UPDATE_CUSTOMER', customer);
        sessionStorage['edit-page'] = '';
        navigate('/customers');
        dispatch(action);
    }

    function Delete() {
        const action = selectors.$createAction('DELETE_CUSTOMER', customer.id);
        sessionStorage['edit-page'] = '';
        navigate('/');
        dispatch(action);
    }

    function rendersButtons() {
        return selectors.$rendersButtons(Update, Delete);
    }

    function renderProductsList() {
        if (!show) {
            return null;
        }
        return <ProductsList customerData={customer} />;
    }

    return (
        <div>
            <Json data={customer} onChange={onChange} />
            {rendersButtons()}
            <button onClick={toggle}>Products that the Customer bought </button>
            {renderProductsList()}
        </div>
    );
}

export default EditCustomer;
