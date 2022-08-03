import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import useAppStore from "../../stores/useAppStore";

const MarkdownPreview: React.FC = () => {

    const markdownContent = useAppStore((state) => state.markdownContent);

    const previewContent =  <ReactMarkdown children={markdownContent} remarkPlugins={[remarkGfm]} />

    return (
        <div className="preview overflow-auto" style={{ "height": "85vh" }}>
              { previewContent }
        </div>
    );
};

export default MarkdownPreview;