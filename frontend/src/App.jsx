import { css } from "@emotion/css";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <div
        className={css`
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;
            background-color: #1d1d23;
          `}
        >
          <h1>Select your role</h1>
          <div
            className={css`
              display: flex;
              justify-content: space-around;
              margin-bottom: 20px;
            `}
          >
            <div>professor</div>
            <div>student</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
