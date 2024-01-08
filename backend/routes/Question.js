const express = require("express");
const router = express.Router();

const questionDB = require("../models/Question");
const { post } = require("./Question");

router.post("/", async (req, res) => {
  
  console.log(req.body);

  try {
    await questionDB
      .create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        //question ID
        questId:req.body.questId,
        user: req.body.user,
        questionLike: {},
        questionDislike: {},
        questionComment: []

      })
      .then(() => {
        res.status(202).send({
          status: true,
          message: "Question added successfully",
        });
      })
      .catch((err) => {
        res.status(402).send({
          staus: false,
          message: "Bad format",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding question",
    });
  }
});


//Pipelining MONGODB aggregation

router.get("/", async (req, res) => {
  try {
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

//Update likes
router.put("/questionLike", async (req, res) => {
  post.findByIdAndUpdate(req.body.questId, {
    $push:{questionLike:req.body._id}
  })


})









module.exports = router;
