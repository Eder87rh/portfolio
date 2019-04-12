import Vue from "vue";
import Router from "vue-router";
import firebase from "@/firebaseInit";

import Projects from "@/views/Projects.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "projects",
      component: Projects
    },
    {
      path: "/:id",
      name: "project_details",
      component: ProjectDetails,
      props: true,
      async beforeEnter(to, from, next) {
        try {
          console.log("params", to.params);
          let query = firebase.db.collection("projects").doc(to.params.id);

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
              next();
            } else {
              console.log("No such document.");
              next({ name: "404", params: { resource: "project" } });
            }
          });
        } catch (error) {
          console.log("TCL: beforeEnter -> error", error);
          next({ name: "network-issue" });
        }
      }
    }
  ]
});
