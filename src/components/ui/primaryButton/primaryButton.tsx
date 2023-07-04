'use client';

import styles from './primaryButton.module.css';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  outlined?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  onClick,
  href,
  outlined,
  className,
  type,
  disabled,
}: PrimaryButtonProps) => {
  const handleClick = () => {
    if (href) window.open(href, '_blank');
  };

  return (
    <button
      className={
        outlined
          ? `${styles.primaryButton} ${styles.outlined} ${className}`
          : `${styles.primaryButton} ${styles.filled} ${className}`
      }
      onClick={href ? handleClick : onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
