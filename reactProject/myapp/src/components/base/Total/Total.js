import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors';

import './Total.scss';

function Total(props) {
    const { total } = props;

    return <div className="Total-wrapper">
        <div>Total purchases:</div>
        <div className='total'>{total}$</div>
        </div>;
}

function TotalContainer() {
    const total = useSelector(selectors.$totalAmount);
    return <Total total={total} />;
}

export default TotalContainer;
