import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const App = () => {
  return (
    <>
      <Container>
        <MainView />
        <a target="_blank" href="https://icons8.com/icon/HH1wWvmLSFYK/pegasus">Pegasus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </Container>
    </>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
