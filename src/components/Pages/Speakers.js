import React from 'react';
import Slider from "react-slick";

const Speakers = () => {
    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>
            <h1 className='text-5xl font-thin text-center my-10'>Our Prominent Speakers</h1>
            <Slider {...settings}>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-32' src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" alt="" />
                    <h3>Sneha <br /> Vithalaniagarwal</h3>
                </div>

            </Slider>

        </div>
    );
};

export default Speakers;