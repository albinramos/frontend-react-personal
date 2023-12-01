import React from 'react';
import { services } from '../../Data';
import { FaArrowRight } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

import './services.css';

const Services = () => {
    return(
       <section className="services section" id="services">
            <h2 className="section__title">
                Trabajos Desarrollados
            </h2>
            <p className='section__subtitle'>
            </p>

            <Swiper 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        /* Dentro del Swiper, se utiliza el método map para iterar sobre el array services y renderizar cada servicio como un SwiperSlide */
        
        modules={[Pagination]} className="services__container container mySwiper">
                {services.map(({name, title, description}, index) => {
                    return (
                        <SwiperSlide className="services__item card card-one" key={index}>
                            <span className="services__subtitle text-cs">{name}</span>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>  
       </section>
    )
}

export default Services;