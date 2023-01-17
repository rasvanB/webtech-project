import { css } from "@emotion/css";
import ReactionCounter from "./reaction-counter";

const Feedback = ({ feedback }) => {
  return (
    <div
      className={css`
        padding: 10px;
        outline: 2px solid #c2c4c4;
        border-radius: 5px;
        min-width: 300px;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 10px;
          `}
        >
          <ReactionCounter type={feedback.type} />
          <h3>{feedback.type}</h3>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: fit-content;
            font-size: 12px;
            font-weight: 600;
          `}
        >
          <span>{new Date(feedback.date).toLocaleDateString()}</span>
          <span>{new Date(feedback.date).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
