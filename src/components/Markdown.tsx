import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import "src/components/markdown.css";

type Props = {
  children: string;
};

const Markdown = (props: Props) => (
  <ReactMarkdown
    {...props}
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeSanitize]}
    disallowedElements={["h4", "h5", "h6"]}
    components={{
      code: ({ node, style, ...props }) => (
        <code
          className="bg-light-gray br2 ph1"
          style={{ ...style, fontSize: "90%" }}
          {...props}
        />
      ),
      a: ({ node, children, ...props }) => (
        <a {...props} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    }}
  />
);

export default Markdown;
