// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import required modules
// import {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Keyboard,
//   Autoplay,
// } from "swiper/modules";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const imageArray = [
//     {
//       id: 1,
//       image:
//         "https://i.pinimg.com/564x/4b/46/ee/4b46ee69c7f2b7cecf402bcbc91eb08e.jpg",
//     },
//     {
//       id: 2,
//       image:
//         "https://i.pinimg.com/564x/8c/77/2a/8c772a754abaf5c029e9960dc9528ce8.jpg",
//     },
//     {
//       id: 3,
//       image:
//         "https://i.pinimg.com/564x/60/3f/62/603f62f18d84aded209c271631c782de.jpg",
//     },
//     {
//       id: 4,
//       image:
//         "https://i.pinimg.com/564x/cf/b9/ca/cfb9ca464975f14e8ea98f104ff1b8c4.jpg",
//     },
//     {
//       id: 5,
//       image:
//         "https://i.pinimg.com/564x/58/d3/7c/58d37c1062d576bceba41326da7751ad.jpg",
//     },
//   ];

//   return (
//     <div className="w-full h-screen bg-gradient-to-r from-[#373B44] to-[#4286f4] text-white">
//       <div className="w-4/5 h-full mx-auto flex justify-center items-center">
//         <div className="w-1/2 space-y-4 mr-4">
//           <h1 className="text-4xl text-left ">
//             CarePoint Camps: Simplifying Medical Camp Management
//           </h1>
//           <p>
//             Manage your medical camps effortlessly with CarePoint Camps. Our
//             comprehensive platform offers seamless registration, resource
//             planning, and real-time insights, ensuring that every camp runs
//             smoothly and efficiently. Focus on delivering exceptional care while
//             we take care of the logistics.
//           </p>
//           <div className="flex items-center gap-5">
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 rounded-xl">
//                 Login
//               </button>
//             </Link>
//             <Link to="/availableCamps">
//               <button className="px-6 py-3 bg-orange-700 rounded-xl">
//                 Available Camps
//               </button>
//             </Link>
//           </div>
//         </div>
//         {/* carousel content */}
//         <div className="w-1/2">
//           <Swiper
//             cssMode={true}
//             navigation={true}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
//             className="mySwiper"
//           >
//             {imageArray.map((carousel) => (
//               <SwiperSlide
//                 key={carousel.id}
//                 className="w-full h-full rounded-xl"
//               >
//                 <img
//                   src={carousel.image}
//                   alt="hero section carousel"
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
