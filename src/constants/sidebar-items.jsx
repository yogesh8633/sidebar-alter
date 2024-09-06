import { AiFillWarning } from "react-icons/ai";
import { BsFilePerson } from "react-icons/bs";
import { FiBell, FiBriefcase, FiCrosshair, FiFile, FiHome, FiSettings, FiStar, FiUser } from "react-icons/fi";
import { TbFaceIdError, TbFileReport } from "react-icons/tb";

export const SIDEBAR_ITEMS = [
  {
    group: "Analytics",
    items: [
      {
        name: "Dashboard",
        route: "/dashboard",
        icon: <FiHome size={20} />,
        submenu: [],
      },
      {
        name: "BP Records",
        route: "/user",
        icon: <FiUser size={20} />,
        submenu: [
          { name: "Sub Item 1", route: "/dashboard/sub1" },
          { name: "Sub Item 2", route: "/dashboard/sub2" },
        ],
      },
    ],
  },
  {
    group: "Application",
    items: [
      {
        name: "Business",
        route: "/business",
        icon: <FiBriefcase size={20} />,
        submenu: [],
      },
      {
        name: "Members",
        route: "/member",
        icon: <BsFilePerson size={20} />,
        submenu: [
        ],
      },
    ],
  },

  {
    group: "Others",
    items: [
      {
        name: "Notification",
        route: "/business",
        icon: <FiBell size={20} />,
        submenu: [],
      },
      {
        name: "Membership",
        route: "/member",
        icon: <FiStar size={20} />,
        submenu: [
        ],
      },
      {
        name: "Suspensions",
        route: "/member",
        icon: <FiCrosshair size={20} />,
        submenu: [
        ],
      },
      {
        name: "No Show",
        route: "/member",
        icon: <TbFaceIdError size={20} />,
        submenu: [
        ],
      },
      {
        name: "Penalities",
        route: "/member",
        icon: <AiFillWarning size={20} />,
        submenu: [
        ],
      },
    ],
  },


  // {
  //   name: "Reports",
  //   route: "/reports",
  //   icon: <TbFileReport size={20} />,
  //   submenu: [],
  // },
  // {
  //   name: "Files",
  //   route: "/file",
  //   icon: <FiFile size={20} />,
  //   submenu: [],
  // },
  // {
  //   name: "Settings",
  //   route: "/setting",
  //   icon: <FiSettings size={20} />,
  //   submenu: [],
  // },
];
