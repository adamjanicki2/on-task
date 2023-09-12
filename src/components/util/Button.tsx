import "src/components/util/button.css";

type Props = {
  children: string;
  onClick: () => void;
  className?: string;
};

const Button = (props: Props) => <button {...props} />;

export default Button;
