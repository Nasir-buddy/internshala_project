import React from "react";
import ProgressBar from "../Components/ProgressBar";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from "../Components/Button";

const FirstPage = ({setstep}) => {
  let datas = [
    {
      img: "https://png.pngtree.com/png-clipart/20191120/original/pngtree-graph-icon-for-your-project-png-image_5049016.jpg",
      text: "Learn specific skills to advance my career"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2072/2072130.png",
      text: "Explore next topics I'm interested in"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4720/4720458.png",
      text: "refreshing my maths foundations"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5324/5324945.png",
      text: "Exerciding my brain to stay sharp"
    },
    {
      img: "https://media.istockphoto.com/id/1414451080/vector/smile-eyes-look-away-emoji-a-sticker-for-a-chat-message.jpg?s=612x612&w=0&k=20&c=CkfS4-p14xKZXtEIXi_U2vrlRRFR7QrVazWr8eYDTqA=",
      text: "Something else"

    },

  ];

  return (
    <>
      <ProgressBar step={2} setstep={setstep}/>
      <div className="text-3xl text-center mt-12 font-bold">
        Which are you most interested in  ?
      </div>
      <div className="text-sm text-center m-12 font-light">
        Choose just one.This will help us get you started&nbsp;(but won't limit your experience)
      </div>
      {datas.map((data) => {
        return (
          <div className="relative" key={data.h_text}>
            <div className="p-4 border-solid border-2 max-w-[60vw] shadow-md m-auto rounded-lg mt-3 text-start transition-transform hover:scale-105 flex items-center">
              {data.img && (
                <img
                  src={data.img}
                  alt=""
                  className="h-10 w-10 rounded-full mr-6"
                />
              )}
              <div>
                <span className="text-lg">{data.text}</span>

              </div>
            </div>
          </div>
        );
      })}
      <Button setstep={setstep} nextstep={3}/>
    </>
  );
};

export default FirstPage;
