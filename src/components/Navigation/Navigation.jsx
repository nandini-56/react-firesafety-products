import React from 'react';
import styles from './Navigation.module.css';



const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="image"/>
      </div>
      <div className={styles.product_button}>
        <p className={styles.product_button_text} style={{color:'black' , fontWeight:'700', lineHeight:'24px'}}>Products</p> 
      </div>
      <div className={styles.contact_button}>
        <p className={styles.contact_button_text} style={{fontWeight:'700', lineHeight:'24px'}}>Contact Us</p>
      </div>
    </div>
  )
}

export default Navigation

// <div>
    //     <div className="logo">
    //       <img src="/images/logo.png" alt="image"/>
    //     </div>
    //     <div className=''>
          
    //     </div>
    //   </nav>
    // </div>