import { PieChart, Pie, Cell, Legend } from "recharts";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { useContext } from "react";

const UserAnalytics = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [participant] = UseParticipant();

  // checking the user
  if (!user) {
    return (
      <div className="w-full h-full my-10 flex flex-col justify-center items-center">
        <p className="w-96 h-full loading loading-infinity loading-xl"></p>
        <h1 className="text-4xl">Loading Data...</h1>
      </div>
    );
  }
  // cusmot pie chart
  const COLORS = ["green", "orange"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Data for payment status distribution
  const pieChartData = [
    {
      name: "Paid",
      value: participant.filter((p) => p.paymentStatus === "Paid").length,
    },
    {
      name: "Pending Payment",
      value: participant.filter((p) => p.paymentStatus === "pay").length,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-sky-100 overflow-hidden">
      <div className="w-5/6 min-h-full mx-auto bg-CPC-ocean rounded-xl my-10 p-4">
        <h1 className="text-center text-2xl font-bold p-3 text-white uppercase">
          Mr.{user.displayName} Analytics
        </h1>
        <div className="flex flex-wrap items-center text-white">
          {/* Pie chart section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                formatter={(value) => {
                  if (value === "Paid") {
                    return (
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {value}
                      </span>
                    );
                  }
                  if (value === "Pending Payment") {
                    return (
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {value}
                      </span>
                    );
                  }
                  return value;
                }}
              />
            </PieChart>
          </div>
          {/* Description/Details section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold p-2 text-left sm:text-center">
              Participant Status Overview
            </h1>
            <p className="text-left p-2">
              Gain insight into the current status of camp participants with our
              comprehensive analytics dashboard. This section provides a clear
              visual breakdown of Payment Status and Confirmation Status,
              allowing you to easily track participant engagement. Monitor the
              proportion of attendees who have completed their payments and
              those awaiting confirmation, ensuring you stay on top of
              registration processes and camp readiness. This data helps
              streamline administrative decisions, optimize event management,
              and enhance overall participant experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
