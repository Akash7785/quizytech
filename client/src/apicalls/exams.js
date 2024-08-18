const { default: axiosInstance } = require(".");

// get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/exams/get-all-exams"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get exam by id

export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://quizytech-akash7785s-projects.vercel.app/api/exams/get-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
