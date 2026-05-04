const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.json(recipe);
};

exports.getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
};

exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};