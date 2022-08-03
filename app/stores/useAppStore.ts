import create from "zustand";

import components from "../components";
import IComponent from "../utils/componentInterface";

interface AppState {
    componentDrawerStatus: "show" | "hiding"
    toggleComponentDrawerStatus: () => void

    components: IComponent[]

    markdownContent: string
    setEditorContent: (content: string) => void
};

const useAppStore = create<AppState>()((set) => ({
    componentDrawerStatus: "hiding",
    toggleComponentDrawerStatus: () => set((state) => ({ componentDrawerStatus: state.componentDrawerStatus === "hiding" ? "show" : "hiding"})),

    components,

    markdownContent: "",
    setEditorContent: (content: string) => set({ markdownContent: content })
}));

export default useAppStore;
