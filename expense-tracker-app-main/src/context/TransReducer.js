
export const TransactionReducer = ( (state, action) => {
    console.log(state);
    switch(action.type){
        case 'ADD_TRANSACTION': {
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        }

        case 'DELETE_TRANSACTION': {
            return {
                ...state,
                transactions: state.transactions.filter( arr => arr.id !== action.payload)
            }
        }

        default:
            return state;
    }
} )

