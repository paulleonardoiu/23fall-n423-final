import React from 'react';
import { Popup, Button, Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import useAppState from '@/useHooks/useAppState';
import styles from '@/styles/Dog.module.css';

export default function DogImage({id, src, children, onClick}){
    const appState = useAppState();

    return(
        <div className={styles.dogContainer}>
            <Image className={styles.dogImg} src={src}/>
        </div>
    )
}