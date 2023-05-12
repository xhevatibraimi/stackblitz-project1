import './style.css';
import { App } from './pages/app';
import { Table } from './pages/table';
import { Api } from './services/api';

const api = new Api();
const table = new Table(api);
const app = new App(table);
const appDiv = document.getElementById('app');

(async () => {
  appDiv.innerHTML = await app.renderAsync();
})();
