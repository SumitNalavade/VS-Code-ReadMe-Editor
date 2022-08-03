import React, { useState }  from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import useAppStore from "./stores/useAppStore";

import Layout from "./components/layout";
import ComponentsDrawer from "./components/ComponentsDrawer";

const App = () => {

  const editorContent = useAppStore((state) => state.editorContent);

  return (
    <Layout>
      
      <ComponentsDrawer />

      <div className="preview">
        <ReactMarkdown children={editorContent} remarkPlugins={[remarkGfm]} />
      </div>

    </Layout>
  );
};

export default App;
