import create from "zustand";

interface AppState {
    componentDrawerViewStatus: "show" | "hiding"
    componentDrawerStatus: "popular" | "all"
    toggleComponentDrawerViewStatus: () => void
    setComponentDrawerStatus: (status: "popular" | "all") => void

    editorContent: string
    setEditorContent: (content: string) => void
    addEditorContent: (content: string) => void
};

const useAppStore = create<AppState>()((set, get) => ({
    componentDrawerViewStatus: "hiding",
    componentDrawerStatus: "popular",
    toggleComponentDrawerViewStatus: () => set((state) => ({ componentDrawerViewStatus: state.componentDrawerViewStatus === "hiding" ? "show" : "hiding"})),
    setComponentDrawerStatus: (status) => set((state) => ({ componentDrawerStatus: status })),
    
    editorContent: "",
    setEditorContent: (content: string) => set({ editorContent: content }),
    addEditorContent: (content: string) => set((state) => ({ editorContent: `${state.editorContent} ${content}` }))
}));

export default useAppStore;
