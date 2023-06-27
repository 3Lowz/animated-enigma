import React, { useEffect, useState } from 'react'
import { MenuState, ContainerMenuItem, MenuTitle } from './types'
/**
 * 
 * TODO: for sure this component should handle a reference to the {navigation} from rrv6
 * 
 * @returns The array of object used to build the side menu
 */

//aggiungere rotta esempio base
//aggiungere altri 2 header tutle section 
//aggiungere una sezione con sub item e sub-sub item 

/*
    Abbiamo 4 tipologie di item
    1-titolo -> serve solo a dare il titolo (per separare sezioni)( non hanno nessun tipo di logica )
    2 - Base items -> voci di menu che al click portano direttamente ad una sezione ( es rotta 'simple_route' //!da fare)
*/
const NavMenu = () => {

    const [isMain, setIsMain] = useState<boolean>(false)
    const [isBase, setIsBase] = useState<boolean>(false)
    const [isMultiLevel, setIsMultiLevel] = useState(false)

    // Multi Level
    const [isLevel1, setIsLevel1] = useState<boolean>(false)
    // const [isLevel2, setIsLevel2] = useState<boolean>(false);

    //ogni sezione deve essere dichiarata 
    const [getCurrentState, setCurrentState] = useState<MenuState>(MenuState.main)

    useEffect(() => {
        // Gestione state componente (routing solo base items)
        document.body.classList.remove('twocolumn-panel');
        if (getCurrentState !== MenuState.main) {
            setIsMain(false)
        }
        if (getCurrentState !== MenuState.base) {
            setIsBase(false)
        }
    }, [
        // history,
        getCurrentState,
        isMain,
        isBase,
    ]);

    const menuItems: Array<MenuTitle|ContainerMenuItem> = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: MenuState.main,
            label: "Main",
            icon: "ri-dashboard-2-line",
            link: "/main",
            click: function (e: React.MouseEvent<HTMLAnchorElement>) {
                e.preventDefault()
                setIsMain(!isMain)
                setCurrentState(MenuState.main)
            }
        },
        {
            label: "ADM Module",
            isHeader: true,
        },
        {
            id: MenuState.base,
            label: "Template Module",
            icon: "ri-apps-2-line",
            link: "/base",
            click: function (e: React.MouseEvent<HTMLAnchorElement>) {
                e.preventDefault();
                setIsBase(!isBase);
                setCurrentState(MenuState.base);
            },
            stateVariables: isBase,
            subItems: [
                {
                    id: 'Module-Entries',
                    label: "Module Entries",
                    link: "/base/1",
                    parentId: MenuState.base,
                    isChildItem: false,
                },
                {
                    id: MenuState.path2,
                    label: "Module Entries 2",
                    link: "/base/2",
                    parentId: MenuState.base,
                    isChildItem: false,
                },
            ]
        }
    ];

    return menuItems
};

export default NavMenu
