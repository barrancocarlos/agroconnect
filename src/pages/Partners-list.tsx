import {
  IonList,
  IonListHeader,
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
          <IonTitle>Procurar Parceiros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <div>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28816.111080636278!2d-50.65830788978698!3d-25.47121181203183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sagricola%20near%20irati!5e0!3m2!1ses!2sbr!4v1639092137936!5m2!1ses!2sbr"
            width="100%"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
        <IonList>
          <IonListHeader>
            <h5>Produtores perto de você</h5>
          </IonListHeader>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/prod-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Produtor</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/for-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Produtor</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/comp-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Jane Doe</h2>
              <h3>Produtora</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <h5>Prestadores de serviço perto de você</h5>
          </IonListHeader>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/prod-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Prestador de Serviços</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/for-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Prestador de Serviços</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/comp-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Jane Doe</h2>
              <h3>Prestadora de Serviços</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <h5>Compradores perto de você</h5>
          </IonListHeader>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/prod-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Comprador</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/for-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>John Doe</h2>
              <h3>Comprador</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/partners-single">
            <IonAvatar className="user-avatar">
              <IonImg src="/assets/img/comp-icon.jpg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Jane Doe</h2>
              <h3>Compradora</h3>
              <p> Irati, Paraná</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Partners;
