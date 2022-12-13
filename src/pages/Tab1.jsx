import { IonActionSheet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonButton } from '@ionic/react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel
} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { Virtuoso } from 'react-virtuoso';
import { useState } from 'react';
const Tab1 = () => {

  const [anime,setanime] = useState()

  async function getanime(){
    console.log("name")
    await fetch("https://gogoanime.consumet.org/recent-release")
    .then((response) => response.json())
    .then((animelist) => setanime(animelist));

  }


  function kl(){
    console.log(anime)
  }
  return (

      <IonPage>
    <IonContent>
      <Virtuoso
        style={{ height: '100%' }}
      >
        <IonCard>
      <IonHeader><h1>name</h1></IonHeader>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard><IonCard>
      <IonHeader><h1>name</h1></IonHeader>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
      </Virtuoso>
    </IonContent>
    
    
    <IonButton style={{color:"#526544",border:"20px"}} onClick={getanime}>dsd</IonButton>
    <IonButton style={{color:"#526544",border:"20px"}} onClick={kl}>df</IonButton>
    
    </IonPage>
    
  );
};

export default Tab1;
