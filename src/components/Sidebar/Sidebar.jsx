import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMoon,
  FiSun,
  FiUser,
} from "react-icons/fi";
import { SIDEBAR_ITEMS } from "../../constants/sidebar-items";
import { Tooltip } from "reactstrap";
import logo from "../../assets/logo.png"

const Logo = ({ isCollapsed }) => (
  <div className="flex items-center justify-between ">
    <div className={`flex items-center ${isCollapsed? "flex-col":"flex"}`}>
      <img src={logo} alt="Logo" className="h-8" />
      {!isCollapsed && <span className="ml-2 text-xl font-semibold">FashionHub</span>}
    </div>
  </div>
);

const Sidebar = ({ isCollapsed, onToggle }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [tooltipOpen, setToolTipOpen] = useState({});

  const toggleTooltip = (id) => {
    setToolTipOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <aside
      className={`h-screen fixed p-4 shadow-lg transition-all duration-500 ease-in-out flex flex-col justify-between ${
        darkMode ? "bg-gray-900 text-[#8172E8]" : "bg-white text-[#8172E8]"
      } ${isCollapsed ? "w-20" : "w-64"}`}>
      
      <div>
        <div className={`flex items-center justify-between mb-6 ${isCollapsed? "flex-col":"flex"}`}>
          <Logo isCollapsed={isCollapsed} />
          <button
            onClick={() => onToggle(!isCollapsed)}
            className="flex items-center justify-center p-2 rounded bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease-in-out">
            {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-center p-2 mb-4 rounded bg-gray-100 dark:bg-gray-800">
          <FiUser size={20} />
          {!isCollapsed && (
            <div className="ml-2">
              <p className="font-semibold">Taras Migulko</p>
              <p className="text-sm text-gray-500">Master Admin</p>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {SIDEBAR_ITEMS.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-6">
                <hr className="border-t-2 mt-8 border-gray-300"/>
              {!isCollapsed && group.group && (
                <div className="font-semibold text-gray-600 dark:text-gray-400 uppercase mt-4 mb-2 px-2">
                  {group.group}
                </div>
              )}
              {group.items.map((item, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={() => handleSubMenuToggle(index)}
                    className={`flex items-center p-2 w-full text-left hover:bg-[#EDECF9] dark:hover:bg-[#121326] rounded transition-all duration-500 ease-in-out ${
                      isCollapsed ? "justify-center" : ""
                    }`}
                    id={`sidebar-item-${groupIndex}-${index}`}>
                    {item.icon}
                    {!isCollapsed && <span className="ml-2">{item.name}</span>}
                    {item.submenu.length > 0 && !isCollapsed && (
                      <FiChevronDown
                        className={`ml-auto ${
                          openSubMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  <Tooltip
                    placement="right"
                    isOpen={tooltipOpen[`sidebar-item-${groupIndex}-${index}`]}
                    target={`sidebar-item-${groupIndex}-${index}`}
                    toggle={() => toggleTooltip(`sidebar-item-${groupIndex}-${index}`)}></Tooltip>

                  {item.submenu.length > 0 && openSubMenu === index && !isCollapsed && (
                    <ul className="ml-4 mt-2 space-y-1 bg-gray-100 dark:bg-gray-800 p-2 rounded transition-all duration-500 ease-in-out">
                      {item.submenu.map((subItem, subindex) => (
                        <li
                          key={subindex}
                          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all duration-500 ease-in-out">
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-2 justify-center">
      {!isCollapsed &&   <span className="text-gray-500 dark:text-gray-300">Light</span>}
      
      <div
        className={`relative w-14 h-8 rounded-full p-1 cursor-pointer ${
          darkMode ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={toggleDarkMode}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform ${
            darkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {darkMode ? (
            <FiMoon className="text-yellow-400" size={18} />
          ) : (
            <FiSun className="text-yellow-400" size={18} />
          )}
        </div>
      </div>
      
      {!isCollapsed && <span className="text-gray-500 dark:text-gray-300">Dark</span>}
    </div>
    </aside>
  );
};

export default Sidebar;
