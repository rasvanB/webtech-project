import InputBox from "./input-box";
import { useState } from "react";
import { css } from "@emotion/css";
import { getActivity } from "../services/activities";
import { useAtom } from "jotai";
import { studentActivityAtom } from "../utils/jotai";

const JoinMenu = () => {
  const [accessCode, setAccessCode] = useState("");
  const [, setStudentActivity] = useAtom(studentActivityAtom);

  const changeAccessCode = (e) => {
    setAccessCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activity = await getActivity(accessCode);
    if (activity) {
      setStudentActivity(activity);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <InputBox
          value={accessCode}
          onChange={changeAccessCode}
          label="Acess Code"
        />
        <button
          className={css`
                height: 30px;
                width: 100%;
                border-radius: 5px;
                border: 0px;
                outline: 2px solid #c2c4c4;
                background-color: #3d8de3;
                margin-top: 10px;
                color: white;
                &:hover {
                  cursor: pointer;
                  outline: 3px solid #c2c4c4;
                `}
        >
          Join Activity
        </button>
      </form>
    </div>
  );
};

export default JoinMenu;
