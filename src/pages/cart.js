import { removeFromCart } from "@/features/cart/cartSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const cart = () => {
  const { cart, subtotal, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#f5f3f3] min-h-screen h-full py-[50px] flex gap-[50px] justify-center font-sans">
      <div className="w-3/5">
        <div className="flex justify-between items-center pb-[10px] border-b border-[#ee4c48]">
          <h2 className="text-[30px] font-medium">Your cart</h2>
          <p className="text-[15px] text-[#ee4c48] font-medium">
            Continue Browsing &gt;
          </p>
        </div>
        {cart.map((product) => (
          <div className="flex justify-between py-5 border-b border-[rgba(0,0,0,.2)]">
            <div className="flex gap-5">
              <img className="w-[130px] h-[130px]" src={product.image} alt="" />
              <div className="">
                <h2 className="text-[20px] font-medium">{product.name}</h2>
                <h4 className="text-[17px] text-[rgba(0,0,0,.7)] my-[16px]">
                  Rs. 30
                </h4>
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                  <div className="flex py-[6px] px-2 justify-center items-center border border-black mx-2">
                    <input
                      className="w-[40px] text-center bg-transparent"
                      type="text"
                      value="4"
                    />
                    <p className=" text-[16px] font-medium -left-[3px] right-[10px]">
                      gm
                    </p>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    t="1551322312294"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="flex justify-center"
                onClick={() => dispatch(removeFromCart(product._id))}
              >
                <p className="text-md mb-5">remove</p>
              </div>
              <h4 className="text-xl">Rs. {product.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[300px] h-full py-6 px-5 rounded-lg bg-[hsla(0,2%,88%,.67)]">
        <h2 className="text-3xl font-bold pb-4 border-b border-[rgba(0,0,0,.2)]">
          Order Summary
        </h2>
        <div className="flex justify-between pt-4">
          <p className="text-lg">Subtotal:</p>
          <p className="text-lg">₹ {subtotal}</p>
        </div>
        <div className="flex justify-between pt-3">
          <p className="text-lg">Shipping:</p>
          <p className="text-lg">₹ 100</p>
        </div>
        <div className="flex justify-between pt-5">
          <p className="text-xl font-bold">Total:</p>
          <p className="text-xl font-bold">₹ {total}</p>
        </div>
        <button className="bg-[#ee4c48] text-white w-full py-2 rounded-lg my-5">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default cart;
