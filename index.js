import './style.css';
import { App } from './pages/app';

const app = new App();
app.init();

const appDiv = document.getElementById('app');
appDiv.innerHTML = app.render();
