import { ReactElement } from "react";
import Header from "@/layouts/mainLayout/Header";
const MainLayout = ({ children }: { children: ReactElement }) => (
  <div className={"p-3"}>
    <Header />
    <main>{children}</main>
  </div>
);

export default MainLayout;
