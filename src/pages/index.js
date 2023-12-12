import React from 'react';
import { Grid, Button, Header, Image } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';

export default function Home(){

  const appState = useAppState();
  const [dogDetails, setDogDetails] = React.useState('');

  console.log(appState);

  function getDogImages(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(r => r.json())
    .then(r => {
      appState.updateAppState({dogImages: r});
    })
    .catch((e)=>{
      console.warn(e);
    })
  }


  return(
    <>
      <Grid columns='1'>
        <Grid.Column>
          <Header as='h1'>Dogs</Header>
        </Grid.Column>
        <Button content='Reload' icon='sync' color='green' onClick={getDogImages}/>
        <Grid.Row columns='5'>
        </Grid.Row>
      </Grid>
    </>
  );
}