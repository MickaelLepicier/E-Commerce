import './CustomersPage.scss';
import CustomersTable from '../../components/customers/CustomersTable';
import { selectors } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Select } from '../../components/base/Select/Select';
import { useEffect, useState } from 'react';
import NewPurchase  from '../../components/purchases/NewPurchase';
import { useToggle } from 'react-use';

function CustomersPage(props) {
const {customersData , purchasesData} = props

const [customerId, setCustomerId] = useState('');
const [msg, setMsg] = useState('');
const [show, setShow] = useToggle(false);

const firstOption = 'Select Customer'

function onBuy() {

    if (!customerId) {
        setMsg('Please choose a customer');
        return;
    }
    setMsg('');
    setShow(true)
}

function renderNewPurchase() {
    if (!show || !customerId) {
        return null;
    }

    return <NewPurchase customerId={customerId} />;
}

const CustomersTableFnc=()=>{
return <CustomersTable searchData={{}} />
}

useEffect(()=>{
    CustomersTableFnc()
},[purchasesData])

    return (
        <div className="CustomerPage-wrapper" >

            {CustomersTableFnc()}
            <div className='newPurchase'>
            <Select options={customersData} firstOption={firstOption} onChange={setCustomerId}/>
            <button onClick={onBuy}>Purchase new product</button>
            <div>{msg}</div>
            {renderNewPurchase()}
            </div>
        </div>
    );
}


function CustomersPageContainer() {
    const customersData = useSelector(selectors.$customers);
    const purchasesData = useSelector(selectors.$purchases);

   return <CustomersPage customersData={customersData} purchasesData={purchasesData} />
}

export default  CustomersPageContainer;
