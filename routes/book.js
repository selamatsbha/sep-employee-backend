const router = require("express").Router();
const Book = require("../model/book");

//get, post, put, delete
//RESTApi standard we can't use verbs to name our endpoints (nouns)

// const obj = {} object literal
// const obj = new Obj({name: "", occupation: ""})
/* ADD AN EMPLOYEE INFO */
router.post("/book", async (req, res) => {
  const newBook = new Book({
    imageUrl: req.body.imageUrl,
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
  });

  try {
    const savedBookData = await newBook.save();
    res.status(200).json(savedBookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL EMPLOYEES*/
router.get("/get-books", async (req, res) => {
  try {
    const getAllBooks = await Book.find({});
    res.status(200).json(getAllBooks);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET A SPECIFIC EMPLOYEE*/
// router.get("/:id", async (req, res) => {
//   try {
//     const findEmployees = await Employee.findById(req.params.id);
//     res.status(200).json(findEmployees);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

/* UPDATE AN ENPLOYEE DATA */

// router.put("/:id", async (req, res) => {
//   try {
//     const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,
//       { $set: req.body, },
//       { new: true }
//     );
//     res.status(200).json(updatedEmployee);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//OR

router.put("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const updatedBook = await Book.findOneAndUpdate(
      query,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE AN EMPLOYEE

// router.delete("/:id", async (req, res) => {
//   try{
//     await Employee.findByIdAndDelete(req.param.id);
//     res.status(200).json("The employee has been deleted!")
//   }catch (err) {
//     res.status(500).json(err)
//   }
// });

//OR

// router.delete("/:id", async (req, res) => {
//   try {
//     await Employee.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).json("The employee has been deleted!");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
