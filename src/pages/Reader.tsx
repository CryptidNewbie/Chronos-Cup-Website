import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { storyData } from '../data/storyContent';

const Reader: React.FC = () => {
    return (
        <Layout>
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-4xl mx-auto glass-panel p-10">
                    <Link to="/" className="text-gold hover:text-white mb-8 inline-block">&larr; Back to Home</Link>

                    <h1 className="text-4xl font-display font-bold mb-4">{storyData.title}</h1>
                    <h2 className="text-2xl text-white/60 mb-8">{storyData.subtitle}</h2>

                    <div className="space-y-8">
                        {storyData.routes.map(route => (
                            <div key={route.id} className="mb-12">
                                <h3 className={`text-2xl font-bold mb-4 ${route.color}`}>{route.title}</h3>
                                <div className="space-y-4">
                                    {route.chapters.map(chapter => (
                                        <div key={chapter.id} className="p-4 border border-white/10 rounded-lg bg-black/20 hover:bg-black/40 transition-colors flex gap-4">
                                            {chapter.image && (
                                                <img src={chapter.image} alt={chapter.title} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                                            )}
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-medium">{chapter.title}</span>
                                                    <span className="text-xs text-white/40 uppercase tracking-widest">{chapter.id}</span>
                                                </div>
                                                <p className="text-gray-400 mt-2 text-sm">{chapter.logline}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reader;
