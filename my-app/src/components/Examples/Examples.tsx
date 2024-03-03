import { exampleArr } from "@/Types/Arrays";

function Example() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col items-center w-[935px] h-[843px] rounded-[20px] bg-blue">
        <h2 className="text-white font-Regular text-[19.2px] leading-[24.96px] mt-[46px]">
          Примеры нейросотрудников
        </h2>
        <div className="grid grid-cols-4 gap-x-[10.6px] gap-y-[20.8px] mt-[46px]">
          {exampleArr.map((item, _) => (
            <div
              key={item.id}
              className={`
              ${item.id === 5 ? "mb-[26.6px]" : ""} 
              ${item.id === 7 ? "mb-[26.6px]" : ""} 
              ${item.id === 2 ? "mt-[26.6px]" : ""} 
              ${item.id === 4 ? "mt-[26.6px]" : ""} 
              flex flex-col size-[202px] border-white border-[1px] rounded-[20px] cursor-pointer text-cloud hover:bg-lime hover:text-blue hover:border-0`}
            >
              <div className="w-full flex justify-center items-center mt-[19px]">
                <div className="size-[108px] bg-[#D9D9D9] rounded-full" />
              </div>
              <div className="flex flex-col items-start mt-[12.26px] ml-2 gap-[2px]">
                <p className="font-Medium text-[10.6px] leading-[13.86px]">
                  {item.title}
                </p>
                <p className="font-Regular text-[8.53px] leading-[11px] pr-[10px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2></h2>
        <div></div>
      </div>
    </section>
  );
}

export default Example;
