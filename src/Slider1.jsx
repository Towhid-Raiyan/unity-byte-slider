import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaStar, FaHeart, FaSearch } from 'react-icons/fa';
import { RiExchangeFundsLine } from "react-icons/ri";

const Slider1 = () => {
    const slides = [
        {
            "products": [
                {
                    "name": "iPhone 15",
                    "price": "110",
                    "originalPrice": "140",
                    "offer": "4%",
                    "ratings": "1",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/Np9n015/i-Phone-15-Plus-blue-titanium.jpg"
                },
                {
                    "name": "Samsung s23",
                    "price": "80",
                    "ratings": "3",
                    "originalPrice": "130",
                    "offer": "5%",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/Vgkdkdb/Galaxy-S23-Green.jpg"
                },
                {
                    "name": "Airpods Max",
                    "price": "70",
                    "originalPrice": "0",
                    "offer": "0",
                    "ratings": "4",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/djkWBvf/image-6.webp"
                },
                {
                    "name": "Google Pixel Watch",
                    "price": "250",
                    "originalPrice": "310",
                    "offer": "6%",
                    "ratings": "2",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/pwzSLL5/Google-Pixel-Watch-1-1699.jpg"
                }
            ]

        },
        {
            "products": [
                {
                    "name": "Apple Watch Series 7",
                    "price": "210",
                    "originalPrice": "240",
                    "offer": "3%",
                    "ratings": "5",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/c2CRbXh/Alpine-Loop-Blue-3303.png"
                },
                {
                    "name": "Airpods Max 2",
                    "price": "250",
                    "originalPrice": "310",
                    "offer": "7%",
                    "ratings": "4",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/R2pdN2j/image-4.webp"
                },
                {
                    "name": "Google Pixel 8",
                    "price": "120",
                    "originalPrice": "0",
                    "offer": "0",
                    "ratings": "4",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/MZL9cr3/Pixel-8-Pro-Obsidian.jpg"
                },
                {
                    "name": "Samsung s23 ultra",
                    "price": "210",
                    "originalPrice": "0",
                    "offer": "0",
                    "ratings": "3",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa reiciendis cumque doloremque officia id unde doloribus, ipsam corrupti nesciunt cupiditate hic.",
                    "picture": "https://i.ibb.co/gMtjQG3/Galaxy-S23-Ultra-Graphite.jpg"
                }
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const renderStars = (rating) => {
        const roundedRating = Math.round(parseFloat(rating));
        const stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={`text-${i < roundedRating ? 'orange-500' : 'gray-500'}`}
                />
            );
        }

        return stars;
    };

    return (
        <div>
            <h2 className='text-4xl font-bold py-3 text-center text-orange-500'>First Slide</h2>
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-5 px-4 relative group'>
                <div className='w-full rounded-2xl bg-center bg-cover duration-500'>
                    <div className="grid grid-cols-2 gap-8">
                        {slides[currentIndex].products.map((product, productIndex) => (
                            <div
                                key={`${currentIndex}-${productIndex}`} // Using a unique key
                                className="relative group"
                                onMouseEnter={() => setHoveredProduct(`${currentIndex}-${productIndex}`)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div
                                    className="flex flex-col md:flex-row gap-8 items-center p-4 rounded-md overflow-hidden relative"
                                >
                                    <div className={`w-1/2 relative transition-opacity duration-300 ${hoveredProduct === `${currentIndex}-${productIndex}` ? 'bg-slate-700 opacity-70' : 'opacity-100'}`}>
                                        <img
                                            src={product.picture}
                                            alt={product.name}
                                            className={` transition-opacity duration-300 ${hoveredProduct === `${currentIndex}-${productIndex}` ? 'bg-slate-700 opacity-60' : 'opacity-100'}`}
                                        />
                                        <div className='absolute top-0 left-0 md:top-3 md:left-2 z-10'>
                                            {product.offer !== '0' && <div className="rounded-full p-1 md:p-2 md:ml-2 bg-orange-500">
                                                <h2 className="text-white text-xs md:text-lg">-{product.offer}</h2>
                                            </div>}
                                        </div>
                                        {hoveredProduct === `${currentIndex}-${productIndex}` && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-white">
                                                    <div className="flex items-center">
                                                        <div className="rounded-full p-2 bg-white">
                                                            <FaHeart className="text-gray-500 hover:text-orange-500 cursor-pointer" />
                                                        </div>
                                                        <div className="rounded-full ml-2 p-2 bg-white">
                                                            <RiExchangeFundsLine className="text-gray-500 hover:text-orange-500 cursor-pointer" />
                                                        </div>
                                                        <div className="rounded-full p-2 ml-2 bg-white">
                                                            <FaSearch className="text-gray-500 hover:text-orange-500 cursor-pointer" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-1/2 ">
                                        <div className="flex mb-2">{renderStars(product.ratings)}</div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <div className='flex gap-5 items-center'>
                                            <p className="text-orange-500 font-bold text-xl">${product.price}</p>
                                            <p className={`text-gray-500 font-bold text-base ${product.originalPrice == 0 ? 'hidden' : 'blog'}`}><del>${product.originalPrice}</del></p>
                                        </div>
                                        <p className="text-gray-500 hidden md:block">{product.description}</p>
                                        {hoveredProduct === `${currentIndex}-${productIndex}` && (
                                            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300">
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-orange-500'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-orange-500'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-orange-500' : 'text-gray-500'}`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider1;