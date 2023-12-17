import React from 'react';
import '@/styles/globals.css'
import 'semantic-ui-css/semantic.css';
import {Menu,Icon,Input,Button} from 'semantic-ui-react';
import Link from 'next/link';
import {AppProvider} from '@/useHooks/useAppState';

export default function App({ Component, pageProps }) {

  const [dogSearch, setDogSearch] = React.useState('');

  function updateSearch(e, {value}) {
    setDogSearch(value);
  }

  return (
    <AppProvider>
      <Menu>
        <Menu.Item as={Link} href='/'>
          <Icon name='home'/>
          Home
        </Menu.Item>
        <Menu.Item>
          <Input name="dogSearch" onChange={updateSearch}></Input>
          <Button
            as={dogSearch.trim() !== '' ? Link : 'button'}
            href={dogSearch.trim() !== '' ? `/dogs/${dogSearch}` : null}
          >
            Search
          </Button>
        </Menu.Item>
      </Menu>
      <Component {...pageProps}/>
    </AppProvider>
  );
}
