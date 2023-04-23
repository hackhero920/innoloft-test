import getConfig from "../config";
import { getProduct, getTrl, editProduct } from "../services/productService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Actions
const SET_PRODUCT = "SET_PRODUCT";
const SET_CATEGORY = "SET_CATEGORY";
const SET_BUSINESSMODEL = "SET_BUSINESSMODEL";
const SET_CONFIG = "SET_CONFIG";
const SET_TRL = "SET_TRL";

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

export const setConfig = (data) => ({
  type: SET_CONFIG,
  payload: data,
});

export const setTrl = (trl) => ({
  type: SET_TRL,
  payload: trl,
});

// Thunks
export const fetchProduct = () => async (dispatch) => {
  try {
    const result = await getProduct();
    dispatch(setProduct(result.data));
  } catch (error) {
    toast.error("Something went wrong! Try again.");
    console.error(error);
  }
};

export const fetchTrl = () => async (dispatch) => {
  try {
    const result = await getTrl();
    dispatch(setTrl(result.data));
  } catch (error) {
    toast.error("Something went wrong! Try again.");
    console.error(error);
  }
};

export const saveProduct = (product) => async (dispatch) => {
  try {
    await editProduct(product);
    toast.success("Saved Successfully!");
    dispatch(setProduct(product));
  } catch (error) {
    toast.error("Something went wrong! Try again.");
    console.error(error);
  }
};

export const fetchConfig = () => async (dispatch) => {
  try {
    const data = await getConfig();
    dispatch(setConfig(data));
  } catch (error) {
    toast.error("Something went wrong! Try again.");
    console.error(error);
  }
};

// Reducer
const initialState = {
  product: {},
  category: "",
  description: "",
  model: "",
  config: {},
  trl: [],
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

    case SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };

    case SET_TRL:
      return {
        ...state,
        trl: action.payload,
      };

    default:
      return state;
  }
}
