import './PurchasesPage.scss';
import { selectors } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Search from '../../components/base/Search/Search';
import CustomersTable from '../../components/customers/CustomersTable';

function PurchasesPage(props) {
  
    const [searchData, setSearchData] = useState([]);
    const [show, setShow] = useState(false);
  
    function renderTable() {
        if (!show) {
            return null;
        }
        return <CustomersTable searchData ={searchData} />;
    }

    return (
        <div className="wrap-purchases-page">
            <h2>Search for Data of a specific customer , product or date: </h2>
            <Search data={props} search={setSearchData} show={setShow} />
            {renderTable()}
        </div>
    );
}

function PurchasesPageContainer() {

    const products = useSelector(selectors.$products);
    const customers = useSelector(selectors.$customers);
    const purchases = useSelector(selectors.$purchases);

    return (
        <div className="Purchases-wrapper">
            <PurchasesPage
                products={products}
                customers={customers}
                purchases={purchases}
            />
        </div>
    );
}

export default PurchasesPageContainer;
