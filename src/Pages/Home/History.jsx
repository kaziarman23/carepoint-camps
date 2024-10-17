const History = () => {
  return (
    <div className="w-4/5 h-full mx-auto ">
      <h1 className="text-2xl text-center font-bold p-3">
        Some Success stories of our camps
      </h1>
      <div className="grid gap-5 grid-cols-2 my-5">
        {/* row 1 */}
        <div className="">
          <img
            src="https://i.pinimg.com/564x/d0/f8/af/d0f8af609850134890eac5e0c1e91c8d.jpg"
            alt="success story"
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <div className="ml-5 mt-10 space-y-3">
            <h1>
              <span className="font-bold">Camp Name: </span>Healthy Hearts Camp
            </h1>
            <h1>
              <span className="font-bold">Location: </span>Rio Verde, Brazil
            </h1>
            <p>
              <span className="font-bold">Date: </span>May 15-18, 2023
            </p>
            <p>
              <span className="font-bold">Impactful Moment: </span> A
              65-year-old patient with severe chest pain was diagnosed with a
              heart condition and received life-saving treatment in time.
            </p>

            <p>
              <span className="font-bold">Achievements/Outcomes: </span> 50
              heart surgeries, 300+ patients screened for heart diseases
            </p>
            <h5>
              <span className="font-bold">Patients Treated: </span>400+
            </h5>
          </div>
        </div>
        {/* row 2 */}

        <div>
          <div className="space-y-3 mt-10">
            <h1>
              <span className="font-bold">Camp Name: </span>Vision for All Camp
            </h1>
            <h1>
              <span className="font-bold">Location: </span>Nairobi, Kenya
            </h1>
            <p>
              <span className="font-bold">Date: </span>Aug 1-5, 2023
            </p>
            <p>
              <span className="font-bold">Impactful Moment: </span> An elderly
              man regained his eyesight after a successful cataract surgery,
              allowing him to reunite with his family.
            </p>

            <p>
              <span className="font-bold">Achievements/Outcomes: </span> 80
              cataract surgeries, 500+ eye screenings
            </p>
            <h5>
              <span className="font-bold">Patients Treated: </span>300+
            </h5>
          </div>
        </div>
        <div className="">
          <img
            src="https://i.pinimg.com/564x/70/b0/c9/70b0c9929d00e5560aa6012896ceb2d4.jpg"
            alt="success story"
            className="object-cover rounded-xl"
          />
        </div>
        {/* row 3 */}
        <div className="">
          <img
            src="https://i.pinimg.com/564x/77/08/b7/7708b7564124f048fcf455b569790ccd.jpg"
            alt="success story"
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <div className="ml-5 mt-10 space-y-3">
            <h1>
              <span className="font-bold">Camp Name: </span>Women’s Health Camp
            </h1>
            <h1>
              <span className="font-bold">Location: </span>Lima, Peru
            </h1>
            <p>
              <span className="font-bold">Date: </span>Sep 20-24, 2023
            </p>
            <p>
              <span className="font-bold">Impactful Moment: </span> A pregnant
              woman received prenatal care, identifying and managing gestational
              diabetes for a healthier delivery.
            </p>

            <p>
              <span className="font-bold">Achievements/Outcomes: </span> 200
              women received OB/GYN consultations, 50 prenatal diagnoses.
            </p>
            <h5>
              <span className="font-bold">Patients Treated: </span>320+
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
