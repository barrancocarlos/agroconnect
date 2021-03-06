import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Partners from './pages/Partners';
import PartnersList from './pages/Partners-list';
import PartnersSingle from './pages/Partner-single';
import PartnersProduct from './pages/Partners-products';
import PartnersProductA from './pages/Partners-products2';
import Chat from './pages/Chat';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true} component={Home}>              
            </Route> 
            <Route path="/products" exact={true} component={Products}>              
            </Route>
            <Route path="/profile" exact={true} component={Profile}>              
            </Route> 
            <Route path="/partners" exact={true} component={Partners}>              
            </Route> 
            <Route path="/partners-list" exact={true} component={PartnersList}>              
            </Route> 
            <Route path="/partners-single" exact={true} component={PartnersSingle}>              
            </Route> 
            <Route path="/partners-products" exact={true} component={PartnersProduct}>              
            </Route> 
            <Route path="/partners-products2" exact={true} component={PartnersProductA}>              
            </Route> 
            <Route path="/chat" exact={true} component={Chat}>              
            </Route>                           
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
