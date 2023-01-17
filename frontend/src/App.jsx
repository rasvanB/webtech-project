import { css } from "@emotion/css";
import "./app.scss";
import { useAtom } from "jotai";
import { loggedInAtom, userAtom } from "./utils/jotai";
import SelectionForm from "./components/selection-form";
import ProfessorBoard from "./components/professor-board";
import StudentModal from "./components/student-modal";

const App = () => {
  const [loggedIn] = useAtom(loggedInAtom);
  const [user] = useAtom(userAtom);
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
        {loggedIn ? (
          user.role === "professor" ? (
            <ProfessorBoard />
          ) : (
            <StudentModal />
          )
        ) : (
          <SelectionForm />
        )}
      </div>
    </div>
  );
};

export default App;
