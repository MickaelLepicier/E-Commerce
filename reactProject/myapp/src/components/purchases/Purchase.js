import './Purchase.scss';
import { useToggle } from 'react-use';
import { Json } from '../base/Json/Json';
import NewPurchase from './NewPurchase';

function Purchase(props) {
    const { purchase } = props;
    const [show, toggle] = useToggle(false);

    function renderNewPurchase() {
        if (!show) {
            return null;
        }

        return <NewPurchase customerId={purchase.customerId} />;
    }

    return (
        <div className="Purchase-wrapper">
            <Json data={purchase} />
            <button onClick={toggle}>Buy new product</button>
            {renderNewPurchase()}
        </div>
    );
}

export default Purchase;
