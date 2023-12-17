import React from 'react';
import { useRouter } from 'next/router';
import { Button, Icon, Label, Card, Loader, Image } from 'semantic-ui-react';
import styles from '@/styles/Dog.module.css';

export default function DogNamePage(){

    const [dogInfo, setDogInfo] = React.useState({ loading: true })
    const router = useRouter();

    React.useEffect(function(){
        if(dogInfo.name !== router.query.name && router.query.name){
            console.log('Load in dog info');
            console.log(router.query.name);
            fetch(`https://dog.ceo/api/breed/${router.query.name}/images/random`)
            .then(r=> r.json())
            .then(function (r){
                setDogInfo(r);
                console.log(r);
                console.log(dogInfo);
            })
            .catch((e)=>setDogInfo({loading: false, name: router.query.name}));
        }
    }, [router.query.name, dogInfo.name]);

    return (
        <>
            <div className={styles.dog}>
                <Card>
                    <h1>Dog Name: {router.query.name}</h1>
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
                            {(dogInfo.status !== "success")
                            ? <h2>Searching for Dog</h2>
                        : <h2>Dog Not Found</h2>
                        }
                        </>
                        )
                    }
                    <div className='likeBtn'>
                        <Button as='div' labelPosition='right'>
                            <Button color='red'>
                                <Icon name='heart' />
                                Like
                            </Button>
                            <Label as='a' basic color='red' pointing='left'>
                                2,048
                            </Label>
                        </Button> 
                    </div>
                </Card>
            </div>
        </>
    )
}