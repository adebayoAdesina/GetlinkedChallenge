const initialState = {
categories :  [],
};
const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CATEGORIES":
        return { ...state, categories: action.payload.categories};
     
      default:
        return { ...state };
    }
  };
  
  export default CategoriesReducer;