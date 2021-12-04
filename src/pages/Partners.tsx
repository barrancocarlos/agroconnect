import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton
} from "@ionic/react";
import "./Page.css";

const Partners: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Parceiros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonImg
          src="/assets/img/banner-par.jpg"
          alt="home"
          className="home-pic"
        />
        <IonList>
        <IonItem>
          <IonAvatar  className="user-avatar"><IonImg src="/assets/img/prod-icon.jpg" alt="avatar" /></IonAvatar>
          <IonLabel>
            <h2>John Doe</h2>
            <h3>Produtor</h3>
            <p>	Cuiabá, Mato Grosso</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar  className="user-avatar"><IonImg src="/assets/img/for-icon.jpg" alt="avatar" /></IonAvatar>
          <IonLabel>
            <h2>John Doe</h2>
            <h3>Prestador de Serviços</h3>
            <p>	Cuiabá, Mato Grosso</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar  className="user-avatar"><IonImg src="/assets/img/comp-icon.jpg" alt="avatar" /></IonAvatar>
          <IonLabel>
            <h2>Jane Doe</h2>
            <h3>Compradora</h3>
            <p>	Cuiabá, Mato Grosso</p>
          </IonLabel>
        </IonItem>
      </IonList>
      <IonButton routerLink="/partners-list" expand="block" fill="solid" className="par-button">Adicionar Parceiros</IonButton>
      </IonContent>      
    </IonPage>
  );
};

export default Partners;
