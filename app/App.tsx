import React from "react";

import Layout from "./components/layout";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => { 
  return (
    <Layout>
      
      <ComponentsDrawer  />

      <div className="mx-4 d-flex justify-content-around pt-4" >
        <div>
          <p className="h3 text-center">Editor</p>
          <MarkdownEditor />
        </div>

        <div>
          <p className="h3 text-center">Preview</p>
          <MarkdownPreview />
        </div>
      </div>

    </Layout>
  );
};

export default App;
