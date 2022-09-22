import Home from "components/Home";
import NestedLayout from "components/NestedLayout";
import { ReactElement } from "react";

function Pages(): JSX.Element {
  return <Home />;
}

Pages.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <NestedLayout>{page}</NestedLayout>;
};

export default Pages;
