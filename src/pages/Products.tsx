import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Page.css';

const Products: React.FC = () => {

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Produtos</IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default Products;
