const initialValue = [
    { id: '1', customerId: '1', productId: '1', date: '1.4.2023' },
    { id: '2', customerId: '3', productId: '1', date: '2.4.2020' },
    { id: '3', customerId: '2', productId: '2', date: '3.4.2020' },
    { id: '4', customerId: '1', productId: '2', date: '4.4.2020' },
    { id: '5', customerId: '2', productId: '3', date: '5.4.2020' },
];

function purchasesReducer(state = initialValue, action) {
    switch (action.type) {
        case 'ADD_PURCHASE': {
            return [...state, action.payload];
        }
        case 'DELETE_PRODUCT': {
            const updatedState = state.filter(
                (p) => action.payload !== p.productId
            );
            return updatedState;
        }
        case 'DELETE_CUSTOMER': {
            const updatedState = state.filter(
                (c) => action.payload !== c.customerId
            );
            return updatedState;
        }
        default:
            return state;
    }
}

export default purchasesReducer;
