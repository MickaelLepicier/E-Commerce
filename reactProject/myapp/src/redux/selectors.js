import { v4 as uuidv4 } from 'uuid';

const $products = (state) => state.products;
const $customers = (state) => state.customers;
const $purchases = (state) => state.purchases;

const $totalAmount = (state) => {
    const purchases = $purchases(state);
    const products = $products(state);

    let total = 0;

    purchases.map((purchase) => {
        const productId = purchase.productId;
        const product = products.find((product) => product.id === productId);
        total += product.price;
    });

    return total;
};

const $createId = () => {
    return uuidv4();
};

const $createDate = () => {
    const fullDate = new Date();
    const getDay = fullDate.getDay();
    const getMonth = fullDate.getMonth() + 1;
    const getYear = fullDate.getFullYear();

    return `${getDay}.${getMonth}.${getYear}`;
};

const $createAction = (type, payload) => {
    return {
        type: type,
        payload,
    };
};

const $onChange = (data, ev, callback) => {
    const { name, value } = ev.target;
    if (!isNaN(value)) {
        callback({ ...data, [name]: +value });
        return;
    }

    callback({ ...data, [name]: value });
};

const $rendersButtons = (Update, Delete) => {
    return (
        <div className="button-field">
            <button onClick={Update}>Update</button>
            <button onClick={Delete}>Delete</button>
        </div>
    );
};

const $purchasesForProduct = (state, productId) => {
    const purchases = $purchases(state);
    const customers = $customers(state);

    return purchases
        .filter((purchase) => purchase.productId === productId)
        .map((purchase) => {
            const { id, customerId, date } = purchase;
            const customer = customers.find((c) => c.id === customerId);
            const { fname, lname } = customer || {};

            return {
                id,
                customerId,
                customerName: `${fname} ${lname}`,
                date,
            };
        });
};

const $productsForCustomer = (state, customerId) => {
    const purchases = $purchases(state);
    const products = $products(state);

    return purchases
        .filter((purchase) => purchase.customerId === customerId)
        .map((purchase) => {
            const { id, productId, date } = purchase;
            const product = products.find((p) => p.id === productId);
            const { name } = product || {};
            return {
                id,
                productId,
                productName: name,
                date,
            };
        });
};

const $findName = (id, data) => {
    const obj = data.find((obj) => obj.id === id);
    const name = obj.name ? obj.name : `${obj.fname} ${obj.lname}`;
    return name;
};
const $findDate = (id, data) => {
    const obj = data.find((obj) => obj.id === id);
    const date = obj.date;
    return date;
};

const $createObj = (count, customerName, productName, purchaseName) => {
    const obj = {};
    obj.id = `${(count += 1)}`;
    obj.customerName = customerName;
    obj.productName = productName;
    obj.purchaseDate = purchaseName;
    return obj;
};

const $onProductId = (data, productId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const productName = $findName(productId, products);

    purchases
        .filter((purchase) => purchase.productId === productId)
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const customerName = $findName(customerId, customers);
            const purchaseName = date;

            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseName
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onCustomerId = (data, customerId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const customerName = $findName(customerId, customers);

    purchases
        .filter((purchase) => purchase.customerId === customerId)
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const productName = $findName(productId, products);
            const purchaseName = date;

            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseName
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onPurchaseId = (data, purchaseId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const purchaseDate = $findDate(purchaseId, purchases);

    purchases
        .filter((purchase) => purchase.date === purchaseDate)
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const customerName = $findName(customerId, customers);
            const productName = $findName(productId, products);
            const purchaseName = purchaseDate;

            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseName
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onProductIdAndCustomerId = (data, productId, customerId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const productName = $findName(productId, products);
    const customerName = $findName(customerId, customers);

    purchases
        .filter(
            (purchase) =>
                purchase.productId === productId &&
                purchase.customerId === customerId
        )
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const purchaseName = date;

            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseName
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onProductIdAndPurchaseId = (data, productId, purchaseId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const productName = $findName(productId, products);
    const purchaseDate = $findDate(purchaseId, purchases);

    purchases
        .filter(
            (purchase) =>
                purchase.productId === productId &&
                purchase.date === purchaseDate
        )
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const customerName = $findName(customerId, customers);
            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseDate
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onCustomerIdAndPurchaseId = (data, customerId, purchaseId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const customerName = $findName(customerId, customers);
    const purchaseDate = $findDate(purchaseId, purchases);

    purchases
        .filter(
            (purchase) =>
                purchase.customerId === customerId &&
                purchase.date === purchaseDate
        )
        .map((purchase) => {
            const { id, customerId, productId, date } = purchase;
            const productName = $findName(productId, products);
            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseDate
            );
            arr.push(obj);
        });

    callback(arr);
};

const $onAllThreeIds = (data, productId, customerId, purchaseId, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    const customerName = $findName(customerId, customers);
    const productName = $findName(productId, products);
    const purchaseDate = $findDate(purchaseId, purchases);

    purchases
        .filter(
            (purchase) =>
                purchase.productId === productId &&
                purchase.customerId === customerId &&
                purchase.date === purchaseDate
        )
        .map((purchase) => {
            const obj = $createObj(
                count,
                customerName,
                productName,
                purchaseDate
            );
            arr.push(obj);
        });

    callback(arr);
};

const $offAllThreeIds = (data, callback) => {
    const { products, customers, purchases } = data;
    const arr = [];
    let count = 0;

    purchases.map((purchase) => {
        const { id, customerId, productId, date } = purchase;
        const customerName = $findName(customerId, customers);
        const productName = $findName(productId, products);
        const purchaseDate = date;

        const obj = $createObj(count, customerName, productName, purchaseDate);
        arr.push(obj);
    });

    callback(arr);
};

export const selectors = {
    $products,
    $customers,
    $purchases,
    $totalAmount,
    $createId,
    $createDate,
    $createAction,
    $onChange,
    $rendersButtons,
    $purchasesForProduct,
    $productsForCustomer,
    $findName,
    $findDate,
    $createObj,
    $onProductId,
    $onCustomerId,
    $onPurchaseId,
    $onProductIdAndCustomerId,
    $onProductIdAndPurchaseId,
    $onCustomerIdAndPurchaseId,
    $onAllThreeIds,
    $offAllThreeIds,
};
