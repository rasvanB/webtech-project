import { css } from "@emotion/css";
import { Icon } from "@iconify/react";

const icons = {
  positive: {
    iconName: "material-symbols:sentiment-satisfied-outline-rounded",
    color: "green",
  },
  negative: {
    iconName: "material-symbols:sentiment-dissatisfied-outline-rounded",
    color: "red",
  },
  neutral: {
    iconName: "material-symbols:sentiment-neutral-outline-rounded",
    color: "#e6b800",
  },
  mixed: {
    iconName: "material-symbols:sentiment-very-dissatisfied-outline-rounded",
    color: "#ff6600",
  },
};

const ReactionCounter = ({ type, count }) => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
      `}
    >
      <Icon
        icon={icons[type].iconName}
        className={css`
          font-size: 25px;
          ${`color: ${icons[type].color};`}
        `}
      />
      {count !== undefined && (
        <span
          className={css`
            color: black;
            margin-left: 2px;
          `}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default ReactionCounter;
