import React from 'react';
import { useRouter } from 'next/router';
import { Button, Icon, Label, Card, Loader, Image } from 'semantic-ui-react';
import styles from '@/styles/Home.module.css';

export default function DogNamePage(){

    const [dogInfo, setDogInfo] = React.useState({ loading: true })
    const router = useRouter();

    React.useEffect(function () {
        const lowercaseName = router.query.name ? router.query.name.toLowerCase() : '';
        if (dogInfo.name !== lowercaseName && lowercaseName) {
          console.log('Load in dog info');
          console.log(lowercaseName);
          fetch(`https://dog.ceo/api/breed/${lowercaseName}/images/random`)
            .then((r) => r.json())
            .then(function (r) {
              setDogInfo(r);
              console.log(r);
              console.log(dogInfo);
            })
            .catch((e) => setDogInfo({ loading: false, name: lowercaseName }));
        }
      }, [router.query.name]);

    return (
        <>
            <div className={styles.siteContainer}>
                <div className={styles.container}>
                    <Card className={styles.dogGrid}>
                        <h1 className={styles.header}>Dog Breed: {router.query.name}</h1>
                        <Loader active={dogInfo.loading}/>
                        {
                            // if this statement
                            dogInfo.status == "success" ? (
                            // then do this; true
                             <>
                             <Image src={dogInfo.message}></Image>
                                
                            </>
                            ) : ( 
                            // else do this; false
                            <>
                                {(dogInfo.status != "success")
                                ? <h2>Searching for Dog</h2>
                            : <h2>Dog Not Found</h2>
                            }
                            </>
                            )
                        }
                    </Card>
                </div>
            </div>
        </>
    )
}