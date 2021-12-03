import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonImg,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { personCircleOutline, homeOutline, bagHandleOutline, happyOutline } from 'ionicons/icons';
import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
<IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="nav-list">
        <IonImg src="/assets/img/logo.png" alt="button" className="logo" />
          <IonMenuToggle autoHide={false}>
            <IonItem className={location.pathname === "/" ? 'selected' : ''} routerLink="/" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={homeOutline} md={homeOutline} />
              <IonLabel>Início</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === "/products" ? 'selected' : ''} routerLink="/products" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={bagHandleOutline} md={bagHandleOutline} />
              <IonLabel>Produtos</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === "/partners" ? 'selected' : ''} routerLink="/partners" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={happyOutline} md={happyOutline} />
              <IonLabel>Parceiros</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === "/profile" ? 'selected' : ''} routerLink="/profile" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={personCircleOutline} md={personCircleOutline} />
              <IonLabel>Meu Perfil</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>   
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
