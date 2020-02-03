import React from 'react';
import styles from './DemoComponent.scss';

const DemoComponent = () => {
  const renderContent = (name: string = 'This is Demo Component.'): string => name;
  return (
    <div className={styles.container}>
      <p className={styles.bottom}>{renderContent()}</p>
    </div>
  );
};
export default DemoComponent;
