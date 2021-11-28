import { IonCol, IonLabel, IonRadio, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonPage, IonRadioGroup, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useState } from 'react';
import { QuestionList } from '../components/localVars';

import './Home.css';

const Home: React.FC = () => {
  const [ selected, setSelected ] = useState<string>('no-answer');
  const [ question, setQuestion ] = useState<string>(QuestionList[0].data);
  const [ i, seti ] = useState<number>(1);
  /* var j:number = 0; */

  const nextQBtnHandler = () => {
    console.log(i);
    if (i >= 16){
      console.log('maximum question');
    } else {
      seti(i+1);
      setQuestion(QuestionList[i].data);
    }
    console.log(i);
    
  }
  /* const prevQBtnHandler = () => {
    console.log(i);
    if (i <= 0){
      console.log('min question');
    } else {
      seti(i-1);
      setQuestion(QuestionList[i].data);
    }
    console.log(i);
  } */

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color = 'primary'>
          <IonTitle> SISTEM PAKAR TES KESEHATAN GIGI BERBASIS WEB </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
      

        <IonGrid class = 'ion-padding'>
          <IonRow>
            <IonCol> 
              <IonTitle> Pertanyaan </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol> 
              <IonTitle> { question } </IonTitle>
            </IonCol>
          </IonRow>
          <br/>
          <IonRow>
            <IonCol> 
              <IonRadioGroup onIonChange={e => setSelected(e.detail.value)}>
                <IonItem>
                  <IonLabel>True</IonLabel>
                  <IonRadio value="true" />
                </IonItem>
                <IonItem>
                  <IonLabel>Fale</IonLabel>
                  <IonRadio value="false" />
                </IonItem>
              </IonRadioGroup>
            </IonCol>
          </IonRow>
          <IonRow class = 'ion-padding'>
          
            <IonCol>
              <IonButton onClick = { nextQBtnHandler }>
                Next Question
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter  color = 'primary' >
        <IonToolbar color = 'primary'>
        <IonTitle> By : G9-SiskarTG_IF541_C</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
