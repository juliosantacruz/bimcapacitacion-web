"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Award, BookOpen } from "lucide-react";

export default function Hero() {
  const benefits = [
    { icon: Users, label: "+500 estudiantes", color: "#3b82f6" },
    { icon: Award, label: "Instructores certificados", color: "#10b981" },
    { icon: BookOpen, label: "Cursos actualizados", color: "#f59e0b" },
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
      </div>
      
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            BIM Certificación
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Aprende <span className="text-gradient">Revit y BIM</span> con expertos certificados
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Domina las herramientas líderes en modelado BIM. Cursos prácticos, 
            metodología progresiva y proyectos reales para tu portafolio profesional.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="/temarios" className="btn-primary">
              Ver cursos
              <ArrowRight size={18} />
            </a>
            <a href="/tutoriales" className="btn-secondary">
              <Play size={18} />
              Ver tutoriales
            </a>
          </motion.div>

          <motion.div
            className="hero-benefits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div 
                  className="benefit-icon" 
                  style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
                >
                  <benefit.icon size={20} />
                </div>
                <span>{benefit.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-card-body">
              <div className="revit-mockup">
                <div className="mockup-toolbar">
                  <span>Architecture</span>
                  <span>Structure</span>
                  <span className="active">MEP</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-sidebar" />
                  <div className="mockup-view" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-float-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="float-icon">✓</div>
            <div>
              <strong>Proyecto completado</strong>
              <span>Modelado 3D + Render</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: calc(100vh - var(--header-height));
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 4rem 0;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          opacity: 0.05;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.5;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 540px;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: var(--primary);
          color: white;
          font-weight: 600;
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 600;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .hero-benefits {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);
        }

        .benefit-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
        }

        .hero-visual {
          position: relative;
        }

        .hero-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .hero-card-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-card-dots {
          display: flex;
          gap: 0.5rem;
        }

        .hero-card-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--border-color);
        }

        .hero-card-dots span:first-child { background: #ef4444; }
        .hero-card-dots span:nth-child(2) { background: #f59e0b; }
        .hero-card-dots span:last-child { background: #10b981; }

        .hero-card-body {
          padding: 1.5rem;
        }

        .revit-mockup {
          aspect-ratio: 16/10;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .mockup-toolbar {
          display: flex;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .mockup-toolbar .active {
          color: var(--primary);
          font-weight: 600;
        }

        .mockup-content {
          display: flex;
          height: calc(100% - 40px);
        }

        .mockup-sidebar {
          width: 60px;
          background: var(--bg-card);
          border-right: 1px solid var(--border-color);
        }

        .mockup-view {
          flex: 1;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%);
        }

        .hero-float-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .float-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--success);
          color: white;
          border-radius: var(--radius-full);
          font-weight: bold;
        }

        .hero-float-card strong {
          display: block;
          font-size: 0.9375rem;
          color: var(--text-primary);
        }

        .hero-float-card span {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-description {
            margin: 0 auto 2rem;
          }

          .hero-cta {
            justify-content: center;
          }

          .hero-benefits {
            justify-content: center;
          }

          .hero-visual {
            display: none;
          }

          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
