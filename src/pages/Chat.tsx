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
  IonButton,
  IonInput,
} from "@ionic/react";
import "./Page.css";

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>John Doe</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonList>
          <IonItem routerLink="/partners-products">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/prod-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Produtor</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <div className="chat-input">
        <IonItem>
          <IonInput placeholder="Mensagem..."></IonInput>
        </IonItem>
        </div>
        <IonButton
          routerLink="/partners"
          expand="block"
          fill="solid"
          className="par-button"
        >
          Enviar Mensagem
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
