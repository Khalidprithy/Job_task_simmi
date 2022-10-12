import React from 'react';

import banner1 from '../../images/banner1.jpeg'
import banner2 from '../../images/banner2.jpeg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpeg'

const HomeCarousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active float-left w-full">
                    <img
                        src={banner1}
                        class="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div class="carousel-item float-left w-full">
                    <img
                        src={banner2}
                        class="block w-full"
                        alt="Camera"
                    />
                </div>
                <div class="carousel-item float-left w-full">
                    <img
                        src={banner3}
                        class="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
                <div class="carousel-item float-left w-full">
                    <img
                        src={banner4}
                        class="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon bg-secondary rounded-full inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon bg-secondary rounded-full inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeCarousel;