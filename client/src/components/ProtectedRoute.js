import { message } from "antd";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "../apicalls/users";
import { useDispatch } from "react-redux";
import { SetUser } from "../redux/usersSlice.js";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userMenu = [
    {
      title: "Home",
      paths: ["/"],
      icon: <i className="ri-home-line"></i>,
      onClick: () => navigate("/"),
    },
    {
      title: "Reports",
      paths: ["/user/reports"],
      icon: <i className="ri-bar-chart-line"></i>,
      onClick: () => navigate("/user/reports"),
    },

    {
      title: "Logout",
      paths: ["/logout"],
      icon: <i className="ri-logout-box-line"></i>,
      onClick: () => {
        localStorage.removeItem("token");
        navigate("/login");
      },
    },
  ];

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        dispatch(SetUser(response.data));
        if (response.data) {
          setMenu(userMenu);
        }
      } else {
        message.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="max-sm:sticky max-sm:top-0">
        <div className="bg-[#624F8C] w-full h-20 flex ">
          {menu.map((item, index) => {
            return (
              <div className="menu-item" key={index} onClick={item.onClick}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="layout">
        <div className="body">
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ProtectedRoute;
