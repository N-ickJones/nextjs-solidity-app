import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { Box, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { appSettings } from "../../library/AppSettings";

const useStyles = makeStyles((theme: Theme) => createStyles({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      cursor: "pointer"
    }
  }
}));

export interface IToolbarComponent {
  isAuthenticated: boolean;
  openDrawerHandler?: any;
}

export default function ToolbarComponent(props: IToolbarComponent) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* Left side Menu Button */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color={"primary"}
            aria-label="open drawer"
            onClick={props.openDrawerHandler}
            size="large">
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center"  onClick={() => router.push(appSettings.routes.Index)} className={classes.hover}>
            <img src="/favicon.ico" alt="nextjs-solidity-app" height={30} width={30} />
            <Typography variant="h6" noWrap color="secondary">&nbsp;nextjs-solidity-app</Typography>
          </Box>

        </Toolbar>
      </AppBar>
    </div>
  );
}