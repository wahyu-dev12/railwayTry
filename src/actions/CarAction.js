import axios from "axios";
import { filterData } from '../Utils/getData';

export const GET_LIST_CAR = "GET_LIST_CAR";

export function getListCar(url, regex) {

    return (dispatch) => {
        // Set default state
        dispatch({
            type: GET_LIST_CAR,
            payloads: {
                loading: true,
                data: false,
                errMsg: false
            }
        })

        console.log('dsipath di set ulang');

        if (url !== undefined && regex !== undefined) {
            // GET data to endpoint
            axios({
                method: "GET",
                url: url,
                timeout: 20000
            }).then(result => {
                // Re declare dispatch data
                dispatch({
                    type: GET_LIST_CAR,
                    payloads: {
                        loading: false,
                        data: filterData(result.data, regex),
                        errMsg: false
                    }
                })
            }).catch(err => {
                dispatch({
                    type: GET_LIST_CAR,
                    payloads: {
                        loading: false,
                        data: false,
                        errMsg: err.message
                    }
                })
            })
        }else{
            dispatch({
                type: GET_LIST_CAR,
                payloads: {
                    loading: false,
                    data: false,
                    errMsg: false
                }
            })
        }
    }
}