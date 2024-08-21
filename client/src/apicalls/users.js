const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/users/login",
      payload
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/users/get-user-info"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
