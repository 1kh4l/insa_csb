import Basilians from "@/components/Basilians.vue";
import Contact from "@/components/Contact.vue";
import EducationLevels from "@/components/EducationLevels.vue";
import InsaAdmission from "@/components/InsaAdmission.vue";
import InsaHome from "@/components/InsaHome.vue";
import Students from "@/components/Students.vue";
import Teachers from "@/components/Teachers.vue";
import { RouteConfig } from "vue-router";

const Routes: RouteConfig[] = [
  {
    component: InsaHome,
    name: "root",
    path: "/",
  },
  {
    component: InsaHome,
    name: "home",
    path: "/home",
  },
  {
    component: Basilians,
    name: "basilians",
    path: "/basilians",
  },
  {
    component: Students,
    name: "students",
    path: "/students",
  },
  {
    component: Teachers,
    name: "teachers",
    path: "/teachers",
  },
  {
    component: EducationLevels,
    name: "education-levels",
    path: "/education-levels",
  },
  {
    component: InsaAdmission,
    name: "insa-admission",
    path: "/insa-admission",
  },
  {
    component: Contact,
    name: "contact",
    path: "/contact",
  },
];

export default Routes;
