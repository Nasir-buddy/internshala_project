import React from "react";
import ProgressBar from "../Components/ProgressBar";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from "../Components/Button";
const FirstPage = ({setstep}) => {
  let datas = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
      h_text: "Student",
      rem_text: " or soon to be enrolled",
    },
    {
      img: "https://w1.pngwing.com/pngs/213/1021/png-transparent-google-logo-teacher-school-education-student-world-teachers-day-learning-teacher-education.png",
      h_text: "Professional",
      rem_text: " or pursuing a career",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/437/437501.png",
      h_text: "Parent",
      rem_text: " of a school-age child",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3206/3206012.png",
      h_text: "Lifelong",
      rem_text: " Learner",
    },
    {
      img: "https://i.pinimg.com/originals/55/69/55/5569554b4d8a9bb11965949e1af08dbf.png",
      h_text: "Teacher",
      rem_text: "",
    },
    {
      img: "https://i.pinimg.com/564x/de/0c/64/de0c64625f09dcf14745e4fda14b2e19.jpg",
      h_text: "Other",
      rem_text: "",
    },
  ];

  return (
    <>
      <ProgressBar step={1} setstep={setstep}/>
      <div className="text-3xl text-center mt-12 font-bold">
        Which describes you best ?
      </div>
      <div className="text-sm text-center m-12 font-light">
        This will help us personalize your experience.
      </div>
      {datas.map((data) => {
        return (
          <div className="relative" key={data.h_text}>
            <div className="p-2 pl-6 border-solid border-2 max-w-[60vw] shadow-md m-auto rounded-lg mt-3 text-start transition-transform hover:scale-105 flex items-center">
              {data.img && (
                <img
                  src={data.img}
                  alt=""
                  className="h-10 w-10 rounded-full mr-6"
                />
              )}
              <div>
                <span className="text-lg">{data.h_text}</span>
                <span className="text-slate-600 text-sm">{data.rem_text}</span>
              </div>
            </div>
          </div>
        );
      })}
      <Button setstep={setstep} nextstep={2}/>
    </>
  );
};

export default FirstPage;
