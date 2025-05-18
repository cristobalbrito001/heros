import { typesAuth } from "../types/types";

const authReducer= (state , action) => {
    switch (action.type) {
        case typesAuth.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case typesAuth.logout:
            return {
                logged: false,
                user: null,
            };
        default:
            return state;
    }
}
export{
    authReducer
}