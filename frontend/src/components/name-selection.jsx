import { css } from "@emotion/css";
import { useAtom } from "jotai";
import { userAtom } from "../utils/jotai";

const NameSelection = () => {
  const [user, setUser] = useAtom(userAtom);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
    >
      <h1
        className={css`
          font-weight: 600;
          font-size: 20px;
          text-align: center;
        `}
      >
        Enter your name
      </h1>
      <form onSubmit={(e) => e.preventDefault()} action="#">
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
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          required
        />
      </form>
    </div>
  );
};

export default NameSelection;
