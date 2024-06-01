import React, { ReactNode } from 'react';
// import styles from '../../styles/Button.module.css'; // Import styles from the CSS module

interface NeoPopTiltedButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const NeoPopTiltedButton: React.FC<NeoPopTiltedButtonProps> = ({ onClick, children }) => {
  // const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   (event.target as HTMLButtonElement).classList.add(styles.down); // Use styles from the CSS module
  // };

  // const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   (event.target as HTMLButtonElement).classList.remove(styles.down); // Use styles from the CSS module
  // };

  // const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
  //   (event.target as HTMLButtonElement).classList.add(styles.down); // Use styles from the CSS module
  // };

  // const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
  //   (event.target as HTMLButtonElement).classList.remove(styles.down); // Use styles from the CSS module
  // };

  return (
      <button className="bg-dark min-w-[120px] md:min-w-[180px] text-white md:text-xl px-6 py-2 md:py-4 rounded-full" onClick={onClick}>{children}</button>
    // <div className={styles.cardContainer}> {/* Use styles from the CSS module */}
    //   <div className={styles.btnContainer}> {/* Use styles from the CSS module */}
    //     <div className={styles.btnMain}> {/* Use styles from the CSS module */}
    //       <button
    //         className={styles.btn3d} 
    //         onMouseDown={handleMouseDown}
    //         onMouseUp={handleMouseUp}
    //         onTouchStart={handleTouchStart}
    //         onTouchEnd={handleTouchEnd}
    //         onClick={onClick} // Handle onClick event
    //       >
    //         {children}
    //       </button>
    //     </div>
    //     <div className={styles.shadow}></div> 
    //     {/* Use styles from the CSS module */}
    //   </div>
    // </div>
  );
};

export default NeoPopTiltedButton;
