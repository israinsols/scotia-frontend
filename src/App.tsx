import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'signin'>('home');

  // Sync route with URL hash if available
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#signin' || window.location.pathname === '/signin') {
        setCurrentPage('signin');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToSignIn = () => {
    window.location.hash = 'signin';
    setCurrentPage('signin');
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  if (currentPage === 'signin') {
    return <SignInPage onNavigateHome={navigateToHome} />;
  }

  return <HomePage onOpenSignIn={navigateToSignIn} />;
}

export default App;
