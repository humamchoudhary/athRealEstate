import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
function FilterDW({
  subline,
  label,
  keyTag,
  items,
  setFilters,
  filters,
  active,
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([active ? active : "none"])
  );

  useEffect(() => {
    if (keyTag && selectedValue !== "none") {
      const tempMap = new Map(filters);
      tempMap.set(keyTag, selectedValue);
      setFilters(tempMap);
    }
  }, [selectedKeys]);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown isOpen={openDropdown}>
      <DropdownTrigger className="flex flex-col px-6 py-4   basis-2/5 h-full lg:items-start items-center ">
        <Button
          variant="light"
          onMouseEnter={() => {
            setOpenDropdown(true);
          }}
          onMouseLeave={() => {
            setOpenDropdown(false);
          }}
        >
          <p className="font-bold text-md">{label}</p>
          <p
            className={`font-light text-sm ${
              !selectedValue || selectedValue === "none"
                ? "text-gray-300"
                : " text-gray-600"
            }`}
          >
            {!selectedValue || selectedValue === "none"
              ? `${subline}`
              : selectedValue}
          </p>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        aria-label="Dynamic Actions"
        items={items}
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {(item) => <DropdownItem key={item.key}>{item.key}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
}

export default FilterDW;
