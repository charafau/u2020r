export default function reducer(state = {
    repos: [],
}, action) {
    console.log("invoking reducer");
    switch (action.type) {

        case "FETCH_REPOS":
            console.log(action.payload);
            return {...state, repos: action.payload.repos};
            break;

    }

    return state;
}