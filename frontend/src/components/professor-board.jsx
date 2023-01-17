import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { getActivitiesOfProfessor } from "../services/professors";
import { useAtom } from "jotai";
import { activitiesAtom, userAtom } from "../utils/jotai";
import CreateModal from "./create-modal";
import ActivitiesList from "./activities-list";

const ProfessorBoard = () => {
  const [activities, setActivities] = useAtom(activitiesAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user] = useAtom(userAtom);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getActivitiesOfProfessor(user.name);
      if (response) {
        setActivities(response);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;
        padding: 20px;
        outline: 2px solid #b4b7b8;
      `}
    >
      <h2
        className={css`
          text-align: center;
        `}
      >
        {`${user.name}'s Activity Board`}
      </h2>
      <div
        className={css`
          margin-top: 10px;
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <button
          className={css`
            width: fit-content;
            background-color: #2dc3f9;
            padding: 10px;
            font-weight: 600;
            color: white;
            border: none;
            border-radius: 5px;
            margin-bottom: 10px;
            &:hover {
              cursor: pointer;
              background-color: #2d9bf9;
            }
          `}
          onClick={openModal}
        >
          CREATE ACTIVITY
        </button>
      </div>
      <CreateModal isOpen={isModalOpen} onClose={closeModal} />
      <ActivitiesList activities={activities} />
      {activities.length === 0 && (
        <h3
          className={css`
            margin-top: 10px;
          `}
        >
          You have no activities yet. Click on the button above to create one.
        </h3>
      )}
    </div>
  );
};

export default ProfessorBoard;
