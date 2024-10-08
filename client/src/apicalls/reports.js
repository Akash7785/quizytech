const { default: axiosInstance } = require(".");

// add report
export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/reports/add-report",
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
      "https://quizytech-akash7785s-projects.vercel.app/api/reports/get-all-reports-by-user"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
