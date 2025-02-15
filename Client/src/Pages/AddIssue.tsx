import Footer from "../Components/Common/Footer";
import Hero from "../Components/Common/Hero";
import Header from "../Components/Common/Header";
import IssueForm from "../Components/AddForm";
const AddIssue = () => {
  return (
    <>
      <Header />
      <Hero />
      <IssueForm PageTitle={"Add New Issue"} />
      <Footer />
    </>
  );
};

export default AddIssue;
