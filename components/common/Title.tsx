import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h3>{children}</h3>;
};

export default Title;
