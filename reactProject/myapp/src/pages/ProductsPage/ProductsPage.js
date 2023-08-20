import './ProductsPage.scss';
import { useSelector } from 'react-redux';
import Products from '../../components/products/Products';
import { selectors } from '../../redux/selectors';

function ProductsPage(props) {
    const { products } = props;

    return (
        <div className="Products-wrapper">
            <Products products={products} />
        </div>
    );
}

function ProductsPageContainer() {
    const products = useSelector(selectors.$products);
    sessionStorage['edit-page'] = '';
    
    return <ProductsPage products={products} />;
}

export default ProductsPageContainer;
