import DashboardPage from "@/components/DashboardPage";

const Popular = () => {
  return (
    <section>
      <DashboardPage
        API={`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular`}
        queryKey={"popular"}
      />
    </section>
  );
};

export default Popular;
