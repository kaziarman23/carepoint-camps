const Feature = () => {
  return (
    <div className="w-4/5 h-full mx-auto">
      <div className="flex justify-center items-start gap-3">
        <div className="w-1/2 h-full">
          <img
            src="/featureImage.png"
            alt="feature image"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 h-full">
          <h1 className="font-bold text-2xl">
            Key Services from Carepoint Camps:{" "}
          </h1>
          <div className="p-2 space-y-2">
            <h1 className="font-bold">1. Comprehensive Heart Screenings</h1>
            <p>
              Our camp offers thorough heart health screenings, including blood
              pressure checks, cholesterol tests, and electrocardiograms (ECGs)
              to detect potential heart issues early and provide immediate care.
            </p>
          </div>
          <div className="p-2 space-y-2">
            <h1 className="font-bold">2. Expert Cardiology Consultations</h1>
            <p>
              Led by a team of highly qualified cardiologists, we offer
              one-on-one consultations where patients receive personalized
              medical advice and treatment plans to manage heart conditions
              effectively.
            </p>
          </div>
          <div className="p-2 space-y-2">
            <h1 className="font-bold">3. Free Life-Saving Heart Surgeries</h1>
            <p>
              For patients in need, we provide free heart surgeries, focusing on
              treating congenital heart defects and other critical conditions.
              Our skilled surgeons are committed to delivering the best outcomes
              for all patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
