const { default: axiosInstance } = require(".");

// add report
export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_BASE_URL}/api/reports/add-report`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get all reports by user
export const getAllReportsByUser = async () => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_BASE_URL}/api/reports/get-all-reports-by-user`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
