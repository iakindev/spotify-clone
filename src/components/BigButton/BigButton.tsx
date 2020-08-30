import React from 'react';
import './BigButton.scss';
import '../../styles/Login.scss';
import { CircleSpinner } from 'react-spinners-kit';

const BigButton: React.FC<{
  text: string;
  className?: string;
  variation?: 'fill' | 'outline' | 'pop';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
}> = ({ text, className, variation, onClick, type, loading }) => {
  return (
    <button
      className={`bigbutton bigbutton-${variation} ${className || ''}`}
      onClick={onClick}
      type={type}
    >
      {loading ? <CircleSpinner /> : text}
    </button>
  );
};

BigButton.defaultProps = {
  variation: 'fill',
  loading: false,
};

export default BigButton;