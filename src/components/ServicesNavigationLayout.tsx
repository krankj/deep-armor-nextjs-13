import React from "react";
import SideNavigationLayout from "./SideNavigationLayout";
import { services } from "./Solutions";

const ServicesNavigationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SideNavigationLayout header="Our Services" items={services}>
      {children}
    </SideNavigationLayout>
  );
};

export default ServicesNavigationLayout;