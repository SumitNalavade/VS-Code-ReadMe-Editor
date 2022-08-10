import create from 'zustand';

interface AppState {
  componentDrawerStatus: 'popular' | 'all' | 'templates';
  setComponentDrawerStatus: (status: 'popular' | 'all' | 'templates') => void;

  editorContent: string;
  setEditorContent: (content: string) => void;
  addEditorContent: (content: string) => void;

  importReadMe: (markdownContent: string) => void;

  clearEditorContent: () => void;

  createReadMe: () => Promise<unknown>;

  sendBase64ReadMeToExtension: () => void;
}

const useAppStore = create<AppState>()((set, get) => ({
  componentDrawerStatus: 'popular',
  setComponentDrawerStatus: status => set(state => ({ componentDrawerStatus: status })),

  editorContent: `
# VS Code ReadMe Editor 📝  
Import your existing ReadMe using the import button on the top right corner of the navbar, 
or create a new ReadMe from scratch by typing in the editor.  

## Get Started 🚀  
To get started, hit the 'clear' button at the top of the editor!  

## Prebuilt Components/Templates 🔥  
You can checkout prebuilt components and templates by clicking on the menu icon
on the top left corner of the navbar.
    
## Save ReadMe ✨  
Once you're done, click on the save button to directly save your ReadMe to your
project's root directory!
`,
  setEditorContent: (content: string) => set({ editorContent: content }),
  addEditorContent: (content: string) =>
    set(state => ({ editorContent: `${state.editorContent} ${content}` })),

  importReadMe: (markdownContent: string) => set(state => ({ editorContent: markdownContent })),

  clearEditorContent: () => set(state => ({ editorContent: '' })),

  createReadMe: () => {
    const editorContent = get().editorContent;

    const file = new Blob([editorContent], { type: 'text/plain' });

    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  },

  sendBase64ReadMeToExtension: async () => {
    const createReadMe = get().createReadMe;

    const base64ReadMe = await createReadMe();

    vscode.postMessage({ command: 'saveReadMe', content: base64ReadMe });
  },
}));

export default useAppStore;
