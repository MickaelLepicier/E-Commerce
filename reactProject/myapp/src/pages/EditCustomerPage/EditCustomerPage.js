import './EditCustomerPage.scss';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import EditCustomer from '../../components/base/editCustomer/EditCustomer';

function EditCustomerPage(props) {
    const { customer } = props;

    return (
        <div className="Edit-wrapper">
            <EditCustomer customerData={customer} />
        </div>
    );
}

function EditCustomerPageContainer() {
    const customerId = sessionStorage['data'];
    sessionStorage['edit-page'] = 'edit-page';

    const customers = useSelector(selectors.$customers);
    const customer = customers.find((c) => customerId === c.id);

    return <EditCustomerPage customer={customer} />;
}

export default EditCustomerPageContainer;
