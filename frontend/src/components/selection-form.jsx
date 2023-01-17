import { css } from "@emotion/css";
import Role from "./role";
import NameSelection from "./name-selection";
import { useAtom } from "jotai";
import { activitiesAtom, userAtom } from "../utils/jotai";
import { loggedInAtom } from "../utils/jotai";
import { createProfessor, getProfessor } from "../services/professors";

const SelectionForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [, setActivities] = useAtom(activitiesAtom);

  const changeRole = (role) => {
    setUser((prev) => ({ ...prev, role }));
  };

  const handleContinue = async () => {
    if (user.role && user.name) {
      const professor = await getProfessor(user.name);
      if (!professor) {
        await createProfessor(user.name);
        setActivities([]);
      } else {
        setActivities(professor.activities);
      }
      setLoggedIn(true);
    }
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px;
        background-color: white;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
        outline: 2px solid #c2c4c4;
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
        <Role
          iconName="noto:man-teacher"
          title="Professor"
          handleClick={() => changeRole("professor")}
        />
        <Role
          iconName="noto:man-student"
          title="Student"
          handleClick={() => changeRole("student")}
        />
      </div>
      {user.role && (
        <>
          <NameSelection />
          <button
            className={css`
              height: 30px;
              width: 100%;
              border-radius: 5px;
              border: 0px;
              outline: 2px solid #c2c4c4;
              background-color: #3d8de3;
              margin-top: 15px;
              color: white;
              &:hover {
                cursor: pointer;
                outline: 3px solid #c2c4c4;
                background-color: #4698f0;
              }
            `}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        </>
      )}
    </div>
  );
};

export default SelectionForm;
