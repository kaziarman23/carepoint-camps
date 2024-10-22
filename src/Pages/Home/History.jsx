const History = () => {
  return (
    <div className="w-full h-full bg-[#e9ecf1]">
      <div className="w-4/5 h-full mx-auto">
        <h1 className="text-2xl text-center p-3">
          Some Success stories of <span className="font-bold">our Camps</span>
        </h1>
        <div className="grid gap-2 grid-cols-4 p-10">
          <div className="w-60 h-52">
            <img
              src="https://i.pinimg.com/564x/26/73/22/267322d358302802150da6bf0171694f.jpg"
              alt="Hearts Camp"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
          <div className="w-60 h-52 bg-[#fefffe] p-2 rounded-xl">
            <div className="flex items-center">
              <img src="/dropper.png" alt="dropper png" className="w-8 h-8" />
              <h1 className="text-center font-bold p-2">Vision for All</h1>
            </div>
            <p className="">
              65-year-old patient with severe chest pain was diagnosed with a
              heart condition and received life-saving treatment in time.
            </p>
          </div>
          <div className="w-60 h-52">
            <img
              src="https://i.pinimg.com/736x/95/98/e3/9598e3e1a6fc8b90b18394975ed7823a.jpg"
              alt="Woman Camp"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
          <div className="w-60 h-52 bg-[#fefffe] p-2 rounded-xl">
            <div className="flex items-center">
              <img
                src="/stethoscope.png"
                alt="dropper png"
                className="w-8 h-8"
              />
              <h1 className="text-center font-bold p-2">Spine Care Camp</h1>
            </div>
            <p className="">
              Conducted successful spinal surgeries on 15 patients suffering
              from severe spinal deformities, enabling them to walk pain-free.
            </p>
          </div>
          <div className="w-60 h-52 bg-[#fefffe] p-2 rounded-xl">
            <div className="flex items-center">
              <img
                src="/heart-rate.png"
                alt="heart-rate image"
                className="w-8 h-8"
              />
              <h1 className="text-center font-bold p-2">Heart Health Camp</h1>
            </div>
            <p className="">
              Performed life-saving heart surgeries on 20 children born with
              congenital heart defects, giving them a new lease on life.
            </p>
          </div>
          <div className="w-60 h-52">
            <img
              src="https://i.pinimg.com/564x/3f/29/3b/3f293b8e57d11f4a077958fca0f7daa9.jpg"
              alt="eye Camp"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
          <div className="w-60 h-52 bg-[#fefffe] p-2 rounded-xl">
            <div className="flex items-center">
              <img src="/safety.png" alt="safety image" className="w-8 h-8" />
              <h1 className="text-center font-bold p-2">Woman Camp</h1>
            </div>
            <p className="">
              A pregnant woman received prenatal care, identifying and managing
              gestational diabetes for a healthier delivery.
            </p>
          </div>
          <div className="w-60 h-52">
            <img
              src="https://i.pinimg.com/736x/22/3e/8b/223e8be34f3ad0c83e72596825d84bce.jpg"
              alt="eye Camp"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;