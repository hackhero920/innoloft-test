import { getProduct } from "../services/productService";

// Actions
const SET_PRODUCT = "SET_PRODUCT";
const SET_CATEGORY = "SET_CATEGORY";
const SET_BUSINESSMODEL = "SET_BUSINESSMODEL";

// Action creators
export const setProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setBusinessModel = (model) => ({
  type: SET_BUSINESSMODEL,
  payload: model,
});

// Thunks
export const fetchProduct = () => async (dispatch) => {
  const result = await getProduct();
  dispatch(setProduct(result.data));
};

export const editProduct = (product) => async (dispatch) => {
  try {
    await editProduct(product.id, product);
    dispatch(setProduct(product));
  } catch (error) {
    console.log(error);
  }
};

// Reducer
const initialState = {
  product: {},
  category: "",
  model: "",
};

export default function productViewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SET_BUSINESSMODEL:
      return {
        ...state,
        model: action.payload,
      };

    default:
      return state;
  }
}
