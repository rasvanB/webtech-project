import { css } from "@emotion/css";
import { Icon } from "@iconify/react";

const Role = ({ iconName, title, handleClick }) => {
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
        outline: 2px solid #b4b7b8;
        &:hover {
          cursor: pointer;
          outline: 3px solid #b4b7b8;
        }
        &:active {
          outline: 4px solid #b4b7b8;
        }
      `}
      onClick={handleClick}
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
