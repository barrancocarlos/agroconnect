import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonGrid,
  IonRow,
  IonCard,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonInput,
  IonItem
} from "@ionic/react";
import "./Page.css";

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
        <IonHeader collapse="condense"></IonHeader>
        <IonImg
          src="/assets/img/banner-prod.jpg"
          alt="home"
          className="home-pic"
        />
        <IonItem>
            <IonInput placeholder="Digite seu Estado"></IonInput>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard routerLink="/partners-products">
                <IonImg src="/assets/img/lettuce.jpg" alt="button" />
                <IonCardHeader>
                  <IonCardSubtitle>Cuiabá</IonCardSubtitle>
                  <IonCardTitle>Alface</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink="/partners-products">
                <IonImg src="/assets/img/soja.jpg" alt="button" />
                <IonCardHeader>
                  <IonCardSubtitle>Cuiabá</IonCardSubtitle>
                  <IonCardTitle>Soja</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          </IonGrid>
          <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard routerLink="/partners-products">
                <IonImg src="/assets/img/limao.jpg" alt="button" />
                <IonCardHeader>
                  <IonCardSubtitle>Cuiabá</IonCardSubtitle>
                  <IonCardTitle className="products-title">Limão</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink="/partners-products">
                <IonImg src="/assets/img/cebola.jpg" alt="button" />
                <IonCardHeader>
                  <IonCardSubtitle>Cuiabá</IonCardSubtitle>
                  <IonCardTitle>Cebola</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          </IonGrid>
  
      </IonContent>
    </IonPage>
  );
};

export default Products;
