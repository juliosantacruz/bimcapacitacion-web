"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="success-message"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle size={48} className="success-icon" />
        <h3>¡Mensaje Enviado!</h3>
        <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
        <button
          className="btn-reset"
          onClick={() => setIsSuccess(false)}
        >
          Enviar otro mensaje
        </button>

        <style>{`
          .success-message {
            text-align: center;
            padding: 2rem;
          }

          .success-icon {
            color: var(--success);
            margin-bottom: 1rem;
          }

          .success-message h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .success-message p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
          }

          .btn-reset {
            padding: 0.75rem 1.5rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: var(--radius-md);
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-fast);
          }

          .btn-reset:hover {
            background: var(--primary-dark);
          }
        `}</style>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
          placeholder="Tu nombre"
        />
        {errors.name && (
          <span className="error-message">
            <AlertCircle size={14} />
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+52 55 1234 5678"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="course">Curso de interés</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Selecciona un curso</option>
          <option value="revit-basico">Revit Básico</option>
          <option value="revit-arquitectonico">Revit Arquitectónico</option>
          <option value="revit-mep">Revit MEP</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
          placeholder="¿En qué podemos ayudarte?"
          rows={5}
        />
        {errors.message && (
          <span className="error-message">
            <AlertCircle size={14} />
            {errors.message}
          </span>
        )}
      </div>

      <motion.button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="spinner" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar mensaje
          </>
        )}
      </motion.button>

      <style>{`
        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-family: inherit;
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-alpha);
        }

        input.error,
        textarea.error {
          border-color: var(--error);
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--text-muted);
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1rem;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-top: 0.375rem;
          font-size: 0.8125rem;
          color: var(--error);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          background: var(--primary);
          border: none;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--primary-dark);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
}
