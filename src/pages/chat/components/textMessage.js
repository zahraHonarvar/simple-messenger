import React, { forwardRef } from 'react';
import styles from './textMessage.module.scss';

export default forwardRef(({ me, text }, ref) => {
  return (
    <li
      ref={ref}
      className={styles[me ? 'me' : '']}
    >
      {text}
    </li>
  )
});