'use client'

import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import { DefaultCellComponentProps } from 'payload'

export const LottieCell = ({cellData}: DefaultCellComponentProps) => {

  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (cellData) {
      try {
        const parsed = JSON.parse(cellData);
        setAnimationData(parsed);
      } catch (e) {
        setAnimationData(null);
      }
    } else {
      setAnimationData(null);
    }
  }, [cellData]);

  if (!animationData) {
    return <span className="text-gray-400">Nothing</span>;
  }

  return (
    <div style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieCell;
