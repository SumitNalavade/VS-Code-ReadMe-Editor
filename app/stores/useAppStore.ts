import create from "zustand";

interface AppState {
    componentDrawerStatus: "popular" | "all" | "templates"
    setComponentDrawerStatus: (status: "popular" | "all" | "templates") => void

    editorContent: string
    setEditorContent: (content: string) => void
    addEditorContent: (content: string) => void

    importReadMe: (markdownContent: string) => void

    resetEditorContent: () => void

    createReadMe: () => Promise<unknown>

    sendBase64ReadMeToExtension: () => void
};

const useAppStore = create<AppState>()((set, get) => ({
    componentDrawerStatus: "popular",
    setComponentDrawerStatus: (status) => set((state) => ({ componentDrawerStatus: status })),
    
    editorContent: `
# Project Title  
A brief description of what this project does and who it's for`,
    setEditorContent: (content: string) => set({ editorContent: content }),
    addEditorContent: (content: string) => set((state) => ({ editorContent: `${state.editorContent} ${content}` })),

    importReadMe: (markdownContent: string) => set((state) => ({ editorContent: markdownContent })),

    resetEditorContent: () => set((state) => ({ editorContent: `
# Project Title  
A brief description of what this project does and who it's for` })),

    createReadMe: () => {
        const editorContent = get().editorContent;

        const file = new Blob([editorContent], { type: "text/plain" });

        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(file)
        })
    },

    sendBase64ReadMeToExtension: async() => {
        const createReadMe = get().createReadMe;

        const base64ReadMe = await createReadMe()

        vscode.postMessage({ command: "saveReadMe", content: base64ReadMe });
    }

}));

export default useAppStore;
