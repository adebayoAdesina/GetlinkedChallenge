import axios from "axios";
import { categories_url } from "../../API/api";

export const CategoriesListAction = () => async (dispatch) => {
  const categories = await axios.get(categories_url());

  dispatch({
    type: "CATEGORIES",
    payload: { categories: categories.data },
  });
};
