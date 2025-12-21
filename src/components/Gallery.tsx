import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/julian_intro.jpg', alt: 'The Bakery' },
    { src: '/images/kai_hands.jpg', alt: 'Precision' },
    { src: '/images/kai_kiss.jpg', alt: 'Passion' },
    { src: '/images/alistair_library.jpg', alt: 'The Library' },
    { src: '/images/alistair_magic.jpg', alt: 'Magic' },
];

const Gallery: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {images.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-square rounded-xl overflow-hidden glass-panel group cursor-pointer"
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-display tracking-widest uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                            {img.alt}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Gallery;
