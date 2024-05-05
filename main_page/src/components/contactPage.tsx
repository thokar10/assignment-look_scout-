import "./contact.css";
function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center  bg-[#151B28] pt-[64px] pb-[64px]">
        <div className="second-container w-[1280px]  pl-[32px] flex flex-col items-center gap-[12px] pr-[32px]">
          <p className=" text-[#F9F9F9] get-text ">Get In Touch With Us</p>
          <p className="text-[#A5ACBA] body-text w-[700px]  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>

        <div className="w-[1280px] form-first mt-7   pl-[32px]  flex flex-col items-center md:pt-[32px] pt-[20px]  pr-[32px]">
          <div className=" w-[1216px] form-container  border-[#252D3C] rounded-[8px] border-[1px] p-[32px]   bg-[#1C2534] ">
            <form className="flex flex-col  gap-5">
              <div className="first-form-div  ">
                <div className="flex flex-col gap-[8px]  firstName-div  ">
                  <p className="text-[#F9F9F9] form-text">First Name</p>
                  <input
                    placeholder="input"
                    type="text"
                    className="w-[564px]  h-[46px] rounded-[6px] border-[1px]  bg-[#2C3444] text-[#A5ACBA] body-text  border-[#2E3545] pt-[12px] pr-[16px] pb-[12px] pl-[16px] "
                  />
                </div>
                <div className="flex flex-col gap-[8px]  firstName-div ">
                  <p className="text-[#F9F9F9] form-text">Email address</p>
                  <input
                    placeholder="input"
                    type="text"
                    className="w-[564px]  h-[46px] rounded-[6px] border-[1px] bg-[#2C3444] text-[#A5ACBA] body-text  border-[#2E3545] pt-[12px] pr-[16px] pb-[12px] pl-[16px] "
                  />
                </div>
              </div>

              <div className="first-form-div  ">
                <div className="flex flex-col gap-[8px] firstName-div ">
                  <p className="text-[#F9F9F9] form-text">Phone Number</p>
                  <input
                    placeholder="+000"
                    type="text"
                    className="md:w-[564px] w-[100%] h-[46px] rounded-[6px] border-[1px]  bg-[#2C3444] text-[#A5ACBA] body-text  border-[#2E3545] pt-[12px] pr-[16px] pb-[12px] pl-[16px] "
                  />
                </div>
                <div className="flex flex-col gap-[8px] firstName-div ">
                  <p className="text-[#F9F9F9] form-text">
                    Get in touch with Us
                  </p>
                  <select className="md:w-[564px] w-[100%] h-[46px] rounded-[6px] border-[1px]  bg-[#2C3444] text-[#A5ACBA] body-text  border-[#2E3545] pt-[12px] pr-[16px] pb-[12px] pl-[16px] ">
                    <option>dropdown</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]  ">
                <p className="text-[#F9F9F9] form-text">Message</p>

                <textarea
                  placeholder="Hi! We are Lookscout..."
                  className="w-[100%]  h-[147px] rounded-[6px] border-[1px]  bg-[#2C3444] text-[#A5ACBA] body-text  border-[#2E3545] pt-[12px] pr-[16px] pb-[12px] pl-[16px] "
                />
              </div>

              <div className="flex gap-[12px] ">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] rounded-[5px]"
                />
                <p className="text-[#F9F9F9] form-text">
                  I agree with Lookscout Privacy Policy
                </p>
              </div>

              <button
                type="submit"
                className="submit-bt bg-[#437EF7]  rounded-[6px] w-max text-white  pt-[12px] pr-[28px] pb-[12px] pl-[28px] "
              >
                <p className="text-[#F9F9F9] form-text">Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
