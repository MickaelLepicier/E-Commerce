import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import EditProduct from '../../components/base/editProduct/EditProduct';

function EditProductPage(props) {
    const { product } = props;
    return (
        <div className="Edit-wrapper">
            <EditProduct productData={product} />
        </div>
    );
}

function EditProductPageContainer() {
    const productId = sessionStorage['data'];
    sessionStorage['edit-page'] = 'edit-page';

    const products = useSelector(selectors.$products);
    const product = products.find((p) => productId === p.id);

    return <EditProductPage product={product} />;
}

export default EditProductPageContainer;
