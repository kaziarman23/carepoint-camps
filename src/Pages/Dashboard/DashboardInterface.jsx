import { Link } from "react-router-dom";
import DashboardAnimation from "../../CustomHooks/DashboardAnimation";
import UseAdmin from "../../CustomHooks/UseAdmin";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";
import UseShineBtn from "../../CustomHooks/UseShineBtn";

const DashboardInterface = () => {
  const [isAdmin, isAdminLoading] = UseAdmin();

  if (isAdminLoading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center flex-col gap-3">
        <p className="text-white w-80 h-80 loading loading-infinity loading-xl"></p>
        <h1 className="text-2xl text-white">Loading Data...</h1>
        <Link to="/">
          <UseMoreDetailsBtn isCancel={true}>
            Back to Home Page
          </UseMoreDetailsBtn>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full min-h-full md:w-4/5 mx-auto rounded-xl flex flex-col justify-center items-center p-4 text-white">
        <h1 className="text-xl font-bold xl:text-4xl">Dashboard Interface.</h1>

        <div className="flex flex-col justify-center items-center gap-2 xl:flex-row">
          <div className="w-full xl:w-2/3">
            {/* content based on userRole */}

            {isAdmin ? (
              <div className="admin-section mt-4 space-y-3">
                <h2 className="text-xl font-bold">Welcome, Admin!</h2>
                <p className="text-sm md:text-base">
                  At Carepoint Camps, you&#39;re at the heart of making a real
                  impact. As an admin, you have the tools to oversee the
                  organization and management of medical camps that bring
                  essential healthcare services to communities in need. From
                  coordinating volunteers to managing camp details, this
                  dashboard empowers you to ensure each camp runs smoothly and
                  reaches those who need it most. Use your insights and
                  leadership to keep our mission alive because every camp you
                  manage helps change lives.
                </p>
              </div>
            ) : (
              <div className="user-section mt-4 space-y-3">
                <h2 className="text-xl">Welcome to Carepoint Camps!</h2>
                <p className="text-sm md:text-base">
                  We’re glad to have you here. At Carepoint Camps, you have the
                  opportunity to make a difference by participating in medical
                  camps designed to bring care to those who need it most.
                  Through your dashboard, you can explore upcoming camps,
                  register for events, and track your involvement in making
                  healthcare accessible. Whether it&#39;s your first time or
                  you&#39;re a returning participant, we&#39;re excited to have
                  you as part of our community. Let&#39;s work together to
                  create a healthier tomorrow!
                </p>
              </div>
            )}
          </div>
          <div className="w-full my-16 flex justify-center items-end xl:w-1/3">
            <DashboardAnimation />
          </div>
        </div>
        <div className="w-full mt-16 relative">
          <UseShineBtn className="w-full text-5xl text-center mt-10 font-bold">
            Ready To Explore the Dashboard
          </UseShineBtn>
        </div>
      </div>
    </div>
  );
};

export default DashboardInterface;
