import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UsePayment from "../../../../CustomHooks/UsePayment";

const UserPaymentHistory = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [payment] = UsePayment();

  // filtering data
  const filteredpaymentData = payment.filter(
    (payment) => payment.email === user.email
  );

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 min-h-full mx-auto bg-orange-600 my-10 rounded-xl p-4">
        <h1 className="text-2xl text-center p-4 font-bold text-white">
          Payment History
        </h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white uppercase">
                <th>SL:</th>
                <th>Camp Name</th>
                <th>Fees</th>
                <th>Email</th>
                <th>Date</th>
                <th>Transection Id</th>
              </tr>
            </thead>
            <tbody>
              {filteredpaymentData.map((payment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{payment.campName}</td>
                  <td>{payment.price}</td>
                  <td>{payment.email}</td>
                  <td>{payment.date}</td>
                  <td>{payment.transectionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
