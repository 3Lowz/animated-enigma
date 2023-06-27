import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'reactstrap'
// Import Data
import menuEntries from "./Menu.entries"
//i18n
// import { withTranslation } from "react-i18next"
import { useLocation } from 'react-router-dom'

// import { typeLayoutTypes } from "../../store/layouts/types"

interface sidebarInterface {
  layoutType: any
  location?: any
}

const SidebarContent = (props: sidebarInterface) => {
  const menuData = menuEntries()
  const loc = useLocation()
  const p = Object.assign({}, props, { location: loc })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const initMenu = () => {
      // const pathName = process.env.PUBLIC_URL + props.location.pathname
      const pathName = p.location.pathname
      const ul: HTMLElement | null = document.getElementById("navbar-nav")
      if (!ul) return

      // const items = ul.getElementsByTagName("a")
      // let itemsArray = [...items] // converts NodeList to Array

      // @ts-ignore
      const itemsArray: HTMLAnchorElement[] = [...ul.getElementsByTagName("a")]
      //una volte ho tutti 'a' tolgo a tutti 'active'
      removeActivation(itemsArray)

      let matchingMenuItem: HTMLAnchorElement | undefined = itemsArray.find((x) => {
        return x.pathname === pathName
      })

      if (matchingMenuItem) {
        //se matcho do 'active' all'elemento trovato
        activateParentDropdown(matchingMenuItem)
      }
    }

    if (props.layoutType === "vertical") {
      initMenu()
    }
  }, [loc.pathname, props.layoutType])

  function activateParentDropdown(item: HTMLAnchorElement) {
    // TODO: TS check html declaration and controls

    item.classList.add("active")
    //l'elemento parent che si occupa del dropdown
    let parentCollapseDiv: HTMLDivElement | null = item.closest(".collapse.menu-dropdown")

    if (parentCollapseDiv) {
      // to set aria expand true remaining
      parentCollapseDiv.classList.add("show")
      let parent: HTMLElement | null = parentCollapseDiv.parentElement
      let link: Element | null = parent?.children[0] ? parent.children[0] : null
      if (link) {
        link.classList.add("active")
        link.setAttribute("aria-expanded", "true")
        if (parent && parent.closest(".collapse.menu-dropdown")) {
          parent.closest(".collapse")?.classList.add("show")
          const prevElSibling = parent.closest(".collapse")?.previousElementSibling
          if (prevElSibling) prevElSibling.classList.add("active")
        }
        return false
      }
    }
    return false
  }

  const removeActivation = (items: HTMLAnchorElement[]) => {
    let actiItems = items.filter((x) => x.classList.contains("active"))

    actiItems.forEach((item) => {
      if (item.classList.contains("menu-link")) {
        if (!item.classList.contains("active")) {
          // item.setAttribute("aria-expanded", false) //tb prima era solo bool
          item.setAttribute("aria-expanded", 'false')
        }
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove("show")
        }
      }
      if (item.classList.contains("nav-link")) {
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove("show")
        }
        // item.setAttribute("aria-expanded", false)//tb prima era solo bool
        item.setAttribute("aria-expanded", 'false')
      }
      item.classList.remove("active")
    })
  }

  return (
    <React.Fragment>
      {/* menu Items */}
      {menuData.length > 0 && menuData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            {/* Main Header */}
            {
              item && 'isHeader' in item && item.isHeader ?

                <li className="menu-title"><span data-key="t-menu">{item.label}</span></li>

                : (

                  ('subItems' in item && item.subItems && item.subItems.length > 0 ? (

                    <li className="nav-item">
                      <Link
                        onClick={item.click}
                        className="nav-link menu-link"
                        to={item.link ? item.link : "/#"}
                        data-bs-toggle="collapse"
                      >
                        <i className={item.icon}></i> <span data-key="t-apps">{item.label}</span>
                      </Link>
                      <Collapse
                        className="menu-dropdown"
                        isOpen={item.stateVariables}
                        id="sidebarApps">
                        <ul className="nav nav-sm flex-column test">
                          {/* subItms  */}
                          {item.subItems && ((item.subItems || []).map((subItem, key) => (
                            <React.Fragment key={key}>
                              {!subItem.isChildItem ? (
                                <li className="nav-item">
                                  <Link
                                    to={subItem.link ? subItem.link : "/#"}
                                    className="nav-link"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ) : (
                                <li className="nav-item">
                                  <Link
                                    onClick={subItem.click}
                                    className="nav-link"
                                    to="/#"
                                    data-bs-toggle="collapse"
                                  > {subItem.label}
                                  </Link>
                                  <Collapse className="menu-dropdown" isOpen={subItem.stateVariables} id="sidebarEcommerce">
                                    <ul className="nav nav-sm flex-column">
                                      {/* child subItms  */}
                                      {subItem.childItems && (
                                        (subItem.childItems || []).map((childItem, key) => (
                                          <li className="nav-item" key={key}>
                                            <Link
                                              to={childItem.link ? childItem.link : "/#"}
                                              className="nav-link">
                                              {childItem.label}
                                            </Link>
                                          </li>
                                        ))
                                      )}
                                    </ul>
                                  </Collapse>
                                </li>
                              )}
                            </React.Fragment>
                          ))
                          )}
                        </ul>

                      </Collapse>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        className="nav-link menu-link"
                        to={'link' in item && item.link ? item.link : "/#"}>
                        <i className={'icon' in item ? item.icon : ''}></i> <span>{item.label}</span>
                      </Link>
                    </li>
                  ))
                )
            }
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

export default SidebarContent
