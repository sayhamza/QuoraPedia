const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,

  // questionLike:{type:Map,ref:"Answer"},
  // questionDislike:[{type:Map,ref:"Answer"}],
  comment:{
  type: Array,
    default:[],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  user: Object,
});


module.exports = mongoose.model("Questions", QuestionSchema);
