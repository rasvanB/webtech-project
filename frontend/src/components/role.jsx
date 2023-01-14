import { css } from "@emotion/css";
import { Icon } from "@iconify/react";

const Role = ({ iconName, title }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        background-color: #e8f6ff;
        padding: 10px;
        font-weight: 600;
        width: 100px;
        border-radius: 5px;
        border: 1px solid #c6dae2;
        &:hover {
          cursor: pointer;
        }
      `}
    >
      <Icon
        icon={iconName}
        className={css`
          font-size: 50px;
        `}
      />
      {title}
    </div>
  );
};

export default Role;
