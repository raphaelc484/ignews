import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="google.com" className={styles.active}>
            Home
          </a>
          <a href="google.com">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
