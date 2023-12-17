import MainPage from "./pages/mainPage/mainPage";
import style from "./global.module.scss";
import PlayBar from "./components/playbar/PlayBar";

const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <PlayBar />
  </div>
);

export default App;
