import Cart from "@/icons/cart";
import Heart from "@/icons/heart";
import Search from "@/icons/search";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Container from "../Container";

const HeaderMiddle = () => {
  const router = useRouter();
  const cartLength = useSelector((state) => state.cart.cart.length);
  return (
    <div className="h-[100px] bg-[#ee4c48] flex items-center text-[#fff]">
      <Container>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[40px] font-semibold">Delito</h1>
          </div>
          <div className="flex items-center">
            <div className="ring-1 ring-[#fff] border-r-0 flex w-[400px] h-[45px] rounded-3xl overflow-hidden">
              <input
                placeholder="Search a flavour eg. Dark chocolate"
                className="w-[88%] h-full bg-transparent px-5 border-none outline-none text-[17px] text-[#fff] placeholder:text-[#fff]"
              />
              <div className="bg-[#fff] w-[12%] flex justify-center items-center">
                <Search className="text-[#ee4c48]" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[27px]">
            <Heart />
            <div className="relative" onClick={() => router.push("/cart")}>
              <Cart className="cursor-pointer" />
              <div className="bg-[#fff] text-[#ee4c48] flex items-center justify-center text-[12px] w-5 h-5 rounded-full absolute -right-3 -top-1">
                {cartLength}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMiddle;
