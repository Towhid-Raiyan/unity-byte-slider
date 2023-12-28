import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { FaStar } from 'react-icons/fa';
import { IoRemoveOutline } from "react-icons/io5";

const Slider2 = () => {
    const slides = [
        {
            "products": [
                {
                    "name": "iPhone 15",
                    "price": "110",
                    "originalPrice": "130",
                    "ratings": "5",
                    "picture": "https://i.ibb.co/Np9n015/i-Phone-15-Plus-blue-titanium.jpg"
                },
                {
                    "name": "Samsung s23",
                    "price": "80",
                    "originalPrice": "130",
                    "ratings": "2",
                    "picture": "https://i.ibb.co/Vgkdkdb/Galaxy-S23-Green.jpg"
                },
                {
                    "name": "Airpods Max",
                    "price": "70",
                    "originalPrice": "0",
                    "ratings": "4",
                    "picture": "https://i.ibb.co/djkWBvf/image-6.webp"
                }

            ]

        },
        {
            "products": [
                {
                    "name": "Apple Watch Series 7",
                    "price": "210",
                    "originalPrice": "0",
                    "ratings": "4",
                    "picture": "https://i.ibb.co/RvQ0GqS/image-7.webp"
                },
                {
                    "name": "Airpods Max 2",
                    "price": "250",
                    "originalPrice": "0",
                    "ratings": "5",
                    "picture": "https://i.ibb.co/R2pdN2j/image-4.webp"
                },
                {
                    "name": "Google Pixel 8",
                    "price": "120",
                    "originalPrice": "130",
                    "ratings": "2",
                    "picture": "https://i.ibb.co/MZL9cr3/Pixel-8-Pro-Obsidian.jpg"
                }
            ]
        },
        {
            "products": [
                {
                    "name": "Apple Watch Series 8",
                    "price": "250",
                    "originalPrice": "330",
                    "ratings": "4.4",
                    "picture": "https://i.ibb.co/bJvJyCN/image-9.webp"
                }
                ,
                {
                    "name": "Samsung s23 ultra",
                    "price": "210",
                    "originalPrice": "0",
                    "ratings": "3.8",
                    "picture": "https://i.ibb.co/gMtjQG3/Galaxy-S23-Ultra-Graphite.jpg"
                },
                {
                    "name": "Google Pixel 8",
                    "price": "120",
                    "originalPrice": "0",
                    "ratings": "2.6",
                    "picture": "https://i.ibb.co/MZL9cr3/Pixel-8-Pro-Obsidian.jpg"
                }
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [startX, setStartX] = useState(null);

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
    const handleMouseDown = (event) => {
        setStartX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (startX !== null) {
            const deltaX = event.clientX - startX;
            if (deltaX > 50) {
                // Swipe right, go to the previous slide
                setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
                setStartX(null);
            } else if (deltaX < -50) {
                // Swipe left, go to the next slide
                setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
                setStartX(null);
            }
        }
    };

    const handleMouseUp = () => {
        setStartX(null);
    };
    return (

        <div className='mt-3 md:mt-9 container mx-auto max-w-[480px] p-3'>
            <div>
                <h2 className='text-4xl font-bold py-9 text-center text-orange-500'>Second Slide</h2>
                <div className='flex justify-between items-center'>
                    <h3 className='text-2xl font-semibold'>Best Sellers</h3>
                    <div className='flex top-4 justify-center py-2 items-center'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-orange-500' : 'text-gray-500'}`}
                            >

                                {currentIndex === slideIndex ? <IoRemoveOutline style={{ fontSize: '50px' }} /> : <RxDotFilled />}
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div
                    className='mt-3 md:mt-9 container mx-auto max-w-[480px] p-3'
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className='max-w-[480px] h-[600px] w-full m-auto py-5 px-4 relative group'>
                        <div className='w-full rounded-2xl bg-center duration-500'>
                            <div className="grid grid-cols-1 gap-8">
                                {slides[currentIndex].products.map((product, productIndex) => (
                                    <div
                                        key={`${currentIndex}-${productIndex}`} // Using a unique key
                                        className="relative group"
                                        onMouseEnter={() => setHoveredProduct(`${currentIndex}-${productIndex}`)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                    >
                                        <div
                                            className="flex items-center p-2 rounded-md overflow-hidden relative"
                                        >
                                            <div className="w-1/3 relative">
                                                <img
                                                    src={product.picture}
                                                    alt={product.name}
                                                    className={`mb-2  rounded-lg transition-opacity duration-300 ${hoveredProduct === `${currentIndex}-${productIndex}` ? 'opacity-60' : 'opacity-100'}`}
                                                />
                                            </div>
                                            <div className="w-1/2 ">
                                                <div className="flex mb-2">{renderStars(product.ratings)}</div>
                                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                                <div className='flex gap-5 items-center'>
                                                    <p className="text-orange-500 font-bold text-xl">${product.price}</p>
                                                    <p className={`text-gray-500 font-bold text-base ${product.originalPrice == 0 ? 'hidden' : 'blog'}`}><del>${product.originalPrice}</del></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </div>

    );
};

export default Slider2;