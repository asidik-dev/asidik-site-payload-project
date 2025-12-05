
import React, { useState } from 'react';
import Lottie from 'lottie-react';

export interface LottieFieldProps {
  json: string
}

const LottieView: React.FC<LottieFieldProps> = (props) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (props.json) {
      try {
        const parsed = JSON.parse(props.json);
        setAnimationData(parsed);
        setError('');
      } catch (e) {
        setError('Invalid JSON');
        setAnimationData(null);
      }
    } else {
      setAnimationData(null);
      setError('');
    }
  }, [props.json]);

  return (
    <div style={{
      height: '100%',
    }}>
      {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 'auto', height: '100%' }}
          />
      )}
    </div>
  );
};

export default LottieView;
