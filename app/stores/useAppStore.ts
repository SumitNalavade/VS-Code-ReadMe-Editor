import create from "zustand";

interface AppState {
    componentDrawerViewStatus: "show" | "hiding"
    componentDrawerStatus: "popular" | "all"
    toggleComponentDrawerViewStatus: () => void
    setComponentDrawerStatus: (status: "popular" | "all") => void

    editorContent: string
    setEditorContent: (content: string) => void
    addEditorContent: (content: string) => void

    createReadMe: () => Promise<unknown>
};

const useAppStore = create<AppState>()((set, get) => ({
    componentDrawerViewStatus: "hiding",
    componentDrawerStatus: "popular",
    toggleComponentDrawerViewStatus: () => set((state) => ({ componentDrawerViewStatus: state.componentDrawerViewStatus === "hiding" ? "show" : "hiding"})),
    setComponentDrawerStatus: (status) => set((state) => ({ componentDrawerStatus: status })),
    
    editorContent: "",
    setEditorContent: (content: string) => set({ editorContent: content }),
    addEditorContent: (content: string) => set((state) => ({ editorContent: `${state.editorContent} ${content}` })),

    createReadMe: () => {
        const editorContent = get().editorContent;

        const file = new Blob([editorContent], { type: "text/plain" });

        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(file)
        })
    }

}));

export default useAppStore;
