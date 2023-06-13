import React, { useState, useRef } from "react";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadModal from "./components/UploadModal";
import Sections from "./components/Sections";
import ComponentDescriptionModal from "./components/ComponentsDrawer/componentDescriptionModal";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploadedReadMe, setUploadedReadMe] = useState<string | null>(null);

  const handleUpload = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = evt.target.files![0];

    const fileText = await new Promise((resolve, reject) => {
      const fr = new FileReader();

      fr.onload = () => {
        resolve(fr.result);
      };

      fr.onerror = reject;

      fr.readAsText(uploadedFile);
    });

    setUploadedReadMe(fileText as string);

    // @ts-ignore
    window.my_modal_2.showModal();
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Layout>
      <input
        type="file"
        id="selectedFile"
        ref={fileInputRef}
        className="hidden"
        onChange={handleUpload}
      />
      <button className="btn" onClick={handleBrowseClick}>
        Import ReadMe
      </button>

      {uploadedReadMe ? <UploadModal uploadedReadMe={uploadedReadMe} /> : ""}

      {/* <ComponentDescriptionModal />

      <ComponentsDrawer />

      <div className="d-flex justify-content-between pt-4">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div>
                <Sections />
              </div>
            </div>
            <div className="col-9">
              <div>
                <MarkdownEditor />
              </div>
            </div>
          </div>
        </div>

        <MarkdownPreview />
      </div>
      <Footer /> */}
    </Layout>
  );
};

export default App;
