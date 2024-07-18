import MyResponsivePie from "./responsivepie";

function DisplayVotes({ voteData }) {
  console.log("display votes", voteData);
  return (
    <div className="flex w-300 h-96">
      <MyResponsivePie data={voteData}></MyResponsivePie>
    </div>
  );
}

export default DisplayVotes;
