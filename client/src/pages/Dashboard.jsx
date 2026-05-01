import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f0f2f5',
    padding: '2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
    padding: '1rem 1.5rem',
    borderRadius: '14px',
    marginBottom: '2rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  brandDot: {
    width: '32px',
    height: '32px',
    borderRadius: '9px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  brandName: {
    fontWeight: '700',
    fontSize: '16px',
    color: '#1a1a2e',
  },
  logoutBtn: {
    padding: '8px 18px',
    background: 'transparent',
    border: '1.5px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#6b7280',
    cursor: 'pointer',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '2.5rem',
    color: '#fff',
    marginBottom: '1.5rem',
  },
  heroGreet: {
    fontSize: '13px',
    opacity: 0.8,
    marginBottom: '6px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  heroName: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  heroSub: {
    fontSize: '14px',
    opacity: 0.75,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  card: {
    background: '#fff',
    borderRadius: '14px',
    padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  cardLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '8px',
  },
  cardValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a2e',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    background: '#ecfdf5',
    color: '#059669',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: '600',
  },
};

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navBrand}>
          <div style={styles.brandDot} />
          <span style={styles.brandName}>MERN Auth</span>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </nav>

      <div style={styles.hero}>
        <p style={styles.heroGreet}>Dashboard</p>
        <h1 style={styles.heroName}>Hello, {user.name} 👋</h1>
        <p style={styles.heroSub}>You are successfully authenticated.</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Name</p>
          <p style={styles.cardValue}>{user.name}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Email</p>
          <p style={styles.cardValue}>{user.email}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Status</p>
          <span style={styles.badge}>Authenticated</span>
        </div>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Auth Method</p>
          <p style={styles.cardValue}>JWT · 7 days</p>
        </div>
      </div>
    </div>
  );
}
