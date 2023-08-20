import './Search.scss';
import { useState } from 'react';
import { Select } from '../Select/Select';

function Search(props) {
    const {products,customers,purchases} = props.data

    const [productId, setProductId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [purchaseId, setPurchaseId] = useState('');
    
    const firstOptionP = 'Select Product'
    const firstOptionC = 'Select Customer'
    const firstOptionD = 'Select Date'
     
    function onSearch(){
        const searchedIds ={productId,customerId,purchaseId}
 
        props.search(searchedIds)
        props.show(true)
    }

    return <div className="wrap-search">
                <Select options={customers} firstOption={firstOptionC} onChange={setCustomerId}/>
                <Select options={products} firstOption={firstOptionP} onChange={setProductId}/>
                <Select options={purchases} firstOption={firstOptionD} onChange={setPurchaseId}/>
                <button onClick={onSearch}>Search</button>
    </div>;
    
}

export default Search;
