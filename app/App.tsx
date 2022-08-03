import React, { useState }  from "react";

import Layout from "./components/layout";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => {

  return (
    <Layout>
      
      <ComponentsDrawer />

      <div className="mx-4" >
        <div className="row">
          <div className="col">
            <p className="h3 text-center" >Editor</p>
            <MarkdownEditor />
          </div>

          <div className="col">
            <p className="h3 text-center" >Preview</p>
            <MarkdownPreview />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default App;
