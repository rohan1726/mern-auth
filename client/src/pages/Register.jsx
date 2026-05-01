import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const { login } = useAuth();
  const navigate  = useNavigate();

  const handleSubmit = async ({ name, email, password }) => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.post('/auth/signup', { name, email, password });
      login(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      type="register"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      onSwitch={() => navigate('/login')}
    />
  );
}
