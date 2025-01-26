// Ce fichier n'est pas obligatoire, il permet simplement de soulager router/index.js en regroupant les imports "public" ici

import PublicLayout from "./Layout.vue";
import Home from "./Home.vue";
import Cocktail from "./Cocktail.vue";
import Contact from "./Contact.vue";
import NotFound from "./Notfound.vue";

export {
    Home, Cocktail, Contact,
    PublicLayout,
    NotFound}