import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonCard,
  IonText,
  IonButton,
} from "@ionic/react";
import "./Page.css";

const PartnersSingle: React.FC = () => {
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
        <IonCard className="user-single">
          <IonImg src="/assets/img/for-icon.jpg" alt="home" />
        </IonCard>

        <h1 className="single-title">John Doe</h1>
        <h4 className="single-subtitle">Prestador de Serviços</h4>
        <IonText>
          <p className="single-text single-iontext"> AgroID: #JD983</p>
          <p className="single-text"> Cidade: Irati, Paraná</p>
          <p className="single-text">
            {" "}
            Serviços: Serviço 1, Serviço 2, Serviço 3.{" "}
          </p>
        </IonText>
        <div className="single-button">
          <IonButton color="success" className="filter-button">
            Adicionar
          </IonButton>         
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PartnersSingle;
