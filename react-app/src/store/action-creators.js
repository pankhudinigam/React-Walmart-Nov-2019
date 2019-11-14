import Axios from 'axios';

export const createINCaction = () => {
    return {
        type: "INC_CTR"
    }
}

export const createDECRaction = () => {
    return {
        type: "DECR_CTR"
    }
}

export const createFetchaction = () => {

    return async (dispatch) => {

        const response = await Axios.get(process.env.REACT_APP_CUSTOMERS_URL);
        dispatch({
            type: "FETCH_CUSTOMERS",
            payload: response.data

        });

    }

}