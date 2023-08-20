import { useSelector } from 'react-redux';
import Purchase from './Purchase';
import { selectors } from '../../redux/selectors';

function Purchases(props) {
    const { purchases } = props;

    function renderPurchase(purchase) {

        return <Purchase key={purchase.id} purchase={purchase} />;
    }

    function renderPurchases() {
        return purchases.map((purchase) => renderPurchase(purchase));
    }

    return <div className="Purchases">{renderPurchases()}</div>;
}

function PurchasesContainer(props) {
    const { productId } = props;

    const state = useSelector((state) => state);
    const purchases = selectors.$purchasesForProduct(state, productId);
    return <Purchases purchases={purchases} />;
}

export default PurchasesContainer;
