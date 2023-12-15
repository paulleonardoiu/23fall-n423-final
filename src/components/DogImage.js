import React from 'react';
import { Popup, Button, Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import useAppState from '@/useHooks/useAppState';

export default function DogImage({id, src, children, onClick}){
    const appState = useAppState();

    return(
        <Grid.Column>
            <Image src={src}/>
        </Grid.Column>
    )
}