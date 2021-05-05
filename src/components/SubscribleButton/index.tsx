import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

interface ISubscribleButtonProps {
  priceId: string;
}

export function SubscribleButton({ priceId }: ISubscribleButtonProps) {
  const [session] = useSession();

  async function handleSubscrible() {
    if (!session) {
      signIn('github');
      return;
    }
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      console.log(sessionId)

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribleButton}
      onClick={handleSubscrible}
    >
      Subscribe Now
    </button>
  );
}
