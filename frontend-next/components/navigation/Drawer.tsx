import React from "react";
import Drawer from "@mui/material/Drawer";
import { Divider, Grid, List } from "@mui/material";
import { faBriefcase} from "@fortawesome/free-solid-svg-icons"
import { NavItem } from "./NavItem";
import { useRouter } from "next/router";
import { appSettings } from "../../library/AppSettings";
import { signIn, signOut } from "next-auth/react";

export type drawerElement = {
  element: JSX.Element;
  count: number;
}

export interface IDrawerComponent {
    isAuthenticated: boolean;
    toggleDrawerHandler?: any;
    drawerOpened: boolean;
    classes?: any;
}

export default function DrawerComponent(props: IDrawerComponent) {
    const router = useRouter();

    const handleLogin = async () => {
      await signIn()
    }

    const handleLogout = async () => {
      await signOut();
    }
    
    return (
    <Drawer open={props.drawerOpened} onClose={props.toggleDrawerHandler}>
        <Grid
            px={{ width: 250 }}
            role="presentation"
            onClick={props.toggleDrawerHandler}
            onKeyDown={props.toggleDrawerHandler}
        >
          <List>
            {props.isAuthenticated && (<> 
              
            </>)}
            {!props.isAuthenticated && (<> 
             
            </>)}
            <Divider />

            <NavItem label="Index" icon={faBriefcase} pathname={appSettings.routes.Index}  />
          </List>
        </Grid>
    </Drawer>
    );
}