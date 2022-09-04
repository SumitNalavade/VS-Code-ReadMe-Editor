import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import useAppStore from "../../stores/useAppStore";

import ColorTheme from "../../utils/colorThemeEnum";

const MarkdownPreview: React.FC= () => {
  const editorContent = useAppStore((state) => state.editorContent);
  const colorTheme = useAppStore((state) => state.colorTheme);

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
