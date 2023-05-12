import './style.css';
import { Table } from './pages/table';
import { Api } from './services/api';

const api = new Api();
const app = new Table(api);
const appDiv = document.getElementById('app');

(async () => {
  appDiv.innerHTML = await app.renderAsync();
})();
