import DashboardPage from "@/components/DashboardPage";

const Popular = () => {
  return (
    <DashboardPage
      API={
        "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular"
      }
      queryKey={"popular"}
    />
  );
};

export default Popular;
