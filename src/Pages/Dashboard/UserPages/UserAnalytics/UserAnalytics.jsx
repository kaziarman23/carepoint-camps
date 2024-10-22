import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { useContext } from "react";

const UserAnalytics = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [participant] = UseParticipant();

  // const participantInfo = participant.filter(
  //   (participant) => participant.userEmail === user.email
  // );

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
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
    {
      name: "Not Paid",
      value: participant.filter((p) => !p.paymentStatus).length,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="w-5/6 min-h-full mx-auto bg-orange-600 rounded-xl my-10 p-4">
      <h1 className='text-center text-2xl font-bold p-3 '>Mr.{user.displayName} Analytics</h1>
        <div className="flex items-center">
          <div className="w-1/2">
            <PieChart width={400} height={400}>
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
              <Legend />
            </PieChart>
          </div>
          <div className="w-1/2">
            <h1 className='text-2xl font-bold p-2 text-center'>Participant Status Overview</h1>
            <p>
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
