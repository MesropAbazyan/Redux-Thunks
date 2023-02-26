import { loadCurrentUser } from "./currentUserAPI";

export function currentUserReducer(state = {}, action) {
    if (action.type === 'edit-current-user-name') {
        return {
            ...state,
            name: action.payload.name
        };
    }
    return state;
}

export const initialCurrentUser = {
    name: 'John Smith',
};

export function selectName(state) {
    return state.currentUser.name;
}

export function editName(newName) {
    return {
        type: 'edit-current-user-name',
        payload: {
          name: newName,
        }
    }
}

export function loadUser() {
    return (dispatch, getState) => {
        return loadCurrentUser().then((loadedUser) => {
            dispatch(editName(loadedUser.name));
        });
    };
}
// "dispatch" allows us to send some request 
// for the "reducers" to change the "state".
// "getState" is a function that returns the final "state".

// A function that wraps an "action" is called a "thunk".
// Eg. "loadUser"