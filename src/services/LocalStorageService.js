

const storeToken = async (value) => {
  try {
    await localStorage.setItem("authToken", value);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    const token = await localStorage.getItem("authToken");
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async (value) => {
  try {
    await localStorage.removeItem(value);
  } catch (error) {
    console.log(error);
  }
};

export { storeToken, getToken, removeToken };
