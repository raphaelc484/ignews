import styles from './styles.module.scss';

interface ISubscribleButtonProps {
  priceId: string;
}

export function SubscribleButton({ priceId }: ISubscribleButtonProps) {
  return (
    <button type="button" className={styles.subscribleButton}>
      Subscribe Now
    </button>
  );
}
