import Activity from "./activity";
import { css } from "@emotion/css";
const ActivitiesList = ({ activities }) => {
  return (
    <div
      className={css`
        border-top: 2px solid #c2c4c4;
      `}
    >
      {activities.map((activity) => {
        return (
          <div key={activity.accessCode}>
            <Activity activity={activity} key={activity.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ActivitiesList;
