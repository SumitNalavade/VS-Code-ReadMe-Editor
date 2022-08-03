import create from "zustand";

import components from "../components";
import IComponent from "../utils/componentInterface";

interface AppState {
    componentDrawerStatus: "show" | "hiding"
    toggleComponentDrawerStatus: () => void

    components: IComponent[]

    editorContent: string
    setEditorContent: (content: string) => void
};

const useAppStore = create<AppState>()((set) => ({
    componentDrawerStatus: "hiding",
    toggleComponentDrawerStatus: () => set((state) => ({ componentDrawerStatus: state.componentDrawerStatus === "hiding" ? "show" : "hiding"})),

    components,

    editorContent: "",
    setEditorContent: (content: string) => set({ editorContent: content })
}));

export default useAppStore;
