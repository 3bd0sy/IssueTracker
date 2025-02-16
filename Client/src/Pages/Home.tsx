import { useCallback, useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Hero from "../Components/Common/Hero";
import IssueCard from "../Components/Common/IssueCard";
import Footer from "../Components/Common/Footer";
import {
  createSavedIssue,
  getIssues,
  deleteIssue,
} from "../Services/authService";
import AlertMessage from "../Components/AlertMessage.js";
import Messages from "../Services/messages.js";
import NoData from "../Components/Common/NoDate.js";
import Filters from "../Components/Common/Filter.js";
import ExportToExcel from "../Components/Common/ExportToExcel .js";
import {
  // alertType,
  filterType,
  IssueType,
  SavedIssueType,
} from "../Services/types/index.js";
import { useAlert } from "../hooks/useAlert.js";

const Home = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<IssueType[]>(issues);

  const handleSaveIssue = async (data: SavedIssueType) => {
    try {
      const response = await createSavedIssue(data);
      console.log("response:", response);
      showAlert("success", Messages.savedIssueAdded);
    } catch (error) {
      console.log("error:", error);
      showAlert("error", Messages.savedIssueAddError);
    }
  };

  const handleIncrease = (id: number) => {
    const updatedCards = [...issues];
    updatedCards[id].counter += 1;
    setIssues(updatedCards);
    setFilteredIssues(updatedCards);
  };

  const handleDecrease = (id: number) => {
    const updatedCards = [...issues];
    updatedCards[id].counter -= 1;
    setIssues(updatedCards);
    setFilteredIssues(updatedCards);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteIssue(id);
      const updatedCards = issues.filter((issue) => issue.documentId !== id);
      setIssues(updatedCards);
      setFilteredIssues(updatedCards);
      console.log(response);
      showAlert("success", Messages.issueDeleted);
    } catch (error) {
      console.log("error:", error);
      showAlert("error", Messages.issueDeleteError);
    }
  };

  const fetchDate = useCallback(async () => {
    try {
      const response = await getIssues();
      console.log(response);
      setIssues(response);
      setFilteredIssues(response);
    } catch (error) {
      console.log("error", error);
      showAlert("error", Messages.issueFetchError);
    }
  }, []);

  const filtering = (filterType: filterType) => {
    let updatedIssues: IssueType[] = [];

    if (filterType.status) {
      updatedIssues = issues.filter(
        (issue) => issue.issueStatus === filterType.status
      );
    }

    if (filterType.date) {
      updatedIssues = [...updatedIssues].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return filterType.date === "Oldest" ? dateA - dateB : dateB - dateA;
      });
    }
    setFilteredIssues(updatedIssues || []);
  };

  useEffect(() => {
    fetchDate();
  }, [fetchDate]);

  return (
    <>
      {alert.show && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={hideAlert}
        />
      )}
      <Header />
      <Hero />
      {/* <Filters filtering={filtering} /> */}
      <Filters filtering={filtering}>
        <ExportToExcel data={filteredIssues} />
      </Filters>
      {Object.keys(filteredIssues).length > 0 ? (
        filteredIssues.map((issue, id: number) => (
          <IssueCard
            counter={0}
            key={id}
            id={id}
            title={issue.title}
            description={issue.description}
            counterValue={issue.counter}
            issueStatus={issue.issueStatus}
            documentId={issue.documentId}
            imageUrl={issue.imageUrl}
            createdAt={issue.createdAt}
            handleSaveIssue={() =>
              handleSaveIssue({
                issue_id: issue.documentId,
                username: "abdulbasit",
                issuetitle: issue.title,
                issuestate: issue.issueStatus,
                issueid: issue.documentId,
                issuedate: issue.createdAt,
              })
            }
            increaseCounter={handleIncrease}
            decreaseCounter={handleDecrease}
            onDlete={handleDelete}
            onEdit={() => null}
            CommentsNumber={8}
            showComments={() => null}
          />
        ))
      ) : (
        <NoData />
      )}

      <Footer />
    </>
  );
};

export default Home;
