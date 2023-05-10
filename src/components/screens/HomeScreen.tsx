import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";
import { FormContainer } from "../form/FormContainer";

export const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && <Sidebar />}
      {/* <SelectComponentContainer isOpen={isOpen} /> */}
      <FormContainer isOpen={isOpen} />
    </div>
  );
};
