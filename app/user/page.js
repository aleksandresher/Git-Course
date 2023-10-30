import ProgressBar from "../components/personal/progress";
import CardTypeSelect from "../components/personal/cardTypeSelect";
function PersonalPage() {
  return (
    <div className="h-screen w-full  bg-[#f0f0ed]">
      <h1>User Page</h1>
      <ProgressBar />
      <CardTypeSelect />
    </div>
  );
}
export default PersonalPage;
