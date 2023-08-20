import './CustomersTable.scss';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CustomersTable(props) {
    const { data, navigate, searchData } = props;
    const { products } = data;

    const [fields, setFields] = useState([]);

    function createFields() {
        if (
            searchData.productId ||
            searchData.customerId ||
            searchData.purchaseId
        ) {
            const productId = searchData.productId;
            const customerId = searchData.customerId;
            const purchaseId = searchData.purchaseId;

            // just productId
            if (productId && !customerId && !purchaseId) {
                selectors.$onProductId(data, productId, setFields);
                return;
            }

            // just customerId
            if (!productId && customerId && !purchaseId) {
                selectors.$onCustomerId(data, customerId, setFields);
                return;
            }

            // just purchaseId
            if (!productId && !customerId && purchaseId) {
                selectors.$onPurchaseId(data, purchaseId, setFields);
                return;
            }

            // productId & customerId
            if (productId && customerId && !purchaseId) {
                selectors.$onProductIdAndCustomerId(
                    data,
                    productId,
                    customerId,
                    setFields
                );
                return;
            }

            // productId & purchaseId
            if (productId && !customerId && purchaseId) {
                selectors.$onProductIdAndPurchaseId(
                    data,
                    productId,
                    purchaseId,
                    setFields
                );
                return;
            }

            // customerId & purchaseId
            if (!productId && customerId && purchaseId) {
                selectors.$onCustomerIdAndPurchaseId(
                    data,
                    customerId,
                    purchaseId,
                    setFields
                );
                return;
            }

            // all together
            if (productId && customerId && purchaseId) {
                selectors.$onAllThreeIds(
                    data,
                    productId,
                    customerId,
                    purchaseId,
                    setFields
                );
                return;
            }
        }

        selectors.$offAllThreeIds(data, setFields);
        return;
    }

    useEffect(() => {
        createFields(props);
    }, [searchData]);

    function onNavigate(productName) {
        const product = products.find((p) => p.name === productName);
        const productId = product.id;

        sessionStorage['data'] = productId;
        navigate('/edit-product-page');
    }

    function renderField(field, index) {
        return (
            <div key={index} className="field-wrapper">
                <div className="customer-field"> {field.customerName}</div>
                <button
                    className="products-field"
                    onClick={() => onNavigate(field.productName)}
                >
                    {field.productName}
                </button>
                <div className="dates-field">{field.purchaseDate}</div>
            </div>
        );
    }

    function renderFields() {
        if (fields.length === 0) {
            return <div> Nothing found </div>;
        }

        return (
            <div>
                <div className="table-labels">
                    <label>Customers : </label>
                    <label>Products : </label>
                    <label>Dates : </label>
                </div>
                {fields.map((field, index) => renderField(field, index))}
            </div>
        );
    }

    return <div className="table-wrapper">{renderFields()}</div>;
}

function CustomersTableContainer(props) {
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    const products = useSelector(selectors.$products);
    const customers = useSelector(selectors.$customers);
    const purchases = useSelector(selectors.$purchases);
    const data = { products, customers, purchases };

    return (
        <CustomersTable
            state={state}
            data={data}
            navigate={navigate}
            searchData={props.searchData}
        />
    );
}

export default CustomersTableContainer;
