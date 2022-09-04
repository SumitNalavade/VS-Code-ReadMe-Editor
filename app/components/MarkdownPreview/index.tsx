import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import useAppStore from "../../stores/useAppStore";

import ColorTheme from "../../utils/colorThemeEnum";

interface Props {
  colorTheme: ColorTheme
}

const MarkdownPreview: React.FC<Props> = ({ colorTheme }) => {
  const editorContent = useAppStore((state) => state.editorContent);

  const previewContent = (
    <ReactMarkdown children={editorContent} remarkPlugins={[remarkGfm]} />
  );

  return (
    <div
      className={`preview overflow-auto text-break border rounded border-muted p-4 ${ colorTheme === ColorTheme.DARK ? "invertColor" : "" }`}
      style={{ height: "85vh", width: "45vw"}}
    >
      {previewContent}
    </div>
  );
};

export default MarkdownPreview;
