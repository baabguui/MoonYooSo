import Home from 'pages/Home';
import Paintings from 'pages/Paintings';
import Exhibitions from 'pages/Exhibitions';
import Texts from 'pages/Texts';
import Essays from 'pages/Essays';
import CV from 'pages/CV';
import Contact from 'pages/Contact';

export const ROUTES: routeWrap = {
  Home: {
    path: '/',
    Component: Home,
  },
  Paintings: {
    path: '/paintings',
    Component: Paintings,
  },
  Exhibitions: {
    path: '/exhibitions',
    Component: Exhibitions,
  },
  Texts: {
    path: '/texts',
    Component: Texts,
  },
  Essays: {
    path: '/essays',
    Component: Essays,
  },
  CV: {
    path: '/cv',
    Component: CV,
  },
  Contact: {
    path: '/contact',
    Component: Contact,
  },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
