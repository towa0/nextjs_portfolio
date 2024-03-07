import React from "react";
import Title from "./Title";

export default function Aboutme() {
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div className="flex justify-center text-center">
            <Title text="About" />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-10 text-gray-300">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              {"Hi. I'm"} <span className="text-green-500">Kyran</span>, nice to
              meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a passionate about building excellent websites that improves
              the lives of those around me. I specialize in creating websites
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a website dev available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
