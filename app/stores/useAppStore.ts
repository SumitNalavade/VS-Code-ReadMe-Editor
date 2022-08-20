import create from "zustand";
import IComponent from "../utils/componentInterface";

interface AppState {
  componentDrawerStatus: "popular" | "all" | "templates";
  setComponentDrawerStatus: (status: "popular" | "all" | "templates") => void;

  selectedComponent: IComponent | null;
  setSelectedComponent: (component: IComponent) => void;

  editorContent: string;
  setEditorContent: (content: string) => void;
  addEditorContent: (content: string) => void;

  importReadMe: (markdownContent: string) => void;

  clearEditorContent: () => void;

  createReadMe: () => Promise<unknown>;

  sendBase64ReadMeToExtension: () => void;
}

const useAppStore = create<AppState>()((set, get) => ({
  componentDrawerStatus: "popular",
  setComponentDrawerStatus: (status) =>
    set(() => ({ componentDrawerStatus: status })),

  selectedComponent: null,
  setSelectedComponent: (component) =>
    set(() => ({ selectedComponent: component })),

  editorContent: `
# VS Code Readme Editor 📝  
Import your existing Readme using the import button on the top right corner of the navbar, 
or create a new Readme from scratch by typing in the editor.  

## Get Started 🚀  
To get started, hit the 'clear' button at the top of the editor!  

## Prebuilt Components/Templates 🔥  
You can checkout prebuilt components and templates by clicking on the menu icon
on the top left corner of the navbar.
    
## Save Readme ✨  
Once you're done, click on the save button to directly save your Readme to your
project's root directory!
`,
  setEditorContent: (content) => set({ editorContent: content }),
  addEditorContent: (content) =>
    set((state) => ({ editorContent: `${state.editorContent} ${content}` })),

  importReadMe: (markdownContent) =>
    set((state) => ({ editorContent: markdownContent })),

  clearEditorContent: () => set((state) => ({ editorContent: "" })),

  createReadMe: () => {
    const editorContent = get().editorContent;

    const file = new Blob([editorContent], { type: "text/plain" });

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  },

  sendBase64ReadMeToExtension: async () => {
    const createReadMe = get().createReadMe;

    const base64ReadMe = await createReadMe();

    vscode.postMessage({ command: "saveReadMe", content: base64ReadMe });
  },
}));

export default useAppStore;
