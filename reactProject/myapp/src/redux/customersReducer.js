import { v4 as uuidv4 } from 'uuid';

const initialValue = [
    { id: '1', fname: 'Mike', lname: 'Lep', city: 'Rehovot' },
    { id: '2', fname: 'John', lname: 'Cohen', city: 'Ashdod' },
    { id: '3', fname: 'John', lname: 'Doe', city: 'test' },
];

function customersReducer(state = initialValue, action) {
    switch (action.type) {
        case 'UPDATE_CUSTOMER': {
            const index = state.findIndex((c) => c.id === action.payload.id);
            state.splice(index, 1, action.payload);
            return state;
        }
        case 'DELETE_CUSTOMER': {
            const updatedState = state.filter((c) => action.payload !== c.id);
            return updatedState;
        }
        default:
            return state;
    }
}

export default customersReducer;
