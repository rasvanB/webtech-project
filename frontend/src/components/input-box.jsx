import { css } from "@emotion/css";
const InputBox = ({ value, onChange, placeholder, label, isTextarea }) => {
  return (
    <div
      className={css`
        margin-top: 10px;
      `}
    >
      {label && (
        <h4
          className={css`
            margin-bottom: 5px;
          `}
        >
          {label}
        </h4>
      )}
      {isTextarea ? (
        <textarea
          className={css`
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: 0px;
            resize: none;
            outline: 2px solid #c2c4c4;
            &:focus {
              outline: 3px solid #c2c4c4;
            }
          `}
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          rows={5}
          required
        />
      ) : (
        <input
          className={css`
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: 0px;
            outline: 2px solid #c2c4c4;
            &:focus {
              outline: 3px solid #c2c4c4;
            }
          `}
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default InputBox;
