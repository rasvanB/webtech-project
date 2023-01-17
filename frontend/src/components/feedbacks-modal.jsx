import { css } from "@emotion/css";
import { Icon } from "@iconify/react";
import Feedback from "./feedback";

const FeedBacksModal = ({ isOpen, onClose, feedbacks }) => {
  console.log(feedbacks);
  return (
    <div
      className={css`
        ${isOpen ? "display: flex;" : "display: none;"}
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
          padding-top: 35px;
          position: relative;
          border-radius: 10px;
        `}
      >
        <Icon
          icon="bi:x"
          className={css`
            top: 3px;
            right: 5px;
            position: absolute;
            font-size: 30px;
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={onClose}
        />
        <h4
          className={css`
            text-align: center;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid #c2c2c2;
          `}
        >
          Feedbacks
        </h4>
        <div
          className={css`
            max-height: 400px;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          `}
        >
          {feedbacks &&
            feedbacks.map((feedback) => {
              return <Feedback feedback={feedback} key={feedback.id} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default FeedBacksModal;
