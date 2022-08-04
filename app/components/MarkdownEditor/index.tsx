import React from "react";
import Editor from "@monaco-editor/react";

import useAppStore from "../../stores/useAppStore";

const MarkdownEditor: React.FC = () => {
    const editorContent = useAppStore((state) => state.editorContent);
    const setEditorContent = useAppStore((state) => state.setEditorContent);
    
    const handleChange = (value: string) => {
        setEditorContent(value);
    }

    return (
        <>
            <Editor 
              theme="vs-dark"
              height="85vh"
              width="45vw"
              defaultLanguage="Markdown"
              defaultValue={editorContent}
              value={editorContent}
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
