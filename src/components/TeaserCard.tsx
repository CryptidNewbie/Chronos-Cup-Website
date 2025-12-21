import React from 'react';
import { motion } from 'framer-motion';
import type { Route } from '../data/storyContent';

interface TeaserCardProps {
    route: Route;
    isActive: boolean;
    onClick: () => void;
}

const TeaserCard: React.FC<TeaserCardProps> = ({ route, isActive, onClick }) => {
    return (
        <motion.div
            className={`relative h-[500px] w-full md:w-1/3 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
        ${isActive ? 'flex-[1.5] ring-2 ring-gold/50 shadow-2xl skew-x-0' : 'flex-1 opacity-60 hover:opacity-90 grayscale hover:grayscale-0'}`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            layout
        >
            <img
                src={route.image}
                alt={route.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className={`text-3xl font-display font-bold mb-2 uppercase tracking-widest ${route.color} drop-shadow-lg`}>
                    {route.title.replace(" Route", "")}
                </h3>
                <h4 className="text-lg text-white/80 font-serif italic mb-4">{route.subtitle}</h4>

                {isActive && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-gray-200 leading-relaxed max-w-sm"
                    >
                        {route.teaser}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

export default TeaserCard;
