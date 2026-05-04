const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/recipeController");

router.post("/", ctrl.createRecipe);
router.get("/", ctrl.getAllRecipes);
router.get("/:id", ctrl.getRecipeById);
router.put("/:id", ctrl.updateRecipe);
router.delete("/:id", ctrl.deleteRecipe);

module.exports = router;