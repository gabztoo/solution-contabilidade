import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast-notification ${visible ? 'show' : ''}`} role="alert" aria-live="assertive">
      <CheckCircle size={20} style={{ color: 'var(--color-accent)' }} />
      <span>{message}</span>
    </div>
  );
}
