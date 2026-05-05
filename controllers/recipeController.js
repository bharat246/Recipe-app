exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, cookingTime } = req.body;

    // ✅ Validation
    if (!title?.trim() || !instructions?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title and instructions are required"
      });
    }

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Ingredients must be a non-empty array"
      });
    }

    if (typeof cookingTime !== "number") {
      return res.status(400).json({
        success: false,
        message: "Cooking time must be a number"
      });
    }

    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      message: "Recipe created successfully",
      data: recipe
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};