import { useState } from 'react';

const styles = {
  overlay: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '1rem',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  logo: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  logoIcon: {
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a2e',
    margin: '0 0 4px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
  },
  field: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    color: '#1a1a2e',
  },
  button: {
    width: '100%',
    padding: '13px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '0.5rem',
    transition: 'opacity 0.2s',
  },
  error: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    marginBottom: '1rem',
  },
  link: {
    textAlign: 'center',
    marginTop: '1.25rem',
    fontSize: '14px',
    color: '#6b7280',
  },
  linkAnchor: {
    color: '#667eea',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default function AuthForm({ type, onSubmit, loading, error, onSwitch }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit  = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h1 style={styles.title}>{type === 'login' ? 'Welcome back' : 'Create account'}</h1>
          <p style={styles.subtitle}>{type === 'login' ? 'Sign in to your account' : 'Join us today'}</p>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={submit}>
          {type === 'register' && (
            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              <input
                style={styles.input}
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Rohan Sharma"
                required
              />
            </div>
          )}
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handle}
              placeholder="you@example.com"
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              name="password"
              value={form.password}
              onChange={handle}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          <button style={styles.button} type="submit" disabled={loading}>
            {loading ? 'Please wait...' : type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={styles.link}>
          {type === 'login' ? (
            <>Don't have an account? <span style={styles.linkAnchor} onClick={onSwitch}>Sign up</span></>
          ) : (
            <>Already have an account? <span style={styles.linkAnchor} onClick={onSwitch}>Sign in</span></>
          )}
        </div>
      </div>
    </div>
  );
}
