import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import theme from "../../theme";

export interface INavItem {
    label: string;
    icon?: IconProp;
    pathname?: string;
    onClick?: () => void;
  }
  
  export function NavItem(props: INavItem) {
    const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (props.pathname) {
        router.push(props.pathname);
      }
      else {    
        props.onClick && props.onClick()
      } 
    };
  
    return (
      <ListItem button selected={props.pathname ? router.pathname === props.pathname : false} onClick={handleClick}>
        {props.icon &&
          <ListItemIcon>
            <FontAwesomeIcon icon={props.icon} size={"lg"} style={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
        }
        <ListItemText primary={props.label} />
      </ListItem>
    )
  }