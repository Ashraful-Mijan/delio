import { addToCart } from "@/features/cart/cartSlice";
import Eye from "@/icons/eye";
import Heart from "@/icons/heart";
import Shop from "@/icons/shop";
import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ project }) => {
  const { name, image, _id, price } = project;
  const dispatch = useDispatch();
  return (
    <div key={_id} className="rounded-lg overflow-hidden hover:shadow-lg group">
      <div className="h-[250px] relative">
        <img
          src={`${image}`}
          className="w-full h-[250px] object-cover"
          alt="product"
        />
        <div className="flex flex-col gap-2 absolute top-2 right-2 invisible group-hover:visible  ">
          <div
            onClick={() => dispatch(addToCart(project))}
            className="w-[40px] h-[40px] rounded-full bg-[#ee4c48] hover:bg-black flex justify-center items-center"
          >
            <Shop className="text-white" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#ee4c48] hover:bg-black flex justify-center items-center">
            <Eye className="text-white" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#ee4c48] hover:bg-black flex justify-center items-center">
            <Heart className="text-white" />
          </div>
        </div>
        <div className="invisible group-hover:visible absolute bottom-0 w-full h-[50px] flex justify-center items-center bg-[hsla(0,0%,100%,.7)] text-base cursor-pointer font-medium">
          Buy now
        </div>
      </div>
      <div className="p-4 bg-[#f5f5f5]">
        <h6 className="text-[17px]">{name}</h6>
        <p className="text-sm text-[#ee4c48] text-[19px] font-medium">
          Rs {price}
        </p>
      </div>
    </div>
  );
};

export default Product;
