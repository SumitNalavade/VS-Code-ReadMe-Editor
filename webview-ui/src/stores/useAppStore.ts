import create from "zustand";
import { v4 as uuid } from "uuid";
import IComponent from "../utils/componentInterface";

interface AppState {
  componentDrawerStatus: "popular" | "all" | "templates";
  setComponentDrawerStatus: (status: "popular" | "all" | "templates") => void;

  selectedComponent: IComponent | null;
  setSelectedComponent: (component: IComponent) => void;

  sectionStack: IComponent[];
  setSectionStack: (newSectionStack: IComponent[]) => void;
  addSectionStack: (component: IComponent) => void;

  importReadMe: (markdownContent: string) => void;

  createReadMe: () => Promise<unknown>;
}

const useAppStore = create<AppState>()((set, get) => ({
  componentDrawerStatus: "popular",
  setComponentDrawerStatus: (status) => set(() => ({ componentDrawerStatus: status })),

  sectionStack: [
    {
      name: "Custom",
      content: `
  # VS Code Readme Editor 📝  
  Import your existing Readme using the import button at the bottom, 
  or create a new Readme from scratch by typing in the editor.  
  
  ## Get Started 🚀  
  To get started, hit the 'clear' button at the top of the editor!  
  
  ## Prebuilt Components/Templates 🔥  
  You can checkout prebuilt components and templates by clicking on the 'Add Section' button or menu icon
  on the top left corner of the navbar.
      
  ## Save Readme ✨  
  Once you're done, click on the save button to download and save your ReadMe!
  `,
      id: uuid(),
    },
  ],
  setSectionStack: (sectionStack: IComponent[]) => set((state) => ({ sectionStack: [...sectionStack]})),
  addSectionStack: (component: IComponent) => {
    const id = uuid();

    set((state) => ({ sectionStack: [...state.sectionStack, { ...component, id }] }));
    set((state) => ({ selectedComponent: { ...component, id } }));
  },

  selectedComponent: null,
  setSelectedComponent: (component) => set(() => ({ selectedComponent: component })),

  importReadMe: (markdownContent) => set((state) => ({ sectionStack: [{ name: "Custom", content: markdownContent }] })),

  createReadMe: () => {
    const sections = get().sectionStack;
    const content = sections.reduce((previousValue, currentValue) => {
      // Check if the current content is already present in the accumulated value
      if (!previousValue.includes(currentValue.content)) {
        // Append the current content if it's not a duplicate
        previousValue += currentValue.content;
      }
      
      return previousValue;
    }, sections[0].content);

    const file = new Blob([content], { type: "text/plain" });

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  },
}));

export default useAppStore;
