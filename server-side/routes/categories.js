const router = require("express").Router();
const categoriesController = require("../controllers/categoriesController");
const { authentication } = require("../middlewares/authentications");

router.get("/", categoriesController.getCategories);
router.post("/", authentication, categoriesController.postCategory);
router.get("/:id", categoriesController.detailCategory);
router.put("/:id", authentication, categoriesController.editCategory);
router.delete("/:id", authentication, categoriesController.deleteCategory);

module.exports = router;
