import { css } from "@emotion/css";
import "./app.scss";
import Role from "./components/role";

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
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
          `}
        >
          <h1
            className={css`
              font-weight: 700;
            `}
          >
            Select your role
          </h1>
          <div
            className={css`
              display: flex;
              justify-content: space-around;
              margin-bottom: 15px;
              margin-top: 20px;
            `}
          >
            <Role iconName="noto:man-teacher" title="Professor" />
            <Role iconName="noto:man-student" title="Student" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
