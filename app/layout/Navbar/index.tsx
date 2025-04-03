import Image from "next/image";

import { Header } from "antd/es/layout/layout";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import SearchBar from "../components/SearchBar";
import IdsaBtn from "../components/CustomButton";

import "./Navbar.scss";

const CustomNavbar = () => {
  return (
    <Header className="custom-navbar !p-[13px_24px] !bg-white !h-auto grid grid-cols-[8fr_2fr] gap-[40px] items-center justify-between !font-[family-name:var(--font-poppins-sans)]">
      <div className="logo-n-place grid grid-cols-[auto_auto_5fr] gap-4 items-center">
        <Image
          src={"/logo.svg"}
          width={108}
          height={32}
          alt="IDSA Logo"
          className="main-logo"
        />
        <Dropdown
          menu={{ items: [] }}
          trigger={["click"]}
          className="place-menu"
        >
          <Space>
            Enviar a
            <DownOutlined />
          </Space>
        </Dropdown>
        <SearchBar />
      </div>
      <div className="flex flex-row gap-3">
        <IdsaBtn>
          <Image
            src={"/icons/ai-bot.svg"}
            width={20}
            height={20}
            alt="AI Icon"
          />
        </IdsaBtn>
        <IdsaBtn>
          <Image
            src={"/icons/cart.svg"}
            width={20}
            height={20}
            alt="Shopping Cart Icon"
          />
        </IdsaBtn>
        <IdsaBtn type="primary">Iniciar Sesi&oacute;n</IdsaBtn>
      </div>
    </Header>
  );
};

export default CustomNavbar;
