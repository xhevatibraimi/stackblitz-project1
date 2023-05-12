import './style.css';
import { App } from './pages/app';
import { Api } from './services/api';

const api = new Api();
const app = new App(api);
const appDiv = document.getElementById('app');

(async () => {
  appDiv.innerHTML = await app.renderAsync();
})();
