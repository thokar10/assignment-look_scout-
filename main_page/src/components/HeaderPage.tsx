import { RiArrowDropDownLine } from "react-icons/ri";
import LookScoutImage from "../images/Lookscout.png";
import { Drawer } from "antd";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const HeaderPage = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex header-part h-[86px] border-b-[1px] w-[100%] pt-[20px] pr-[160px] pb-[20px] pl-[160px] bg-[#F8F9FB]  justify-between  border-[#EAEBF0]">
        <div className="w-[1280px] links flex items-center h-[46px]">
          <div className="w-max h-[40px]  items-center flex gap-[64px] ">
            <div>
              <img className="w-[150px] h-[28px]" alt="" src={LookScoutImage} />
            </div>

            <div className="horizontal-container w-max h-[22px]   flex gap-[32px]">
              <p className="hover:cursor-pointer">Home</p>
              <p className="hover:cursor-pointer">Our Products</p>

              <div className="flex items-center">
                <p className="hover:cursor-pointer">Resources</p>
                <RiArrowDropDownLine className="w-[20px] h-[20px]" />
              </div>
              <p className="hover:cursor-pointer">Contacts</p>
            </div>
          </div>
        </div>
        <div className="left-right w-max flex gap-[24px] items-center  h-[46px]">
          <p className="text-[#437EF7] w-[57px] h-[22px] hover:cursor-pointer">
            Sign Up
          </p>
          <button className="w-[80px] h-[46px] p-[12px 18px 12px 18px] rounded-[6px] bg-[#437EF7] text-white">
            Log in
          </button>
          <div>
            <IoMdMenu
              onClick={showDrawer}
              className="menu-options hover:cursor-pointer"
            />

            <Drawer onClose={onClose} open={open}>
              <p>home</p>
              <p>Resource</p>
              <p>products</p>
            </Drawer>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center bg-[#F8F9FB]">
        <div className="w-[1280px] second-container flex justify-center h-[404px] pt-[80px] pr-[30px] pb-[92px] pl-[30px]  ">
          <div className="w-[640px] second-first h-[232px] flex flex-col gap-[16px] ">
            <p className="letter-industry text-center text-[#437EF7] ">
              1% OF THE INDUSTRY
            </p>
            <div className="w-[640px] second-second h-[196px] gap-[48px] ">
              <p className="hype-text text-center w-[640px] text-[#272D37] h-[120px]">
                Hype got you here.
                <br /> stay for the support{" "}
              </p>
            </div>
            <p className="WE-text text-center text-[#5F6D7E]">
              {" "}
              We've been told it is possible to revolutionize the payment
              industry. We have not reinvented the wheel,we've decided to build
              upon it - successfully.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderPage;
