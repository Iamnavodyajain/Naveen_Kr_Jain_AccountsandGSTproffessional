import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  service: {
    type: String,
    required: [true, "Service is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
}, {
  timestamps: true,
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;