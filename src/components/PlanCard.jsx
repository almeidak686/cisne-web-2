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
          src={`${base}images/rutina4dias.png`} 
          alt="Rutina Completa 4 Días" 
          className="plan-image"
        />
        <div className="plan-image-overlay"></div>
      </div>

      <div className="plan-body">
        <h2 className="plan-title">RUTINA COMPLETA 4 DÍAS</h2>
        <p className="plan-subtitle">+ videos explicativos</p>
        
        <ul className="features-list">
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Plan estructurado semanal
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Videos explicativos en HD
          </li>
          <li>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Rutina completa Torso + Pierna
          </li>
        </ul>

        <button className="buy-button" onClick={() => alert('Próximamente: Integración con Stripe')}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
