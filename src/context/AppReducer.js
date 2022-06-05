import { TYPES } from "./AppTypes";

// initial State 
export const initailState = {
    loading: true,
    blogs: [],
    error: ''
}

const AppReducer = (state = initailState, action) => {
    switch (action.type) {
        case TYPES.FETCH_BLOG_REQUEST:
            return { ...state, loading: true }
        case TYPES.FETCH_BLOG_SUCCESS:
            return { ...state, loading: false, blogs: action.payload }
        case TYPES.FETCH_BLOG_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case TYPES.POSTED_BLOG:
            return {...state, blogs: [...state.blogs, action.payload]}
        default: return state;
    }
}

export default AppReducer;