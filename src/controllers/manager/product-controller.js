const ProductModel = require("../../models/manager/product-model");
const CategoryModel = require("../../models/manager/category-model");
const upload = require("../../middlewares/upload");
const cloudinary = require("../../middlewares/cloundinary");

class productController {
  async getProduct(req, res) {
    try {
      const products = await ProductModel.getProducts();
      const notificationSuccess = req.flash("notificationSuccess");
      const notificationErr = req.flash("notificationErr");
      const user = req.session.user;

      res.render("product", {
        notificationErr: notificationErr,
        notificationSuccess: notificationSuccess,
        user: user,
        products: products
      });
    } catch (error) {
      console.error("err", error);
    }
  }

  async getAddProduct(req, res) {
    try {
      const categories = await CategoryModel.getCategorys();
      const notificationSuccess = req.flash("notificationSuccess");
      const notificationErr = req.flash("notificationErr");
      const user = req.session.user;

      res.render("add_product", {
        notificationErr: notificationErr,
        notificationSuccess: notificationSuccess,
        user: user,
        categories: categories,
        title:"Add Product",
        button_type:"Add"
      });
    } catch (error) {
      console.error("err", error);
    }
  }

  async getUpdateProduct(req, res) {
    try {
      const product_id = req.params.product_id;
      const categories = await CategoryModel.getCategorys();
      const product = await ProductModel.getProduct(product_id);
      const notificationSuccess = req.flash("notificationSuccess");
      const notificationErr = req.flash("notificationErr");
      const user = req.session.user;

      res.render("add_product", {
        notificationErr: notificationErr,
        notificationSuccess: notificationSuccess,
        user: user,
        categories: categories,
        product: product,
        product_id: product_id,
        title:"Update Product",
        button_type:"Update"
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  async insertProduct(req, res) {
    upload.single("img")(req, res, async function(err) {
      if (err) {
        console.error("Error uploading image:", err);
        req.flash("notificationErr", "Error uploading image.");
        res.redirect("/product/add-product");
        return;
      }

      const { name, description, price, category_id } = req.body;

      if (!req.file) {
        req.flash("notificationErr", "No image selected.");
        res.redirect("/product/add-product");
        return;
      }

      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          resource_type: "image",
          folder: "rcoffee/product"
        });
        const img = result.secure_url;

        const insertValues = [name, img, description, price, category_id];
        await ProductModel.insertProduct(insertValues);

        req.flash("notificationSuccess", "Product added successfully.");
        res.redirect("/product/add-product");
      } catch (error) {
        console.error("Error adding product:", error.message);
        req.flash("notificationErr", "Error adding product: " + error.message);
        res.redirect("/product/add-product");
      }
    });
  }

  async updateProduct(req, res) {
    upload.single("img")(req, res, async function(err) {
      const product_id = req.params.product_id;
      if (err) {
        console.error("Error uploading image:", err);
        req.flash("notificationErr", "Error uploading image.");
        res.redirect(`/product/${product_id}`);
        return;
      }

      const { name, description, price, category_id } = req.body;
      let current_img = req.body.current_img;
      let new_img, publicId;
      console.log("currrent img 🙄🙄🙄🙄🙄", current_img);

      try {
        if (req.file) {
          const publicIdMatch = current_img.match(/\/v\d+\/(.+?)\.\w+$/);

          if (publicIdMatch && publicIdMatch[1]) {
            publicId = publicIdMatch[1];
            console.log("Public ID 😬😬😬😬😬😬😬", publicId);
            if (publicId) {
              await cloudinary.uploader.destroy(publicId);
            }
          }

          const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "image",
            folder: "rcoffee/product"
          });
          new_img = result.secure_url;
        }

        const updateValues = {
          name,
          img: new_img,
          description,
          price,
          category_id,
          product_id
        };
        console.log("update values 🥱🥱🥱🥱", updateValues);
        await ProductModel.updateProduct(updateValues);

        req.flash("notificationSuccess", "Product updated successfully.");
        res.redirect(`/product/${product_id}`);
      } catch (error) {
        console.error("Error updating product:", error.message);
        req.flash(
          "notificationErr",
          "Error updating product: " + error.message
        );
        res.redirect(`/product/${product_id}`);
      }
    });
  }

  async deleteProduct(req, res) {
    try {
      const product_id = req.params.product_id;
      await ProductModel.deleteProduct(product_id);

      req.flash("notificationSuccess", "Product deleted");
      res.redirect("/product");
    } catch (error) {
      req.flash("notificationErr", "Cant deleted");
      res.redirect("/product");
    }
  }
}
module.exports = new productController();
