import create from "zustand";
import { combine } from "zustand/middleware";

interface AppState {
    componentDrawerStatus: "show" | "hiding"
    toggleComponentDrawerStatus: () => void
};

const useAppStore = create<AppState>()((set) => ({
    componentDrawerStatus: "hiding",
    toggleComponentDrawerStatus: () => set((state) => ({ componentDrawerStatus: state.componentDrawerStatus === "hiding" ? "show" : "hiding"}))
}));

export default useAppStore;
