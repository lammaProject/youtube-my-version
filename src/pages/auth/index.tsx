import Link from "next/link";

const Index = () => {
  console.log("DKLFMLKADMFKLMADKLFMKLADMFKLMADKLFMKLADMFKLmkl");
  return (
    <div className={"text-red-600 text-6xl mt-24"}>
      PLS AUTH YOUR ACCOUNT THAN YOU CAN WATCH VIDEO PLES
      <Link
        href={
          "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube&response_type=token&client_id=632674726779-si25t7avn6vl98aglo75r5rlh1sfp20q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/google/callback"
        }
        className={"bg-white hover:bg-gray-600"}
      >
        AUTH BUTTON
      </Link>
    </div>
  );
};

export default Index;
