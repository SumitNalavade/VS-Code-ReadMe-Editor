import create from "zustand";

import components from "../components";
import IComponent from "../utils/componentInterface";

interface AppState {
    componentDrawerViewStatus: "show" | "hiding"
    componentDrawerStatus: "added" | "popular" | "all"
    toggleComponentDrawerViewStatus: () => void
    setComponentDrawerStatus: (status: "added" | "popular" | "all") => void

    components: IComponent[]

    markdownContent: string
    setEditorContent: (content: string) => void
};

const useAppStore = create<AppState>()((set) => ({
    componentDrawerViewStatus: "hiding",
    componentDrawerStatus: "added",
    toggleComponentDrawerViewStatus: () => set((state) => ({ componentDrawerViewStatus: state.componentDrawerViewStatus === "hiding" ? "show" : "hiding"})),
    setComponentDrawerStatus: (status) => set((state) => ({ componentDrawerStatus: status })),
    
    components,

    markdownContent: "",
    setEditorContent: (content: string) => set({ markdownContent: content })
}));

export default useAppStore;
