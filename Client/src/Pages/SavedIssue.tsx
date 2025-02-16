import { useCallback, useEffect, useState } from "react";
import Header from "../Components/Common/Header.js";
import Hero from "../Components/Common/Hero.js";
import Footer from "../Components/Common/Footer.js";
import { getSavedIssues, deleteSavedIssue } from "../Services/authService.js";
import AlertMessage from "../Components/AlertMessage.js";
import Messages from "../Services/messages.js";
import NoData from "../Components/Common/NoDate.js";
import SavedIssueCard from "../Components/Common/SavedIssueCard.js";
import { SavedIssueType } from ".././Services/types/index.js";
import { useAlert } from "../hooks/useAlert.js";

const SavedIssue = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [SavedIssues, setSavedIssues] = useState<SavedIssueType[]>([]);

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteSavedIssue(id);
      const updatedCards: SavedIssueType[] = SavedIssues.filter(
        (issue: SavedIssueType) => issue.documentId !== id
      );
      setSavedIssues(updatedCards);
      console.log(response);
      showAlert("success", Messages.issueDeleted);
    } catch (error) {
      console.log("error:", error);
      showAlert("error", Messages.issueDeleteError);
    }
  };
  const fetchDate = useCallback(async () => {
    try {
      const response = await getSavedIssues();
      console.log(response);
      setSavedIssues(response);
    } catch (error) {
      console.log("error", error);
      showAlert("error", Messages.issueFetchError);
    }
  }, []);

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
      {Object.keys(SavedIssues).length > 0 ? (
        SavedIssues.map((issue, id) => (
          <SavedIssueCard
            key={id}
            documentId={issue.documentId || ""}
            title={issue.issuetitle}
            date={issue.issuedate}
            state={issue.issuestate}
            username={issue.username}
            deleteSavedIssue={handleDelete}
          />
        ))
      ) : (
        <NoData />
      )}

      <Footer />
    </>
  );
};

export default SavedIssue;
