var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String ive used Headline for now
  Headline: {
    type: String,
    required: true
  },
  Summary: {
      type: String
  },
  link: {
      type: String,
      required: true
  },


  note: [
    {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }

],
saved: {
  type: Boolean,
  default: false

  }
});


// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
