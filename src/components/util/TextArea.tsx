import "src/components/util/textarea.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const TextArea = ({ onChange, ...rest }: Props) => (
  <textarea
    rows={20}
    onChange={(event) => onChange(event.target.value)}
    {...rest}
  />
);

export default TextArea;
