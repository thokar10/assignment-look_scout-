import fastConnection from "./images/fasst.png";
import share from "./images/steamlined.png";
import check from "./images/check.png";
import computer from "./images/computer.png";
import rightArrow from "./images/right_arrow.png";
import workOrganization from "./images/work Organizattion.png";
import morgan from "./images/morgan.png";
import fb from "./images/fb.png";
import tw from "./images/twiiter.png";
import ld from "./images/linkedinf.png";
import tg from "./images/telegram.png";
import jf from "./images/jf.png";
import ad from "./images/ad.png";
import HeaderPage from "./components/HeaderPage";
import BottomPart from "./components/BottomPart";

function HomePage() {
  return (
    <>
      <HeaderPage />

      <div className="flex justify-center pt-[5rem] pb-[5rem]">
        <div className="w[800px] third-first h-[80px]  flex items-center flex-col gap-[12px]">
          <p className="message-text text-[#272D37]">Messaging for all </p>
          <p className="user-text text-[#5F6D7E] text-center ">
            User generated content in real-time will have multiple touchpoints
            for offspring.
          </p>
        </div>
      </div>

      <div className="flex fourth  justify-center">
        <div className="w-[1216px] fourth-first flex h-[182px] gap-[32px]">
          <div className="w-[384px] h-[182px] rounded-[5px] flex flex-col gap-[16px]">
            <img
              src={workOrganization}
              className="w-[48px] h-[48px] rounded-[30px] p-[8px] bg-[#437EF7] "
            />
            <p className="easier-text">Easier Work Organization</p>
            <p className="efficently-text text-[#5F6D7E]">
              Funnel stakeholder engagement yet retarget key demographics.
              Generate innovation but be transparent.
            </p>
          </div>

          <div className="w-[384px] h-[182px] rounded-[5px] flex flex-col gap-[16px]">
            <img
              src={share}
              className="w-[48px] h-[48px] rounded-[30px] p-[8px]  bg-[#437EF7]
                     "
            />
            <p className="easier-text">Fast Connection</p>
            <p className="efficently-text text-[#5F6D7E]">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </p>
          </div>

          <div className="w-[384px] h-[182px] rounded-[5px] flex flex-col gap-[16px]">
            <img
              src={fastConnection}
              className="w-[48px] h-[48px] rounded-[30px] p-[8px] bg-[#437EF7] "
            />
            <p className="easier-text">Streamlined Processes</p>
            <p className="efficently-text text-[#5F6D7E]">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-[100%]  fifth justify-center pt-[130px] pb-[130px]">
        <div className="w-[1280px] fifth-first h-[560px] pr-[32px] pl-[32px] flex gap-[124px]">
          <div className="w-[532px] fith-second h-[374px] flex flex-col gap-[40px] ">
            <div className="w-[532px] h-[288px] gap-[24px] flex flex-col ">
              <p className="demonstrate-text  text-[#272D37]">
                Demonstrate branding consequently think outside
              </p>
              <p className="efficently-text text-[#5F6D7E]">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                magna vulputate pellentesque a diam tincidunt. Aenean malesuada
                tellus tellus faucibus mauris quisque mauris in.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[8px]">
                <img src={check} className="w-[18px] h-[18px]" />
                <p>Enterprise-grade security</p>
              </div>
              <div className="flex gap-[8px]">
                <img src={check} className="w-[18px] h-[18px]" />
                <p>99.9% guaranteed uptime SLA</p>
              </div>
              <div className="flex gap-[8px]">
                <img src={check} className="w-[18px] h-[18px]" />
                <p>Designated customer success team</p>
              </div>
            </div>
            <button className="w-[133px] h-[46px] text-white gap-[6px]  flex items-center rounded-[6px] pt-[12px] pr-[18px] pb-[12px] pl-[18px] bg-[#437EF7] ">
              <p className="start-text">Start now </p>
              <img src={rightArrow} className="w-[11.32px] h-[10px]" />
            </button>
          </div>

          <img
            className="computer-img w-[560px] h-[560px]"
            src={computer}
          ></img>
        </div>
      </div>

      <div className="flex flex-col gap-[60px] w-[100%] items-center pt-[10px] pb-[130px]">
        <div className="w-[1280px] sixth-div h-[104px] pl-[32px] pr-[32px] flex justify-center gap-[12px]">
          <div className="w-[800px] h-[104px] flex flex-col gap-[8px]">
            <p className="text-[#272D37] core-text text-center">
              The Core of Our Team
            </p>
            <p className="efficently-text text-[#5F6D7E] text-center">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment of people and great talent
              that truly rocks.
            </p>
          </div>
        </div>

        <div className="w-[1280px] sixth-second h-[454px] pl-[32px] pr-[32px] flex  gap-[32px]">
          <div className="w-[384px] sixth-third h-[454px] rounded-5px gap-[16px]">
            <img src={morgan} className="w-[384px] h-[384px] rounded-[5px]" />
            <div className="w-[240px] h-[90px] flex flex-col gap-[16px]">
              <div className="w-[240px] flex flex-col h-[54px]">
                <p className="morgan-text text-[#272D37]">Morgan Drew</p>
                <p className="efficently-text text-[#5F6D7E]">Manager</p>
              </div>
            </div>
            <div className="w-[128px] flex h-[20px] gap-[16px]">
              <img src={tw} className="w-[20px] h-[16.25px]" />
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1 flex justify-center rounded-[50%]">
                <img src={fb} className="w-[8.55px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37]   flex justify-center rounded-[50%]">
                <img src={ld} className="w-[9px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1  flex justify-center rounded-[50%]">
                <img src={tg} className="w-[9px] h-[16.09px]" />
              </div>
            </div>
          </div>

          <div className="w-[384px] sixth-third  h-[454px] rounded-5px gap-[16px]">
            <img src={jf} className="w-[384px] h-[384px] rounded-[5px]" />
            <div className="w-[240px] h-[90px] flex flex-col gap-[16px]">
              <div className="w-[240px] flex flex-col h-[54px]">
                <p className="morgan-text text-[#272D37]">Jeffery Walker</p>
                <p className="efficently-text text-[#5F6D7E]">Lead Designer</p>
              </div>
            </div>
            <div className="w-[128px] flex h-[20px] gap-[16px]">
              <img src={tw} className="w-[20px] h-[16.25px]" />
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1 flex justify-center rounded-[50%]">
                <img src={fb} className="w-[8.55px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37]   flex justify-center rounded-[50%]">
                <img src={ld} className="w-[9px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1  flex justify-center rounded-[50%]">
                <img src={tg} className="w-[9px] h-[16.09px]" />
              </div>
            </div>
          </div>

          <div className="w-[384px] sixth-third h-[454px] rounded-5px gap-[16px]">
            <img src={ad} className="w-[384px] h-[384px] rounded-[5px]" />
            <div className="w-[240px] h-[90px] flex flex-col gap-[16px]">
              <div className="w-[240px] flex flex-col h-[54px]">
                <p className="morgan-text text-[#272D37]">Andrew Steve</p>
                <p className="efficently-text text-[#5F6D7E]">UI/UX Designer</p>
              </div>
            </div>
            <div className="w-[128px] flex h-[20px] gap-[16px]">
              <img src={tw} className="w-[20px] h-[16.25px]" />
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1 flex justify-center rounded-[50%]">
                <img src={fb} className="w-[8.55px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37]   flex justify-center rounded-[50%]">
                <img src={ld} className="w-[9px] h-[16.09px]" />
              </div>
              <div className="w-[20px] h-[20px] bg-[#272d37] p-1  flex justify-center rounded-[50%]">
                <img src={tg} className="w-[9px] h-[16.09px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomPart />
    </>
  );
}

export default HomePage;
