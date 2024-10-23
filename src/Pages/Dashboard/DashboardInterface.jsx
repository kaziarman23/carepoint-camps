import UseAdmin from "../../CustomHooks/UseAdmin";

const DashboardInterface = () => {
  const [isAdmin] = UseAdmin();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5 h-80 mx-auto rounded-xl bg-[#5d4aaf]  flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        {/* content based on userRole */}
        {isAdmin ? (
          <div className="admin-section mt-4 space-y-3 text-white">
            <h2 className="text-xl">Welcome, Admin!</h2>
            <p className="">
              At Carepoint Camps, you&#39;re at the heart of making a real
              impact. As an admin, you have the tools to oversee the
              organization and management of medical camps that bring essential
              healthcare services to communities in need. From coordinating
              volunteers to managing camp details, this dashboard empowers you
              to ensure each camp runs smoothly and reaches those who need it
              most. Use your insights and leadership to keep our mission alive
              because every camp you manage helps change lives.
            </p>
          </div>
        ) : (
          <div className="user-section mt-4 space-y-3 text-white">
            <h2 className="text-xl">Welcome to Carepoint Camps!</h2>
            <p className="">
              We’re glad to have you here. At Carepoint Camps, you have the
              opportunity to make a difference by participating in medical camps
              designed to bring care to those who need it most. Through your
              dashboard, you can explore upcoming camps, register for events,
              and track your involvement in making healthcare accessible.
              Whether it&#39;s your first time or you&#39;re a returning
              participant, we&#39;re excited to have you as part of our
              community. Let&#39;s work together to create a healthier tomorrow!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardInterface;
