"use client"

import { motion } from "motion/react"
import { Camera, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

export default function PhotoGallery({ onNext }) {

    const photos = [
        { id: 1, src: "./images/IMG_5277.JPG" },
        { id: 2, src: "./images/IMG_5339.JPG" },
        { id: 3, src: "./images/IMG_5354.JPG" },
        { id: 4, src: "./images/IMG_5414.JPG" },
        { id: 5, src: "./images/IMG_5425.JPG" },
        { id: 6, src: "./images/IMG_5656.JPG" },
        { id: 7, src: "./images/01.jpeg" },
        { id: 8, src: "./images/02.jpeg" },
        { id: 9, src: "./images/03.jpeg" },
        { id: 10, src: "./images/04.jpeg" },
        { id: 11, src: "./images/05.jpeg" },
        { id: 12, src: "./images/06.jpeg" },
        { id: 13, src: "./images/07.jpeg" },
        { id: 14, src: "./images/08.jpeg" },
        { id: 15, src: "./images/09.jpeg" },
        { id: 16, src: "./images/10.jpeg" },
    ]

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="text-center mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="mb-8"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                    <Camera className="w-16 h-16 text-pink-400 mx-auto" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                Moments with You 
                </h1>
                <p className="text-xl text-purple-300">Beautiful moments with My Wifey 📸</p>
            </motion.div>

            {/* Cube Gallery */}
            <div className="w-full max-w-sm mx-auto">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper h-[350px] md:h-[450px]" // adjust height as needed
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={photo.id}>
                            <img
                                src={photo.src || "/placeholder.svg"}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%]"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <span>One Last Thing</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}
