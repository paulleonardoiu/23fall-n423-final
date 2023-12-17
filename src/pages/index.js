// Inside your Home component
import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const appState = useAppState();
  const [dogData, setDogData] = React.useState({});

  function getDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json())
      .then((data) => {
        const { message, status } = data;
        if (status === 'success') {
          const breed = message.split('/')[4]; // Extract the breed from the URL
          setDogData({ breed, image: message });
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  return (
    <>
      <div className={styles.siteContainer}>
        <div className={styles.container}>
          <Grid className={styles.dogGrid} textAlign="center" columns="1">
            <Grid.Column>
              <Header textAlign="center" as="h1">
                Random Dogs
              </Header>
            </Grid.Column>
            <Button content="Reload" icon="sync" color="green" onClick={getDogImages} />
            <Grid.Row className={styles.row}>
              <DogImage src={dogData.image}></DogImage>
            </Grid.Row>
            <Grid.Row className={styles.row}>
              <p className={styles.dogBreed}>{dogData.breed}</p>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </>
  );
}
