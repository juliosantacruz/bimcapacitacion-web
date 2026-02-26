"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Filter } from "lucide-react";

interface Tutorial {
  slug: string;
  title: string;
  image: any;
  imageAlt: string;
  YTVideo: string;
}

interface TutorialGridProps {
  tutorials: Tutorial[];
}

const categories = ["Todos", "Arquitectura", "Estructuras", "MEP", "Familias"];

export default function TutorialGrid({ tutorials }: TutorialGridProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);

  const filteredTutorials = activeCategory === "Todos"
    ? tutorials
    : tutorials.filter(t => t.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      <div className="filters">
        <div className="filter-icon">
          <Filter size={20} />
        </div>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="tutorials-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredTutorials.map((tutorial, index) => {
            // const imageUrl = tutorial.image.src
            return (
              <motion.article
                key={tutorial.slug}
                className="tutorial-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <a href={`/tutoriales/${tutorial.slug}`}>
                  <div className="tutorial-thumbnail" style={{
                    backgroundImage: `url(${tutorial.image.src})`, backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}>
                    <div className="play-button">
                      <Play size={24} />
                    </div>
                  </div>
                  <div className="tutorial-content">
                    <h3>{tutorial.title}</h3>
                    <span className="tutorial-duration">
                      <Clock size={14} />
                      Video
                    </span>
                  </div>
                </a>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .filters {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-icon {
          display: flex;
          align-items: center;
          color: var(--text-muted);
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .tutorials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .tutorial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
        }

        .tutorial-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .tutorial-card a {
          display: block;
        }

        .tutorial-thumbnail {
          position: relative;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all var(--transition-fast);
        }

        .tutorial-card:hover .play-button {
          transform: scale(1.1);
          box-shadow: var(--shadow-lg);
        }

        .tutorial-content {
          padding: 1.25rem;
        }

        .tutorial-content h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tutorial-duration {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
