
import React from 'react';
import Popup from 'reactjs-popup';
import styles from './takeButton.module.css'

export default function takeButtonLayout({ children }) {
    return (
        <Popup trigger={<div class={styles['take-btn']}>Take</div>} position="top right">
            <div>Coming soon...</div>
        </Popup>
    )
  }