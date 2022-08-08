import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import { UploadIcon } from "../icons";

const UploadModal: React.FC = () => {
    const [uploadedFile, setUploadedFile] = useState<File>();
    const [uploadedFileContents, setUploadedFileContents] = useState<string>();

    const onDrop = useCallback((file: File[]) => {
        const uploadedFile = file[0];
    
        setUploadedFile(uploadedFile);
        extractFileContents(uploadedFile);
    
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop}) //React-dropzone props

    const extractFileContents = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target!.result as string;
          setUploadedFileContents(text);
        }
        reader.readAsText(file);
    }
    
    return (
          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Import ReadMe</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div {...getRootProps()} >
                      <input {...getInputProps()} type="file" />
                      <div>
                      { !uploadedFileContents ?
                            <p className="text-muted" >ReadMe</p>
                        : <div className='preview px-2'>
                            <ReactMarkdown>{uploadedFileContents}</ReactMarkdown>
                          </div>
                      }  
                      </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success d-flex align-items-center"> <UploadIcon /> Import</button>
                </div>
              </div>
            </div>
          </div>
      )
};

export default UploadModal;