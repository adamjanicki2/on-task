import { useState } from "react";
import { useSavedContent } from "src/hooks";
import Markdown from "src/components/Markdown";
import Button from "src/components/util/Button";
import TextArea from "src/components/util/TextArea";

type Props = {
  className?: string;
};

const Display = ({ className = "" }: Props) => {
  const [editing, setEditing] = useState(false);
  const { content, setContent } = useSavedContent();
  const [editingContent, setEditingContent] = useState(content);

  return (
    <div className={`flex flex-column ${className}`}>
      {!editing && (
        <Button
          onClick={() => {
            setEditing(true);
            setEditingContent(content);
          }}
        >
          Edit
        </Button>
      )}
      {editing ? (
        <TextArea value={editingContent} onChange={setEditingContent} />
      ) : (
        <Markdown>{content}</Markdown>
      )}
      {editing && (
        <div className="flex items-center mv2">
          <Button className="mr2" onClick={() => setEditing(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setContent(editingContent);
              setEditing(false);
            }}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default Display;
