import { exampleArr } from "@/Types/Arrays";

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
              className="flex flex-col size-[202px] rounded-[10.6px] xl:size-[253px] xl:rounded-[13.3px] xm:size-[285px] xm:rounded-[15px] xx:rounded-[16px] xx:size-[312px] xb:rounded-[20px] xb:size-[380px] cursor-pointer bg-cloud text-blue hover:bg-lime hover:text-blue hover:border-0"
            >
              <div className="w-full flex justify-center items-center mt-[19px]">
                <div className="size-[108px] bg-[#D9D9D9] rounded-full" />
              </div>
              <div className="flex flex-col items-start mt-[12.26px] ml-2 gap-[2px]">
                <p className="font-Medium text-[10.6px] leading-[13.86px] xl:text-[13.3px] xl:leading-[17.3px] xm:text-[15px] xm:leading-[19.5px] xx:text-[16px] xx:leading-[21.3px] xb:text-[20px] xb:leading-[26px]">
                  {item.title}
                </p>
                <p className="font-Regular text-[8.53px] leading-[11px] pr-[10px] xl:text-[10.6px] xl:leading-[13.86px] xm:text-[12px] xm:leading-[15.6px] xx:text-[13px] xx:leading-[17px] xb:text-[16px] xb:leading-[20.8px]">
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
