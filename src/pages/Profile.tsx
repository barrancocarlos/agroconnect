import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonImg,
  IonCard,  
} from "@ionic/react";
import "./Page.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Meu Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonCard className="user-single">
          <IonImg src="/assets/img/for-icon.jpg" alt="home" />
        </IonCard>

        <h1 className="single-title">John Doe</h1>
        <h4 className="single-subtitle">Prestador de Serviços</h4>
        <IonText>
          <p className="single-text single-iontext"> CPF: 555555555555</p>
          <p className="single-text"> Cidade: Cuiabá, Mato Grosso</p>
          <p className="single-text">
            {" "}
            Serviços: Serviço 1, Serviço 2, Serviço 3.{" "}
          </p>
        </IonText>  
      </IonContent>
    </IonPage>
  );
};

export default Profile;
