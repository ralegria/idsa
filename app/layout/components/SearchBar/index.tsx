import { Button, Input } from "antd";

const SearchBar = () => {
  return (
    <div className="search-bar flex flex-row w-[100%] h-fit relative">
      <Input
        placeholder="Describe lo que necesitas..."
        className="!p-[16px_24px] !bg-[#F3F3F3] !border-none rounded-[8px] !font-[family-name:var(--font-poppins-sans)]"
      />
      <Button
        type="text"
        className="!absolute right-6 top-[20%] text-[#284290]"
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;
