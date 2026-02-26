"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, Clock, Award } from "lucide-react";

interface Module {
  title: string;
  duration: string;
  topics: string[];
}

interface CourseAccordionProps {
  modules: Module[];
  courseName: string;
}

export default function CourseAccordion({ modules, courseName }: CourseAccordionProps) {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {modules.map((module, index) => (
        <motion.div
          key={index}
          className={`accordion-item ${openModule === index ? "open" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            className="accordion-header"
            onClick={() => toggleModule(index)}
            aria-expanded={openModule === index}
          >
            <div className="accordion-title">
              <span className="module-number">Módulo {index + 1}</span>
              <h3>{module.title}</h3>
            </div>
            <div className="accordion-meta">
              <span className="module-duration">
                <Clock size={14} />
                {module.duration}
              </span>
              <motion.div
                className="accordion-icon"
                animate={{ rotate: openModule === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {openModule === index && (
              <motion.div
                className="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="accordion-body">
                  <ul className="topics-list">
                    {module.topics.map((topic, topicIndex) => (
                      <motion.li
                        key={topicIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: topicIndex * 0.05 }}
                      >
                        <BookOpen size={14} />
                        {topic}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
