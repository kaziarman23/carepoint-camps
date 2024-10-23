import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";
import Marquee from "react-fast-marquee";

const NotFound = () => {
  return (
    <section className="bg-black w-full h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  text-blue-700">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Something&#39;s missing.
          </p>
          <Marquee pauseOnHover="true" speed="80">
            <p className="my-10 text-4xl text-white">
              Sorry, we can&#39;t find that page. You&#39;ll find lots to
              explore on the home page.   
            </p>
          </Marquee>
          <Link to="/">
            <UseMoreDetailsBtn isCancel={true}>
              Back to Homepage
            </UseMoreDetailsBtn>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
