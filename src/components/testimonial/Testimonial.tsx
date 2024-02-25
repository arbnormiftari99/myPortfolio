// import './Testimonial.css'
// import { TestimonialData } from './TestimonialData'

// // import Swiper core and required modules
// // import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/swiper.min.css'
// // import 'swiper/components/pagination/pagination.min.css'

// const Testimonial = () => {
//   return (
//     <section id="testimonials">
//       <h5>
//         Review from clients
//       </h5>
//       <h2>
//         Testimonial
//       </h2>
//       <Swiper 
//       className="container testimonials__container"
//       // install Swiper modules
//       modules={[]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{
//         dynamicBullets: true,
//       }}
//       >
//         <div>
//         {
//           TestimonialData.map(({avatar, name, review}, index) => {
//             return (
//               <div>asd</div>
//         // <SwiperSlide key={index} className="testimonial">
//         //   <div>
//         //         <div className="client__avatar">
//         //           <img src={avatar} alt={name} />
//         //         </div>
//         //         <h5 className="client__name">
//         //           {name}
//         //         </h5>
//         //         <small className="client__review">
//         //           {review}
//         //         </small>
//         //        </div>
//         //       </SwiperSlide>
//             )
//           }
//         )
         
//         }
//         </div>
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonial