import './NewPurchase.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { Select } from '../base/Select/Select';

export const NewPurchase = (props) => {
    const { products } = props;

    const [productId, setProductId] = useState('');
    const [msg, setMsg] = useState('');
    const firstOption = 'Select Product';

    function onBuy() {
        if (!productId) {
            setMsg('Please select product');
            return;
        }
        setMsg('');
        props.onBuy(productId);
    }

    return (
        <div className="NewPurchase-wrapper" onClick={props.onClick}>
            <Select
                options={products}
                firstOption={firstOption}
                onChange={setProductId}
            />
            <button onClick={onBuy}>Buy</button>
            <br />
            <div>{msg}</div>
        </div>
    );
};

export const NewPurchaseContainer = (props) => {
    const dispatch = useDispatch();
    const { customerId } = props;
    const products = useSelector(selectors.$products);

    function onBuy(productId) {
        const id = selectors.$createId();
        const date = selectors.$createDate();

        const payload = {
            id,
            customerId,
            productId,
            date,
        };

        const action = {
            type: 'ADD_PURCHASE',
            payload,
        };

        dispatch(action);
    }

    return <NewPurchase products={products} onBuy={onBuy} />;
};

export default NewPurchaseContainer;
