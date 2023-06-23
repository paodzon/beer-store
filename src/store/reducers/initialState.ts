const INITIAL_STATE = {
  auth: {
    user: null,
    isLoading: false,
    loggingInUserError: '',
    signingUpUserError: '',
  },
  cart: {
    products: [],
    productsError: '',
    cartLength: 0,
  }
};

export default INITIAL_STATE;