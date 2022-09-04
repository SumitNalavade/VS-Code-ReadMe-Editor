import { useState } from "react";
import ColorTheme from "../utils/colorThemeEnum";

const useColorTheme = () => {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(ColorTheme.LIGHT);

    const toggleColorTheme = () => {
        colorTheme === ColorTheme.LIGHT ? setColorTheme(ColorTheme.DARK) : setColorTheme(ColorTheme.LIGHT);
    
        console.log(colorTheme);
    };
    
    return {
        colorTheme,
        toggleColorTheme
    };
};

export default useColorTheme;
