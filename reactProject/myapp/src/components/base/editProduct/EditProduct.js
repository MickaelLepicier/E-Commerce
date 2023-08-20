import { Json } from '../Json/Json';
import { selectors } from '../../../redux/selectors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToggle } from 'react-use';
import CustomersList from '../../customers/CustomersList';
import './EditProduct.scss'


function EditProduct(props) {
    const { productData } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, toggle] = useToggle(false);

    const [product, setProduct] = useState(productData);

    function onChange(e) {
        selectors.$onChange(product, e, setProduct);
    }

    function Update() {
        const action = selectors.$createAction('UPDATE_PRODUCT', product);
        sessionStorage['edit-page'] = '';
        navigate('/products');
        dispatch(action);
    }

    function Delete() {
        const action = selectors.$createAction('DELETE_PRODUCT', product.id);
        sessionStorage['edit-page'] = '';
        navigate('/products');
        dispatch(action);
    }

    function rendersButtons() {
        return selectors.$rendersButtons(Update, Delete);
    }

    function renderCustomersList() {
        if (!show) {
            return null;
        }
        return <CustomersList productData={product} />;
    }

    return (
        <div className="Edit-wrapper">
            
            <Json data={product} onChange={onChange} />
            {rendersButtons()}
            <button onClick={toggle}>Customers who bought that product</button>
            {renderCustomersList()}
        </div>
    );
};

export default EditProduct;
