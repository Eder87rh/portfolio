import Vue from "vue";
import Router from "vue-router";
import firebase from "@/firebaseInit";
import NProgress from "nprogress";

import Projects from "@/views/Projects.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";
import AboutMe from "@/views/AboutMe.vue";

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
      props: true,
      async beforeEnter(to, from, next) {
        try {
          let query = firebase.db
            .collection("projects")
            .orderBy("date", "desc");

          NProgress.start();

          query.onSnapshot(snapShot => {
            let projects = [];
            snapShot.forEach(project => {
              projects.push({
                id: project.id,
                name: project.data().name,
                live: project.data().live,
                github: project.data().github,
                description: project.data().description,
                description_long: project.data().description_long,
                languages: project.data().languages,
                images: project.data().images,
                date: project.data().date,
                certification: project.data().certification
              });
            });
            to.params.projects = projects;
            NProgress.done();
            next();
          });
        } catch (error) {
          NProgress.done();
          console.log("TCL: beforeEnter -> error", error);
          next({ name: "network-issue" });
        }
      }
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
      props: true,
      async beforeEnter(to, from, next) {
        try {
          let query = firebase.db.collection("projects").doc(to.params.id);

          NProgress.start();

          query.get().then(doc => {
            if (doc.exists) {
              let project = {
                id: doc.id,
                name: doc.data().name,
                live: doc.data().live,
                github: doc.data().github,
                description: doc.data().description,
                description_long: doc.data().description_long,
                languages: doc.data().languages,
                images: doc.data().images,
                date: doc.data().date,
                certification: doc.data().certification
              };
              to.params.project = project;

              NProgress.done();
              next();
            } else {
              NProgress.done();
              console.log("No such document.");
              next({ name: "404", params: { resource: "project" } });
            }
          });
        } catch (error) {
          NProgress.done();
          console.log("TCL: beforeEnter -> error", error);
          next({ name: "network-issue" });
        }
      }
    }
  ]
});
