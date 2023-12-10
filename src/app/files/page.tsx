import Wrapper from "src/components/Wrapper";
import EmptyState from "../../components/reusable/EmptyState";

export default function MyFiles() {
  return (
    <Wrapper pageTitle="My files">
      <EmptyState
        imgSrc="/images/file.svg"
        infoText="You have not added any files yet."
        btnValue="Upload"
      />
    </Wrapper>
  );
}
