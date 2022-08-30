<<<<<<< HEAD
import { ERROR_LAB_TEST, GET_LAB_TEST,LOADING_LAB_TEST } from "./actionType";
=======
import { ERROR_LAB_TEST, GET_LAB_TEST, LOADING_LAB_TEST } from "./actionType";
>>>>>>> 9f2b111 (.)

const init = {
  loading: false,
  error: false,
  LabTest: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_LAB_TEST:
      return {
        ...state,
        loading: false,
        error: false,
        LabTest: payload,
<<<<<<< HEAD
      }; 
=======
      };
>>>>>>> 9f2b111 (.)
    case LOADING_LAB_TEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ERROR_LAB_TEST:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
