//importing layouts....
import Layout1 from './layouts/Layout1';
import Layout2 from "./layouts/Layout2";
//importing pages
import Home from './pages/home/home';
import Transactions from './pages/transactions/transactions';
import Wallets from './pages/wallets/wallets';
import TokenList from './pages/tokenlist/tokenList';

var routes = [
  {
    path: "/",
    layout: Layout1,
    name: "Home Page",
    access: true,
    exact: true,
    component: Home
  },
  {
    path: "tokenList",
    layout: Layout1,
    name: "TokenList",
    access: true,
    exact: true,
    component: TokenList
  },
  {
    path: "wallets",
    layout: Layout1,
    name: "Wallets",
    access: true,
    exact: true,
    component: Wallets
  },
  {
    path: "transactions",
    layout: Layout1,
    name: "TokenList",
    access: true,
    exact: true,
    component: Transactions
  },

];

export default routes;
