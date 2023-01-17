import { css } from "@emotion/css";
import JoinMenu from "./join-menu";
import { useAtom } from "jotai";
import { studentActivityAtom } from "../utils/jotai";
import Activity from "./activity";
import ReactionButton from "./reaction-button";
import { createFeedback } from "../services/activities";

const StudentModal = () => {
  const [studentActivity, setStudentActivity] = useAtom(studentActivityAtom);

  const handleClick = (type) => async () => {
    const feedback = {
      type,
      description: "test",
      date: new Date(),
    };
    await createFeedback(studentActivity.accessCode, feedback);
    setStudentActivity((prev) => {
      return {
        ...prev,
        feedbacks: [...prev.feedbacks, feedback],
      };
    });
  };

  return (
    <div
      className={css`
        display: flex;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        justify-content: center;
        align-items: center;
        color: white;
      `}
    >
      <div
        className={css`
          background-color: white;
          color: black;
          padding: 20px;
          position: relative;
          border-radius: 10px;
          min-width: 350px;
          max-width: 600px;
        `}
      >
        {studentActivity ? (
          <div>
            <Activity activity={studentActivity} />
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <h3
                className={css`
                  text-align: center;
                  font-weight: 600;
                  margin-top: 10px;
                `}
              >
                Add a reaction
              </h3>
              <div
                className={css`
                  display: flex;
                  justify-content: space-around;
                  margin-top: 5px;
                  border-radius: 5px;
                  outline: 2px solid #c2c4c4;
                `}
              >
                <ReactionButton
                  type="positive"
                  onClick={handleClick("positive")}
                />
                <ReactionButton
                  type="neutral"
                  onClick={handleClick("neutral")}
                />
                <ReactionButton type="mixed" onClick={handleClick("mixed")} />
                <ReactionButton
                  type="negative"
                  onClick={handleClick("negative")}
                />
              </div>
            </div>
          </div>
        ) : (
          <JoinMenu />
        )}
      </div>
    </div>
  );
};

export default StudentModal;
