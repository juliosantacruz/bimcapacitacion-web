"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2015",
    title: "Fundación",
    description: "Iniciamos nuestra journey como centro de capacitación especializado en Revit.",
  },
  {
    year: "2016",
    title: "Expansión",
    description: "Lanzamos nuestros primeros cursos de Revit MEP y Arquitectura.",
  },
  {
    year: "2020",
    title: "Modalidad Online",
    description: "Implementamos plataforma virtual para alcanzar estudiantes en toda Latinoamérica.",
  },
  {
    year: "2021",
    title: "+300 Estudiantes",
    description: "Alcanzamos más de 300 estudiantes graduados en nuestros cursos.",
  },
  {
    year: "2023",
    title: "+500 Empresas",
    description: "Continuamos formando profesionales exitosos en la industria BIM.",
  },
];

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-line" />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <div className="timeline-content">
            <span className="timeline-year">{event.year}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
          <div className="timeline-dot">
            <div className="dot-inner" />
          </div>
        </motion.div>
      ))}

      <style>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          display: flex;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item.left {
          justify-content: flex-start;
          padding-right: calc(50% + 30px);
        }

        .timeline-item.right {
          justify-content: flex-end;
          padding-left: calc(50% + 30px);
        }

        .timeline-content {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          max-width: 380px;
          transition: all var(--transition-base);
        }

        .timeline-content:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .timeline-year {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .timeline-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .timeline-content p {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 1.5rem;
          width: 20px;
          height: 20px;
          background: var(--bg-card);
          border: 2px solid var(--primary);
          border-radius: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-inner {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-item.left,
          .timeline-item.right {
            justify-content: flex-start;
            padding-left: 60px;
            padding-right: 0;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-content {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
