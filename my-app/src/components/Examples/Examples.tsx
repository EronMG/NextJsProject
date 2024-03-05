"use client";
import React from "react";

import { exampleArr, exampleTickerArr } from "@/Types/Arrays";
import Instagram from "@/Images/instagram_icon.svg";

function Example() {
  return (
    <section className="flex justify-center items-center px-[10px] md:mx-0 mt-[199px]">
      <div className="md:hidden flex flex-col items-center bg-blue rounded-[20px]">
        <h2 className="font-Regular text-[22px] leading-[26.4px] text-center text-white w-[269px] mt-[32px] mb-[12px]">
          Примеры нейросотрудников
        </h2>
        <div className="flex flex-wrap justify-center gap-[10px] [&>*:nth-child(odd)]:bg-cloud [&>*:nth-child(even)]:bg-lime">
          {exampleArr.map((item, _) => (
            <div
              key={item.id}
              className="flex flex-col size-[280px] rounded-[20px]"
            >
              <div className="flex justify-center mt-[13px] mb-[9px]">
                <img
                  src={item.img}
                  alt=""
                  className={`
                ${item.id === 1 ? "w-[170px]" : ""}
                ${item.id === 2 ? "w-[201px]" : ""}
                ${item.id === 3 ? "w-[168px]" : ""}
                ${item.id === 4 ? "w-[195px]" : ""}
                ${item.id === 5 ? "w-[128px]" : ""}
                ${item.id === 6 ? "w-[175px]" : ""}
                ${item.id === 7 ? "w-[186px]" : ""}
                ${item.id === 8 ? "w-[183px]" : ""}
                h-[171px]`}
                />
              </div>
              <div className="ml-[15px] mb-[14px] text-blue">
                <p className="font-Medium text-[16px] leading-[20.8px]">
                  {item.title}
                </p>
                <p
                  className={`
                  ${item.id === 1 ? "w-[80%]" : ""}
                  ${item.id === 2 ? "w-[82%]" : ""}
                  ${item.id === 3 ? "w-[86%]" : ""}
                  ${item.id === 4 ? "w-[87%]" : ""}
                  ${item.id === 5 ? "w-[92%]" : ""}
                  ${item.id === 6 ? "w-[92%]" : ""}
                  ${item.id === 7 ? "w-[96%]" : ""}
                  ${item.id === 8 ? "w-[79%]" : ""}
                  font-Regular text-[12px] leading-[15.6px]`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="font-Regular text-[16px] leading-[20.8px] text-center text-white mt-[37px]">
          Нейросотрудник может общаться с клиентом практически во всех
          мессенджерах
        </h2>
        <div className="flex flex-wrap bg-white rounded-[20px] w-[280px] h-[182px] mt-[16px] mb-[10px] pt-[17px] pb-[16px] px-[10px] gap-[16px]">
          {exampleTickerArr.map((item, _) => (
            <div
              key={item.id}
              className="border-[1px] border-blue rounded-[17px] h-[25px]"
            >
              <div className="flex items-center my-[4.85px] ml-[4.95px] mr-[7.25px] gap-[4.4px]">
                <img src={item.img} alt="" className="size-[15.4px]" />
                <p className="font-Medium text-dark text-[10px] leading-[13px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center bg-blue w-[701px] h-[632px] rounded-[8px] lg:w-[935px] lg:h-[843px] lg:rounded-[10.6px] xl:w-[1169px] xl:h-[1054px] xl:rounded-[13.3px] xm:w-[1315px] xm:h-[1186px] xm:rounded-[15px] xx:w-[1440px] xx:h-[1299px] xx:rounded-[16px] xb:w-[1754px] xb:h-[1582px] xb:rounded-[20px]">
        <h2 className="text-white font-Regular text-[14.4px] leading-[18.72px] mt-[34.4px] lg:text-[19.2px] lg:leading-[24.96px] lg:mt-[46px] xl:text-[24px] xl:leading-[31.2px] xl:mt-[57px] xm:mt-[64.5px] xm:text-[27px] xm:leading-[35.1px] xx:mt-[70px] xx:text-[29px] xx:leading-[38px] xb:mt-[86px] xb:text-[36px] xb:leading-[46.8px]">
          Примеры нейросотрудников
        </h2>
        <div className="grid grid-cols-4 gap-x-[8px] mt-[34.4px] [&>*:nth-child(even)]:mt-[15.6px] lg:gap-x-[10.6px] lg:mt-[46px] lg:[&>*:nth-child(even)]:mt-[20.8px] xl:gap-x-[13.3px] xl:mt-[57.3px] xl:[&>*:nth-child(even)]:mt-[26px] xm:gap-x-[15px] xm:mt-[64.5px] xm:[&>*:nth-child(even)]:mt-[29px] xx:gap-x-[16px] xx:mt-[70px] xx:[&>*:nth-child(even)]:mt-[32px] xb:gap-x-[20px] xb:mt-[86px] xb:[&>*:nth-child(even)]:mt-[39px]">
          {exampleArr.map((item, _) => (
            <div
              key={item.id}
              className="flex flex-col justify-end size-[152px] rounded-[8px] lg:size-[202px] lg:rounded-[10.6px] xl:size-[253px] xl:rounded-[13.3px] xm:size-[285px] xm:rounded-[15px] xx:rounded-[16px] xx:size-[312px] xb:rounded-[20px] xb:size-[380px] cursor-pointer bg-cloud text-blue hover:bg-lime hover:text-blue hover:border-0"
            >
              <div className="w-full flex justify-center items-center mb-[5px]">
                <img
                  src={item.img}
                  alt=""
                  className={`
                ${
                  item.id === 1
                    ? "w-[91px] h-[91.6px] lg:w-[121px] lg:h-[122px] xl:w-[151px] xl:h-[153px] xm:w-[170px] xm:h-[172px] xx:w-[186px] xx:h-[188px] xb:w-[226.75px] xb:h-[229px]"
                    : ""
                }
                ${
                  item.id === 2
                    ? "w-[108px] h-[92.4px] lg:w-[145px] lg:h-[123px] xl:w-[181px] xl:h-[154px] xm:w-[203px] xm:h-[173px] xx:w-[223px] xx:h-[190px] xb:w-[271px] xb:h-[231px]"
                    : ""
                }
                ${
                  item.id === 3
                    ? "w-[92.8px] h-[94.8px] lg:w-[124px] lg:h-[126px] xl:w-[155px] xl:h-[158px] xm:w-[174px] xm:h-[178px] xx:w-[191px] xx:h-[195px] xb:w-[232px] xb:h-[237px]"
                    : ""
                }
                ${
                  item.id === 4
                    ? "w-[102.8px] h-[90.4px] lg:w-[137px] lg:h-[121px] xl:w-[171px] xl:h-[151px] xm:w-[193px] xm:h-[170px] xx:w-[211px] xx:h-[186px] xb:w-[257px] xb:h-[226px]"
                    : ""
                }
                ${
                  item.id === 5
                    ? "w-[72.8px] h-[97.6px] lg:w-[97px] lg:h-[130px] xl:w-[121px] xl:h-[163px] xm:w-[137px] xm:h-[183px] xx:w-[149px] xx:h-[200px] xb:w-[182px] xb:h-[244px]"
                    : ""
                }
                ${
                  item.id === 6
                    ? "w-[98.8px] h-[96.8px] lg:w-[132px] lg:h-[129px] xl:w-[165px] xl:h-[161px] xm:w-[185px] xm:h-[182px] xx:w-[203px] xx:h-[199px] xb:w-[247px] xb:h-[242px]"
                    : ""
                }
                ${
                  item.id === 7
                    ? "w-[100px] h-[92.4px] lg:w-[133px] lg:h-[123px] xl:w-[167px] xl:h-[154px] xm:w-[188px] xm:h-[173px] xx:w-[205px] xx:h-[190px] xb:w-[250px] xb:h-[231px]"
                    : ""
                }
                ${
                  item.id === 8
                    ? "w-[94px] h-[88px] lg:w-[125px] lg:h-[117px] xl:w-[157px] xl:h-[147px] xm:w-[176px] xm:h-[165px] xx:w-[193px] xx:h-[181px] xb:w-[235px] xb:h-[220px]"
                    : ""
                }
                `}
                />
              </div>
              <div className="flex flex-col items-start ml-[6px] gap-[2px] mb-[9.6px] lg:ml-2 xm:ml-[15px] lg:gap-[4px] lg:mb-[13px] xl:mb-[16px] xm:mb-[18px] xx:mb-[20px] xb:mb-[24px]">
                <p className="font-Medium text-[8px] leading-[10.4px] lg:text-[10.6px] lg:leading-[13.86px] xl:text-[13.3px] xl:leading-[17.3px] xm:text-[15px] xm:leading-[19.5px] xx:text-[16px] xx:leading-[21.3px] xb:text-[20px] xb:leading-[26px]">
                  {item.title}
                </p>
                <p
                  className={`
                  ${item.id === 1 ? "w-[78%]" : ""}
                  ${item.id === 2 ? "w-[82%]" : ""}
                  ${item.id === 3 ? "w-[86%]" : ""}
                  ${item.id === 4 ? "w-[82%]" : ""}
                  ${item.id === 5 ? "w-[92%]" : ""}
                  ${item.id === 6 ? "w-[89%]" : ""}
                  ${item.id === 7 ? "w-[93%]" : ""}
                  ${item.id === 8 ? "w-[92%]" : ""}
                  font-Regular text-[6.4px] leading-[8.32px] lg:text-[8.53px] lg:leading-[11px] xl:text-[10.6px] xl:leading-[13.86px] xm:text-[12px] xm:leading-[15.6px] xx:text-[13px] xx:leading-[17px] xb:text-[16px] xb:leading-[20.8px]`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-[58px] w-[208px] text-[8.8px] leading-[11.44px] lg:mt-[77px] lg:w-[277px] lg:text-[12px] lg:leading-[15.2px] text-center font-Medium text-white xl:mt-[96.6px] xl:w-[346px] xl:text-[14.6px] xl:leading-[19.06px] xm:mt-[108px] xm:w-[390px] xm:text-[16.5px] xm:leading-[21.45px] xx:mt-[119px] xx:w-[427px] xx:text-[18px] xx:leading-[23.5px] xb:mt-[145px] xb:w-[520px] xb:text-[22px] xb:leading-[28.6px]">
          Нейросотрудник может общаться с клиентом практически во всех
          мессенджерах
        </h2>
        <div className="overflow-hidden flex justify-between items-center mt-[14.8px] h-[64px] lg:mt-[20px] w-full lg:h-[85px] bg-white xl:mt-[24.6px] xl:h-[106.6px] xm:mt-[28px] xm:h-[120px] xx:mt-[30px] xx:h-[131px] xb:mt-[37px] xb:h-[160px]">
          {exampleTickerArr.map((item, _) => (
            <div
              key={item.id}
              className="border-[2px] border-blue rounded-[62px]"
            >
              <div className="flex items-center my-[18px] ml-[18px] mr-[24px] gap-[16px]">
                <img src={item.img} alt="" className="size-[56px]" />
                <p className="font-Medium text-dark text-[36px] leading-[46.8px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Example;
