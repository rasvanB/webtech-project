import { css } from "@emotion/css";
import FeedBacksModal from "./feedbacks-modal";
import ReactionCounter from "./reaction-counter";
import { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../utils/jotai";
const getReactionsCount = (feedbacks) => {
  let reactionsCount = {
    positive: 0,
    negative: 0,
    neutral: 0,
    mixed: 0,
  };
  for (const feedback of feedbacks) {
    switch (feedback.type) {
      case "positive":
        reactionsCount.positive++;
        break;
      case "negative":
        reactionsCount.negative++;
        break;
      case "neutral":
        reactionsCount.neutral++;
        break;
      case "mixed":
        reactionsCount.mixed++;
        break;
    }
  }
  return reactionsCount;
};

const Activity = ({ activity }) => {
  const [user] = useAtom(userAtom);
  const { feedbacks } = activity;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reactionsCount = getReactionsCount(feedbacks);
  const areFeedbacksAvailable =
    feedbacks.length > 0 && user.role === "professor";

  return (
    <div>
      <div
        className={css`
          margin-top: 10px;
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          outline: 2px solid #c2c4c4;
          position: relative;
          ${areFeedbacksAvailable &&
          css`
            &:hover {
              cursor: pointer;
              background-color: #e6e7e7;
            }
          `}
        `}
        onClick={() => {
          if (areFeedbacksAvailable) setIsModalOpen(true);
        }}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          `}
        >
          <h4>{activity.title}</h4>
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
            <span>{new Date(activity.date).toLocaleDateString()}</span>
            <span>{new Date(activity.date).toLocaleTimeString()}</span>
          </div>
        </div>
        <span
          className={css`
            position: absolute;
            bottom: 2px;
            right: 10px;
            font-size: 12px;
          `}
        >
          CODE: {activity.accessCode}
        </span>
        <div
          className={css`
            margin-top: 5px;
            margin-bottom: 5px;
            word-wrap: break-word;
          `}
        >
          {activity.description}
        </div>
        <div
          className={css`
            display: flex;
            gap: 5px;
          `}
        >
          <ReactionCounter type="positive" count={reactionsCount.positive} />
          <ReactionCounter type="neutral" count={reactionsCount.neutral} />
          <ReactionCounter type="mixed" count={reactionsCount.mixed} />
          <ReactionCounter type="negative" count={reactionsCount.negative} />
        </div>
      </div>
      {feedbacks.length > 0 && (
        <FeedBacksModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          feedbacks={feedbacks}
        />
      )}
    </div>
  );
};
export default Activity;
