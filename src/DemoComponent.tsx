import React from 'react';
import styles from './DemoComponent.scss';

const DemoComponent = () => {
  const renderContent = (name: string) => name;
  return (
    <div className={styles.container}>
      <p className={styles.bottom}>{renderContent('This is Demo Component.')}</p>
    </div>
  );
};
export default DemoComponent;
