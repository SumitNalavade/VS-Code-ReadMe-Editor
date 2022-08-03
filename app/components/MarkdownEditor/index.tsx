import React from "react";
import Editor from "@monaco-editor/react";

import useAppStore from "../../stores/useAppStore";

const MarkdownEditor: React.FC = () => {
    const markdownContent = useAppStore((state) => state.markdownContent);
    const setEditorContent = useAppStore((state) => state.setEditorContent);
    
    const handleChange = (value: string) => {
        setEditorContent(value);
    }

    return (
        <>
            <Editor 
              theme="vs-dark"
              height="85vh"
              defaultLanguage="Markdown"
              defaultValue={markdownContent}
              value={markdownContent}
              onChange={(value) => handleChange(value as string)}
              options={{
                minimap: {
                  enabled: false,
                }
              }}
            />
        </>
    )
};

export default MarkdownEditor;
