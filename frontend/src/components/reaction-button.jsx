import { css } from "@emotion/css";
import ReactionCounter from "./reaction-counter";

const ReactionButton = ({ type, onClick }) => {
  return (
    <div
      className={css`
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
        user-select: none;
        &:hover {
          cursor: pointer;
          background-color: #e8e8e8;
        }
      `}
      onClick={onClick}
    >
      <ReactionCounter type={type} />
      <div
        className={css`
          font-size: 15px;
        `}
      >
        {type}
      </div>
    </div>
  );
};

export default ReactionButton;
