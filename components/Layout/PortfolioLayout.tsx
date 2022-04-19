import React, { ReactNode } from "react";

import PortfolioHeader from "../Header/PortFolioHeader";

interface Props {
  children?: ReactNode;
}

const PortfolioLayout = ({ children }: Props) => {
  return (
    <div>
      <PortfolioHeader />
      {children}
    </div>
  );
};

export default PortfolioLayout;
