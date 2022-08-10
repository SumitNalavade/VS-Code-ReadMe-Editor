import React from 'react';

import useAppStore from './stores/useAppStore';

import Navbar from './components/Navbar';
import UploadModal from './components/UploadModal';
import ComponentDescriptionModal from './components/ComponentsDrawer/componentDescriptionModal';
import ComponentsDrawer from './components/ComponentsDrawer';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

const App = () => {
  const clearEditorContent = useAppStore(state => state.clearEditorContent);

  return (
    <div className="container-fluid px-0">
      <Navbar />

      <UploadModal />
      <ComponentDescriptionModal />

      <ComponentsDrawer />

      <div className="mx-4 d-flex justify-content-around pt-4">
        <div>
          <div className="d-flex justify-content-between">
            <p className="mx-2" style={{ color: '#ef476f' }}>
              <strong>Editor</strong>
            </p>
            <span onClick={() => clearEditorContent()}>
              <p style={{ color: '#ef476f' }}>Clear</p>
            </span>
          </div>
          <MarkdownEditor />
        </div>

        <div>
          <p className="mx-2" style={{ color: '#ef476f' }}>
            <strong>Preview</strong>
          </p>
          <MarkdownPreview />
        </div>
      </div>
    </div>
  );
};

export default App;
