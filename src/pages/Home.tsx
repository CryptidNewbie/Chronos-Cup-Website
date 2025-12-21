import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import TeaserCard from '../components/TeaserCard';
import ChapterList from '../components/ChapterList';
import Gallery from '../components/Gallery';
import { storyData } from '../data/storyContent';

const Home: React.FC = () => {
    const [activeRouteId, setActiveRouteId] = useState<string>('common');

    const activeRoute = storyData.routes.find(r => r.id === activeRouteId) || storyData.routes[0];

    return (
        <Layout>
            {/* Hero Section */}
            <section id="teaser" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative mb-20">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for Hero Video or Parallax Image */}
                    <img src={storyData.images.hero} alt="Hero" className="w-full h-full object-cover opacity-20 mask-image-gradient" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                </div>

                <div className="z-10 max-w-4xl px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold tracking-[0.3em] text-sm uppercase font-bold mb-4"
                    >
                        {storyData.tagline}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-8 text-glow leading-tight"
                    >
                        {storyData.title}
                        <span className="block text-2xl md:text-3xl font-light text-white/60 mt-2 italic">{storyData.subtitle}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        {storyData.blurb}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#paths" className="glass-button">
                            CHOOSE A PATH
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Routes/Paths Section */}
            <section id="paths" className="py-20 mb-20 scroll-mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold mb-2">The Three Paths</h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px] items-stretch justify-center px-4">
                    {storyData.routes.filter(r => r.id !== 'common').map((route) => (
                        <TeaserCard
                            key={route.id}
                            route={route}
                            isActive={activeRouteId === route.id}
                            onClick={() => setActiveRouteId(route.id)}
                        />
                    ))}
                </div>
            </section>

            {/* Chapter Interaction Section */}
            <section id="chapters" className="py-20 max-w-6xl mx-auto px-4 min-h-[600px]">
                <motion.div
                    key={activeRouteId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-md font-mono text-gold mb-2">CURRENTLY VIEWING</h2>
                        <h3 className={`text-4xl font-display font-bold ${activeRoute.color}`}>{activeRoute.title}</h3>
                        <p className="text-white/50">{activeRoute.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="glass-panel p-8 sticky top-32">
                            <img src={activeRoute.image} alt={activeRoute.title} className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                            <h4 className="text-2xl font-bold mb-4 border-b border-white/10 pb-4">Route Synposis</h4>
                            <p className="text-gray-300 leading-loose italic text-lg">"{activeRoute.teaser}"</p>
                        </div>

                        <div>
                            <ChapterList chapters={activeRoute.chapters} color={activeRoute.color} />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-black/20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold mb-2">Visual Archive</h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Gallery />
                </div>
            </section>

            {/* Footer Call to Action */}
            <section className="text-center py-20 relative overflow-hidden">
                <div className="glass-panel max-w-4xl mx-auto p-12 relative z-10 mx-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to stop time?</h2>
                    <p className="mb-8 text-gray-400">The first chapters are waiting.</p>
                    <button className="glass-button bg-gold/10 hover:bg-gold/20 text-gold border-gold/30">
                        READ BOOK ONE
                    </button>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
