import { issueStatusType } from "../../Services/types";

const Badge = ({ issueStatus }: issueStatusType) => {
  const badgeColor = {
    Open: "bg-red-500",
    Closed: "bg-green-500",
    "In-progress": "bg-yellow-500",
  };
  return (
    <span
      className={`${badgeColor[issueStatus]}
      px-2 py-0.5 font-semibold text-sm rounded-lg text-white`}>
      {issueStatus}
    </span>
  );
};

export default Badge;
