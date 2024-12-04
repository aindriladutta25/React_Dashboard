import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from '@mui/icons-material/History';
import StarOutlineIcon from '@mui/icons-material/StarTwoTone';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box>
        <IconButton>
          <ViewSidebarOutlinedIcon/>
        </IconButton>
        <IconButton>
          <StarOutlineIcon/>
        </IconButton>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Dashboard/ Default" />
      </Box >

      {/* SEARCH BAR */}
    <Box display="flex" justifyContent="space-between"> 
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="1px"
        justifyContent="space-between"
      >
       
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search" />
        <IconButton>
          <KeyboardCommandKeyOutlinedIcon/>
        </IconButton>
      </Box>

      {/* ICONS */}
     
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <HistoryIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <ViewSidebarOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;