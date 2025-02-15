import Badge from "./Badge";
import formatDate from "../../Services/DateFormat";
import { SavedIssueCardType } from "../../Services/types/index";
const UserName = ({ username }: { username: string }) => {
  return (
    <div className="flex items-center gap-1 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
          fill="#fff"
        />
        <path
          d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
          fill="#fff"
        />
      </svg>
      <span className="text-white capitalize text-2xl inline leading-snug font-light  truncate mb-1 sm:mb-0">
        {username}
      </span>
    </div>
  );
};

const CardControl = ({
  date,
  deleteSavedIssue,
}: {
  date: string;
  deleteSavedIssue: () => void;
}) => {
  return (
    <div className="flex justify-between  mt-4">
      <div className="flex  mt-auto gap-[10px]">
        <button
          onClick={deleteSavedIssue}
          className=" cursor-pointer flex gap-2 items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"
              fill="#fff"
            ></path>
            <path
              d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <a
          className="cursor-pointer flex gap-2 items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100"
          href="/edit/l966q1ym1au9atcc4n1pwdsa"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
              fill="#fff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  );
};

const SavedIssueCard = ({
  documentId,
  title,
  date,
  state,
  username,
  deleteSavedIssue,
}: SavedIssueCardType) => {
  const formattedDate = formatDate(date);

  return (
    <div className="max-w-2xl mt-4 mx-auto bg-gray-900 shadow-lg rounded-2xl">
      <div className="px-6 py-5">
        <div className="flex items-start">
          <div className="flex-grow truncate">
            <UserName username={username} />
            <div className="flex flex-col items-start pb-2">
              <div className="inline sm:flex justify-between items-center mb-3">
                <h2 className="text-2xl inline leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                  {title}
                </h2>
              </div>
              <Badge issueStatus={state} />
            </div>
            <CardControl
              deleteSavedIssue={() => deleteSavedIssue(documentId)}
              date={formattedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedIssueCard;
