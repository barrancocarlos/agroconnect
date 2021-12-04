import { IonButtons, IonCard, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Page.css';

const Home: React.FC = () => {

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">         
        </IonHeader>
        <IonText>
          <p className="sub-title">Seja bem-vindo!</p>
          <p className="title"><span className="green-title">AgroConnect</span> conectividade na palma de sua mão!</p>          
        </IonText>
        <IonImg src="/assets/img/home-pic.jpg" alt="home" className="home-pic" />      
        <IonGrid>
          <IonRow>
            <IonCol><IonCard routerLink="/products" className="home-card"><IonImg src="/assets/img/button-veg.jpg" alt="button" className="home-button" /></IonCard> </IonCol>
            <IonCol><IonCard routerLink="/partners" className="home-card"><IonImg src="/assets/img/button-par.jpg" alt="button" className="home-button" /></IonCard> </IonCol>
       
        </IonRow>
        </IonGrid>       
      </IonContent>
    </IonPage>
  );
};

export default Home;
