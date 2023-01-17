import { css } from "@emotion/css";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { createActivity } from "../services/professors";
import { activitiesAtom, userAtom } from "../utils/jotai";
import InputBox from "./input-box";

const generateCode = () => Math.floor(100000 + Math.random() * 900000);

const defaultActivity = {
  title: "",
  description: "",
  date: new Date(),
  accessCode: generateCode(),
  feedbacks: [],
};

const CreateModal = ({ isOpen, onClose }) => {
  const [activity, setActivity] = useState(defaultActivity);
  const [user] = useAtom(userAtom);
  const [, setActivities] = useAtom(activitiesAtom);

  useEffect(() => {
    setActivity(defaultActivity);
  }, [isOpen]);

  const handleChange = (field) => (e) => {
    setActivity({ ...activity, [field]: e.target.value, date: new Date() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createActivity(user.name, activity);
    setActivities((activities) => [...activities, activity]);
    onClose();
  };

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
        <h2>CREATE AN ACTIVITY</h2>
        <form onSubmit={handleSubmit}>
          <InputBox
            placeholder="Enter a title..."
            value={activity.title}
            onChange={handleChange("title")}
            label="Title"
          />
          <InputBox
            placeholder="Enter a description..."
            value={activity.description}
            onChange={handleChange("description")}
            label="Description"
            isTextarea
          />
          <h4
            className={css`
              margin-top: 10px;
              margin-bottom: 5px;
            `}
          >
            {"Access Code"}
          </h4>
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 30px;
              width: 100%;
              padding: 5px;
              padding-right: 10px;
              border-radius: 5px;
              border: 0px;
              resize: none;
              outline: 2px solid #c2c4c4;
              user-select: none;
              &:focus {
                outline: 3px solid #c2c4c4;
              }
            `}
          >
            {activity.accessCode}
            <Icon
              icon="pajamas:repeat"
              className={css`
                font-size: 15px;
                &:hover {
                  cursor: pointer;
                }
              `}
              onClick={() =>
                setActivity({ ...activity, accessCode: generateCode() })
              }
            />
          </div>
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
            Create Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
