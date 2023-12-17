import React from 'react';
import { Grid, Button, Header, Image } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home(){

  const appState = useAppState();
  const [dogLink, setDogLink] = React.useState('');

  // console.log(appState.dogImages.message);
  // console.log(dogLink);
  // console.log(appState);

  function getDogImages(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(r => {
      appState.updateAppState({dogImages: r});
      setDogLink(r.message);
    })
    .catch((e)=>{
      console.warn(e);
    })
  }

  // function dogPage(){

  // }


  return(
    <>
      <div className={styles.siteContainer}>
        
        <div className={styles.container}>
          <Grid className={styles.dogGrid} textAlign="center" columns='1'>
            <Grid.Column>
              <Header textAlign="center" as='h1'>Dogs</Header>
            </Grid.Column>
            <Button content='Reload' icon='sync' color='green' onClick={getDogImages}/>
            <Grid.Row>
              <DogImage src={dogLink} ></DogImage>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </>
  );
}