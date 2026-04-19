import React from 'react';
import './PlanCard.css';

export default function PlanCard() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="plan-card glass-panel">
      <div className="plan-image-container">
        <div className="pulse-badge">🔥 Más Vendido</div>
        <div className="plan-image-price">
          <span className="old-price">$20</span>
          <span className="new-price">$10</span>
        </div>
        <img
          src={`${base}images/espalda_hd.png`}
          alt="Rutina Completa 5 Días"
          className="plan-image"
        />
        <div className="plan-image-overlay"></div>
      </div>

      <div className="plan-body">
        <h2 className="plan-title">RUTINA COMPLETA 5 DÍAS</h2>
        <p className="plan-subtitle">+ videos explicativos</p>

        <ul className="features-list">
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            5 días estructurados: tren superior + inferior
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
            Rutina de movilidad incluida
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            Tips semanales de motivación
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"></path><path d="M12 2v10l6-6"></path></svg>
            Tips de alimentación y estilo de vida
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Videos explicativos en HD
          </li>
        </ul>

        <p className="plan-note">
          ✨ Este programa está basado en <strong>MI RUTINA ACTUAL</strong> — es exactamente como yo entreno para mantenerme fuerte, balanceada y constante.
        </p>

        <button className="buy-button" onClick={() => alert('Próximamente: Integración con Stripe')}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
