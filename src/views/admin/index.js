// Ce fichier n'est pas obligatoire, il permet simplement de soulager router/index.js en regroupant les imports "admin" ici

import CocktailEdit from "./cocktails/CocktailEdit.vue";
import CocktailIndex from "./cocktails/CocktailIndex.vue";
import UserAdd from "./users/UserAdd.vue";
import UserEdit from "./users/UserEdit.vue";
import UserIndex from "./users/UserIndex.vue";
import Dashboard from "./Dashboard.vue";
import AdminLayout from "./Layout.vue";

export {
    CocktailIndex, CocktailEdit,
    UserEdit, UserAdd, UserIndex,
    AdminLayout,
    Dashboard}