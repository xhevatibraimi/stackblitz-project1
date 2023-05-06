import './style.css';
import { App } from './pages/app';
import { Api } from './services/api';

const api = new Api();
const app = new App(api);
app.init();

const appDiv = document.getElementById('app');
appDiv.innerHTML = app.render();
