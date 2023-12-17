import Wrapper from "src/components/Wrapper";
import EmptyState from "../../components/reusable/EmptyState";
import Folders from "src/components/Folders";

export default function MyFolders() {
  return (
    <Wrapper pageTitle={"My Folders"}>
      <Folders />
      <EmptyState
        imgSrc="/images/folder.png"
        infoText="You have not created any folders yet."
        fileBtn={true}
      />
    </Wrapper>
  );
}
