import { signIn, signOut, useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton = () => {
  const [session] = useSession();
  const [signInButtonText, setSignInButtonText] = useState('Entrar com GitHub');
  const [signOutButtonText, setSignOutButtonText] = useState('');

  function handleLogIn() {
    setSignInButtonText('por favor aguarde...');
    signIn('github');
  }

  function handleLogOut() {
    setSignOutButtonText('por favor aguarde...');
    signOut();
  }

  useEffect(() => {
    if (session) {
      setSignOutButtonText(session.user.name);
    }
  }, [session]);

  return session ? (
    <button
      className={styles.signInButton}
      type="button"
      onClick={handleLogOut}
    >
      <FaGithub color="#04d361" />
      {signOutButtonText}
      <FiX className={styles.closeIcon} color="#a8a8b3" />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={handleLogIn}
    >
      <FaGithub color="#a8a8b3" />
      {signInButtonText}
    </button>
  )
}