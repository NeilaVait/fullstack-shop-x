import axios from 'axios';

const catBaseUrl = 'http://localhost:4000/api/shop/categories';
const itemBaseUrl = 'http://localhost:4000/api/shop/items';
const usersBaseUrl = 'http://localhost:4000/api/shop/users';
const cartBaseUrl = 'http://localhost:4000/api/shop/cart';

export const getCategories = async () => {
  try {
    const categoriesResult = await axios.get(catBaseUrl);
    return categoriesResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const getItemsByCategory = async (catTitle, catId) => {
  try {
    const itemsResult = await axios.get(`http://localhost:4000/api/shop/items/category/${catId}`);
    return itemsResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const getItems = async () => {
  try {
    const itemsResult = await axios.get(itemBaseUrl);
    return itemsResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSingleItem = async (singleItemId) => {
  try {
    const itemsResult = await axios.get(itemBaseUrl + '/' + singleItemId);
    return itemsResult.data;
  } catch (err) {
    console.log(err);
  }
};
export const getUsers = async () => {
  try {
    const users = await axios.get(usersBaseUrl);
    return users.data;
  } catch (err) {
    console.log(err);
  }
};

// add to cart
export const addToCart = async (userId, shopItemObj) => {
  try {
    const ats = await axios.post(`${cartBaseUrl}/${userId}`, shopItemObj);
    return ats.data;
  } catch (err) {
    throw new Error(err);
  }
};

// get all cart items
export const getCartItems = async (userId) => {
  // console.log('trying to get all cart items');
  const ats = await axios.get(`${cartBaseUrl}/${userId}`);
  return ats.data;
};

// update cartitem qty
export const sendUpdateQty = async (userId, cartItemId, newQty) => {
  // console.log('sendUpdateQty');
  // console.log(userId, cartItemId, newQty);

  try {
    const ats = await axios.put(`${cartBaseUrl}/${userId}`, { cartItemId, newQty });
    // console.log('updatedcart', ats.data.saveResult.cart);
    // console.table(ats.data.saveResult.cart);
    return true;
  } catch (err) {
    console.log('klaida sendUpdateQty funkcijoj', err.message);
  }
};

export const removeItem = async (userId, itemId) => {
  console.log({ userId, itemId });
  try {
    const deleteResult = await axios.put(`${cartBaseUrl}/delete/${userId}`, { itemId });
    return deleteResult.data;
  } catch (err) {}
};

export const getCartCount = async (userId) => {
  // send get rq to get cart count
  // console.log('send get rq to get cart count');
  const ats = await axios.get(`${cartBaseUrl}/count/${userId}`);
  return ats.data;
};
