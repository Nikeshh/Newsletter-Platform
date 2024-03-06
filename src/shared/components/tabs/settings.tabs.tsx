import { Tab, Tabs } from "@nextui-org/react";
import { Key, useState } from "react";

type Props = {
  activeItem: string,
  setActiveItem: (key: Key) => any
}

const SettingsTab = ({ activeItem, setActiveItem } : Props) => {
  return (
    <Tabs
      variant={"underlined"}
      aria-label="Tabs variants"
      selectedKey={activeItem}
      onSelectionChange={setActiveItem}
    >
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize Profile" title="Customize Profile" />
    </Tabs>
  );
};

export default SettingsTab;
