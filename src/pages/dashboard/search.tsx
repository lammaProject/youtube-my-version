import DashboardPage from "@/components/DashboardPage";
import useStore from "@/store/store";

const Search = () => {
  const storeSearchValue = useStore((store) => store.searchValue);

  if (!storeSearchValue)
    return (
      <div className={"flex flex-col"}>
        <DashboardPage dontLoad={true} />
        <h1 className={"m-auto"}>
          Nothing... You can search use input in top!
        </h1>
      </div>
    );

  return (
    <>
      <DashboardPage
        API={`search?part=snippet&order=rating&maxResults=25&q=${storeSearchValue}`}
        queryKey={"search"}
      />
    </>
  );
};

export default Search;
