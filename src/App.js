import './App.css';
import Routes from './routes'
import shellIcon from './lib/assets/shell_icon.png'

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={shellIcon} alt="logo" />
      </header>
      <Routes />
    </div>
  );
}
