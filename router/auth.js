const express = require("express");
const router = express.Router();
const Blog = require("../controller/Blogs");
const authController = require("../controller/authControllers");

// User Management
router.get("/Post/:id", authController.getOneBlogAdmin);
router.put("/Post/:slug", authController.UpdateBlog);
router.delete("/Post/:slug", authController.deleteBlog);
router.delete("/Client/:id", authController.deleteClient);
router.delete("/Album/:id", authController.deleteImagesInAlbum);
router.get("/users", authController.getListUsers);
router.post("/Post", authController.createPost);
router.get("/Client", authController.getClients);

module.exports = router;
