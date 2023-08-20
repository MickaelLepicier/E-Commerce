import Product from './Product';

function Products(props) {
    const { products } = props;

    function renderProduct(product) {
        return <Product key={product.id} product={product} />;
    }

    function renderProducts() {
        return products.map((product) => renderProduct(product));
    }

    return <div className="Products-wrapper">{renderProducts()}</div>;
}

export default Products;
