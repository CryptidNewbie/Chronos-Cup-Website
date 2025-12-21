import React from 'react';
import { motion } from 'framer-motion';
import type { Chapter } from '../data/storyContent';

interface ChapterListProps {
    chapters: Chapter[];
    color: string;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, color }) => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
                {chapters.map((chapter, index) => (
                    <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-panel p-4 flex items-center space-x-4 hover:bg-white/5 transition-colors border-l-2"
                        style={{ borderLeftColor: color.includes('kai') ? '#800020' : color.includes('alistair') ? '#7b00cc' : color.includes('salvatore') ? '#88b0d6' : '#fff' }}
                    >
                        <span className={`text-xs font-mono font-bold opacity-50 ${color}`}>{chapter.id}</span>
                        <h4 className="text-lg font-display font-medium text-white">{chapter.title}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ChapterList;
