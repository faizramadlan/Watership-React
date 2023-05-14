const router = require("express").Router();
const productsController = require("../controllers/productsController");
const { authentication } = require("../middlewares/authentications");

router.get("/", productsController.getCourses);
router.post("/", authentication, productsController.postCourse);
router.get("/:id", productsController.getDetailCourse);
router.put("/:id", authentication, productsController.editCourse);
router.delete("/:id", authentication, productsController.deleteCourse);

module.exports = router;
