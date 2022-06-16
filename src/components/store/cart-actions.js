import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const respone = await fetch(
        'https://lalalalalalalala-64dd5-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );
      if (!respone.ok) {
        throw new Error('could not fetch cart data!');
      }

      const data = await respone.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.repleceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'success...',
          message: 'Fetching cart  data !',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Fetching cart  data failerd!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://lalalalalalalala-64dd5-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
