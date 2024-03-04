import { exampleArr } from "@/Types/Arrays";
import exampleImg1 from "@/Images/exampleImg1.png";
import exampleImg2 from "@/Images/exampleImg2.png";
import exampleImg3 from "@/Images/exampleImg3.png";
import exampleImg4 from "@/Images/exampleImg4.png";
import exampleImg5 from "@/Images/exampleImg5.png";
import exampleImg6 from "@/Images/exampleImg6.png";
import exampleImg7 from "@/Images/exampleImg7.png";
import exampleImg8 from "@/Images/exampleImg8.png";

function Example() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col items-center w-[935px] h-[843px] rounded-[10.6px] bg-blue xl:w-[1169px] xl:h-[1054px] xl:rounded-[13.3px] xm:w-[1315px] xm:h-[1186px] xm:rounded-[15px] xx:w-[1440px] xx:h-[1299px] xx:rounded-[16px] xb:w-[1754px] xb:h-[1582px] xb:rounded-[20px]">
        <h2 className="text-white font-Regular text-[19.2px] leading-[24.96px] mt-[46px] xl:text-[24px] xl:leading-[31.2px] xl:mt-[57px] xm:mt-[64.5px] xm:text-[27px] xm:leading-[35.1px] xx:mt-[70px] xx:text-[29px] xx:leading-[38px] xb:mt-[86px] xb:text-[36px] xb:leading-[46.8px]">
          Примеры нейросотрудников
        </h2>
        <div className="grid grid-cols-4 gap-x-[10.6px] mt-[46px] [&>*:nth-child(even)]:mt-[20.8px] xl:gap-x-[13.3px] xl:mt-[57.3px] xl:[&>*:nth-child(even)]:mt-[26px] xm:gap-x-[15px] xm:mt-[64.5px] xm:[&>*:nth-child(even)]:mt-[29px] xx:gap-x-[16px] xx:mt-[70px] xx:[&>*:nth-child(even)]:mt-[32px] xb:gap-x-[20px] xb:mt-[86px] xb:[&>*:nth-child(even)]:mt-[39px]">
          {exampleArr.map((item, _) => (
            <div
              key={item.id}
              className="flex flex-col justify-end size-[202px] rounded-[10.6px] xl:size-[253px] xl:rounded-[13.3px] xm:size-[285px] xm:rounded-[15px] xx:rounded-[16px] xx:size-[312px] xb:rounded-[20px] xb:size-[380px] cursor-pointer bg-cloud text-blue hover:bg-lime hover:text-blue hover:border-0"
            >
              <div className="w-full flex justify-center items-center mb-[5px]">
                <img
                  src={item.img}
                  alt=""
                  className={`
                ${
                  item.id === 1
                    ? "w-[121px] h-[122px] xl:w-[151px] xl:h-[153px] xm:w-[170px] xm:h-[172px] xx:w-[186px] xx:h-[188px] xb:w-[226.75px] xb:h-[229px]"
                    : ""
                }
                ${
                  item.id === 2
                    ? "w-[145px] h-[123px] xl:w-[181px] xl:h-[154px] xm:w-[203px] xm:h-[173px] xx:w-[223px] xx:h-[190px] xb:w-[271px] xb:h-[231px]"
                    : ""
                }
                ${
                  item.id === 3
                    ? "w-[124px] h-[126px] xl:w-[155px] xl:h-[158px] xm:w-[174px] xm:h-[178px] xx:w-[191px] xx:h-[195px] xb:w-[232px] xb:h-[237px]"
                    : ""
                }
                ${
                  item.id === 4
                    ? "w-[137px] h-[121px] xl:w-[171px] xl:h-[151px] xm:w-[193px] xm:h-[170px] xx:w-[211px] xx:h-[186px] xb:w-[257px] xb:h-[226px]"
                    : ""
                }
                ${
                  item.id === 5
                    ? "w-[97px] h-[130px] xl:w-[121px] xl:h-[163px] xm:w-[137px] xm:h-[183px] xx:w-[149px] xx:h-[200px] xb:w-[182px] xb:h-[244px]"
                    : ""
                }
                ${
                  item.id === 6
                    ? "w-[132px] h-[129px] xl:w-[165px] xl:h-[161px] xm:w-[185px] xm:h-[182px] xx:w-[203px] xx:h-[199px] xb:w-[247px] xb:h-[242px]"
                    : ""
                }
                ${
                  item.id === 7
                    ? "w-[133px] h-[123px] xl:w-[167px] xl:h-[154px] xm:w-[188px] xm:h-[173px] xx:w-[205px] xx:h-[190px] xb:w-[250px] xb:h-[231px]"
                    : ""
                }
                ${
                  item.id === 8
                    ? "w-[125px] h-[117px] xl:w-[157px] xl:h-[147px] xm:w-[176px] xm:h-[165px] xx:w-[193px] xx:h-[181px] xb:w-[235px] xb:h-[220px]"
                    : ""
                }
                `}
                />
              </div>
              <div className="flex flex-col items-start ml-2 xm:ml-[15px] gap-[2px] mb-[13px] xl:mb-[16px] xm:mb-[18px] xx:mb-[20px] xb:mb-[24px]">
                <p className="font-Medium text-[10.6px] leading-[13.86px] xl:text-[13.3px] xl:leading-[17.3px] xm:text-[15px] xm:leading-[19.5px] xx:text-[16px] xx:leading-[21.3px] xb:text-[20px] xb:leading-[26px]">
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
                  font-Regular text-[8.53px] leading-[11px] xl:text-[10.6px] xl:leading-[13.86px] xm:text-[12px] xm:leading-[15.6px] xx:text-[13px] xx:leading-[17px] xb:text-[16px] xb:leading-[20.8px]`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-[77px] w-[277px] text-[12px] leading-[15.2px] text-center font-Medium text-white xl:mt-[96.6px] xl:w-[346px] xl:text-[14.6px] xl:leading-[19.06px] xm:mt-[108px] xm:w-[390px] xm:text-[16.5px] xm:leading-[21.45px] xx:mt-[119px] xx:w-[427px] xx:text-[18px] xx:leading-[23.5px] xb:mt-[145px] xb:w-[520px] xb:text-[22px] xb:leading-[28.6px]">
          Нейросотрудник может общаться с клиентом практически во всех
          мессенджерах
        </h2>
        <div className="mt-[20px] w-full h-[85px] bg-white xl:mt-[24.6px] xl:h-[106.6px] xm:mt-[28px] xm:h-[120px] xx:mt-[30px] xx:h-[131px] xb:mt-[37px] xb:h-[160px]"></div>
      </div>
    </section>
  );
}

export default Example;
