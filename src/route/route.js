const express = require('express');
const router = express.Router();
const controller = require("../controller/authorController")
const controller1 = require("../controller/blogController")
const middleware1 = require("../middleware/middleware")


router.post("/authors", controller.createAuthor)

router.post("/login", controller.login) 

router.post("/createBlog/:authorId", middleware1.auth, controller1.createBlog)

router.get("/blogs", middleware1.auth, controller1.getBlog)

router.put("/blogs/:blogId",middleware1.auth, controller1.updatedBlog)

router.delete("/blogs/:blogId", middleware1.auth, controller1.deleteBlog)

router.delete("/blogs", middleware1.auth, controller1.deleteBlogBy)

module.exports = router;