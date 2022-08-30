import { ERROR_LAB_TEST, GET_LAB_TEST, LOADING_LAB_TEST } from "./actionType"

export const getLabTest=(payload)=>{
    return {
        type:GET_LAB_TEST,
        payload
    }
}

<<<<<<< HEAD

=======
>>>>>>> 9f2b111 (.)
export const loadingLabTest=()=>{
    return {
        type:LOADING_LAB_TEST,
    }
}
export const ErrorLabTest=()=>{
    return {
        type:ERROR_LAB_TEST,
    }
}
