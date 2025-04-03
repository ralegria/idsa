import { Button, ButtonProps } from "antd";

const CustomButton = (props: ButtonProps) => {
  const { children } = props;
  return (
    <Button
      {...props}
      className="!p-[12px_24px] !h-[40px] !font-[family-name:var(--font-poppins-sans)]"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
