import React from 'react';
import { Grid, Button, Header, Image } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';

export default function Home(){

  const appState = useAppState();
  const [dogLink, setDogLink] = React.useState('');

  // console.log(appState.dogImages.message);
  console.log(dogLink);

  function getDogImages(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(r => {
      appState.updateAppState({dogImages: r});
      setDogLink(appState.dogImages.message);
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
          <DogImage src={dogLink}></DogImage>
          {/* {dogLink.forEach((dogUrl) => {
            return <DogImage key={dogUrl} src={dogUrl}></DogImage>
          }
          )} */}
        </Grid.Row>
      </Grid>
    </>
  );
}