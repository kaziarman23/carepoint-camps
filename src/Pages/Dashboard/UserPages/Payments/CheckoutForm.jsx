import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { AuthContext } from "../../../../Auth/AuthProvider";
import moment from "moment";
import { useNavigate } from "react-router";
import UsePrimaryBtn from "../../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

const CheckoutForm = ({ price, campName, id }) => {
  // state
  const [clientSecret, setClientSecret] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const navigate = useNavigate();

  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axiosPublic.post("/create-payment-intent", { price }).then((res) => {
      //   console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosPublic, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setPaymentError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setPaymentError("");
    }

    // confirm card
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "no-email@domain.com",
          },
        },
      });

    // handling confirm card error
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          participantId: id,
          email: user.email,
          campName: campName,
          price: price,
          date: moment().format("lll"),
          transectionId: paymentIntent.id,
        };
        axiosPublic.post(`/payments`, paymentInfo).then((res) => {
          console.log("sending payment data to the server", res.data);

          // updating  paymentStatus
          const updatedStatus = {
            paymentStatus: "Paid",
          };
          axiosPublic
            .put(`/participants/payment/${id}`, updatedStatus)
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount > 0) {
                // navigating the user
                navigate("/dashboard/userPaymentHistory");

                // showing an alert
                toast.success("Payment Successfull");
              }
            })
            .catch((error) => {
              console.log(error);

              // showing an alert
              toast.error(error);
            });
        });
      }
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <UsePrimaryBtn
        type="submit"
        isSubmit={true}
        className="mt-5"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </UsePrimaryBtn>
      {paymentError && (
        <h5 className="text-red-500 text-base">{paymentError}</h5>
      )}
    </form>
  );
};

export default CheckoutForm;
