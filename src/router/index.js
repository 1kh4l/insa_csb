import InsaHome from "@/components/InsaHome";
import Basilians from "@/components/Basilians";
import Students from "@/components/Students";
import Teachers from "@/components/Teachers";
import Contact from "@/components/Contact";
import InsaAdmission from "@/components/InsaAdmission";

export default [
  {
    path: "/",
    component: InsaHome,
    name: "root",
  },
  {
    path: "/home",
    component: InsaHome,
    name: "home",
  },
  {
    path: "/basilians",
    component: Basilians,
    name: "basilians",
  },
  {
    path: "/students",
    component: Students,
    name: "students",
  },
  {
    path: "/teachers",
    component: Teachers,
    name: "teachers",
  },
  {
    path: "/insa-admission",
    component: InsaAdmission,
    name: "insa-admission",
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
];
