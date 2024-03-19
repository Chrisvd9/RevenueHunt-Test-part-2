import { Button, InlineStack, Listbox } from "@shopify/polaris";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <img
          className="grid h-16 place-items-center rounded-lg bg-gray-100 text-xs text-gray-600 mb-4"
          src="./revenue.png"
          alt="logo"
        />
        <Listbox accessibilityLabel="Basic Listbox example">
          <Listbox.Option value="UniqueValue-1">Home</Listbox.Option>
          <Listbox.Option value="UniqueValue-2">Profile</Listbox.Option>
          <Listbox.Option value="UniqueValue-3">Configuration</Listbox.Option>
        </Listbox>
        <div className="mt-4 text-center">
          <Button>Send me a message!</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
