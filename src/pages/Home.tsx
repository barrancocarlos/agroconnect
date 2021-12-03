import { IonRouterLink, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
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
          <p className="title"><span className="green-title">AgroConect</span> loren ipsum sit amur!</p>          
        </IonText>
        <IonImg src="/assets/img/home-pic.jpg" alt="home" className="home-pic" />      
        <IonGrid>
          <IonRow>
            <IonCol><IonRouterLink href="/products"><IonImg src="/assets/img/button-veg.jpg" alt="button" className="home-button" /></IonRouterLink> </IonCol>
            <IonCol><IonImg src="/assets/img/button-par.jpg" alt="button" className="home-button" />  </IonCol>           
        </IonRow>
        </IonGrid>       
      </IonContent>
    </IonPage>
  );
};

export default Home;
