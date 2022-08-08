import React from "react";

import useAppStore from "./stores/useAppStore";

import Navbar from "./components/Navbar";
import UploadModal from "./components/UploadModal";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => {   
  const resetEditorContent = useAppStore((state) => state.resetEditorContent);
 
  return (
    <div className="container-fluid px-0">
       <Navbar />

    <UploadModal />

      <ComponentsDrawer  />

      <div className="mx-4 d-flex justify-content-around pt-4" >
        <div>
          <div className="d-flex justify-content-between">
            <p className="mx-2 text-primary"><strong>Editor</strong></p>
            <span onClick={() => resetEditorContent()} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise text-muted pointer" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg>
            </span>
          </div>
          <MarkdownEditor />
        </div>

        <div>
          <p className="mx-2 text-primary"><strong>Preview</strong></p> 
          <MarkdownPreview />
        </div>
      </div>

      </div>
  );
};

export default App;