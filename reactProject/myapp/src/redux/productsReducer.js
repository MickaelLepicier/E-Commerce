import { v4 as uuidv4 } from 'uuid';

const hogwartsCastleIMG =
    'https://www.lego.com/cdn/cs/set/assets/blt08668e770aaef16e/71043_alt1.jpg?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1';
const lionKnightsCastleIMG =
    'https://www.lego.com/cdn/cs/set/assets/blt5af1787acb6144b4/10305_alt1.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1';
const greatPyramidOfGizaIMG =
    'https://www.lego.com/cdn/cs/set/assets/blt5669621edd1b1595/21058_alt1.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1';

const initialValue = [
    {
        id: '1',
        img: hogwartsCastleIMG,
        name: 'Hogwarts Castle',
        price: 470,
        quantity: 20,
    },
    {
        id: '2',
        img: lionKnightsCastleIMG,
        name: 'Lion Knights Castle',
        price: 400,
        quantity: 40,
    },
    {
        id: '3',
        img: greatPyramidOfGizaIMG,
        name: 'Great Pyramid of Giza',
        price: 130,
        quantity: 100,
    },
];

function productsReducer(state = initialValue, action) {
    switch (action.type) {
        case 'UPDATE_PRODUCT': {
            const index = state.findIndex((p) => action.payload.id === p.id);
            state.splice(index, 1, action.payload);
            return state;
        }
        case 'DELETE_PRODUCT': {
            const updatedState = state.filter((p) => action.payload !== p.id);
            return updatedState;
        }
        default:
            return state;
    }
}

export default productsReducer;
