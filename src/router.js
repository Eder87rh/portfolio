import Vue from "vue";
import Router from "vue-router";

const Projects = () => ({
  component: import(/* webpackChunkName: "Projects" */ "@/views/Projects")
});

const ProjectDetails = () => ({
  component: import(
    /* webpackChunkName: "ProjectDetails" */ "@/views/ProjectDetails"
  )
});

const AboutMe = () => ({
  component: import(/* webpackChunkName: "AboutMe" */ "@/views/AboutMe")
});

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      var elmnt = document.getElementById("content-navigation");
      elmnt.scrollIntoView();
    }
  },
  routes: [
    {
      path: "/",
      name: "projects",
      component: Projects,
      props: true
    },
    {
      path: "/about-me",
      name: "about-me",
      component: AboutMe
    },
    {
      path: "/:id",
      name: "project_details",
      component: ProjectDetails,
      props: true
    }
  ]
});
