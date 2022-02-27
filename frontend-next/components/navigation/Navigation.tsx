import React, { useState } from 'react';
import ToolbarComponent from './Toolbar';
import DrawerComponent from './Drawer';
import { useSession } from 'next-auth/react';

export default function Navigation() {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const { data: session, status } = useSession();

    return (
        <div>
            <ToolbarComponent 
                openDrawerHandler={() => setDrawerOpened(true)}
                isAuthenticated={(status === "authenticated" && session !== null)}
            />
            <DrawerComponent
                drawerOpened={drawerOpened}
                toggleDrawerHandler={() => setDrawerOpened(false)}
                isAuthenticated={(status === "authenticated" && session !== null)}
            />
        </div>
    )
}