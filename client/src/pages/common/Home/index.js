import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllExams } from "../../../apicalls/exams";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";
function Home() {
  const [exams, setExams] = React.useState([]);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.users);
  const getExams = async () => {
    try {
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getExams();
  }, []);

  return (
    user && (
      <div className="w-full ">
        <PageTitle title={`Hi ${user.name}, Welcome to QuizyTech`} />
        <div className="divider"></div>

        <div className="flex gap-5  p-2 max-sm:flex max-sm:flex-col">
          {exams.map((exam) => (
            <div class="p-6 bg-white shadow-lg w-1/5 max-sm:w-full">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">
                {exam?.name}
              </h5>
              {/* <div className="divider p-0"></div> */}
              <p class="mb-3 flex flex-col gap-1">
                <h1 className="text-md">Category : {exam.category}</h1>

                <h1 className="text-md">Total Marks : {exam.totalMarks}</h1>
                <h1 className="text-md">Passing Marks : {exam.passingMarks}</h1>
                <h1 className="text-md">Duration : {exam.duration}</h1>
              </p>

              <button
                className="primary-outlined-btn"
                onClick={() => navigate(`/user/write-exam/${exam._id}`)}
              >
                Start Exam
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Home;
