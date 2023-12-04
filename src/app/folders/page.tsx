import Wrapper from "src/components/Wrapper";
import EmptyState from "src/components/reusable/EmptyState";

export default function MyFolders() {
  return (
    <Wrapper pageTitle={"My Folders"}>
      <EmptyState
        imgSrc="/images/folder.png"
        infoText="You have not created any folders yet."
      />
    </Wrapper>
  );
}
