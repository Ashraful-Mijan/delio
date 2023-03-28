import User from "@/icons/user";
import React from "react";
import Container from "../Container";

const Topbar = () => {
  return (
    <div className="w-full bg-[#8d211e] text-[#fff] h-[55px] flex items-center text-base">
      <Container>
        <div className="flex justify-end items-center h-full text-base">
          <div className="h-[45px] flex gap-2 items-center cursor-pointer">
            <User className="text-[27px]" />
            {"Log In"}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
