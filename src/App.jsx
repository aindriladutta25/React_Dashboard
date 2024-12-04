import Topbar from "./global/Topbar.jsx";
// import Sidebar from "./global/Sidebar";
// import { ThemeProvider,  } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  
 return (
   
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
        <CssBaseline/> 
        <div className="app">
            <main className="content">
            <Topbar/>
            </main>
        </div>
      </ThemeProvider>
     </ColorModeContext.Provider> 
    
  )
}

export default App;
