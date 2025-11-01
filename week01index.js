//init express
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

//middleware function to handle requests

app.use("/professional", (req, res) =>
  res.send({
    professionalName: "Anna Smith",
    base64Image:
      "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAAA+5+5BAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAXZSURBVHic7d15kFTXefx3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3n3f4P8AqKgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgqCgr6D8A6Kqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr6H8AoqioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKgP0DgAAsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGyvgPwDoqurqurqurqurqurqurqurqurqurqurqurqurqurqurqurqugPwCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr6D8A6Kqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr6H8AoqioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKioKgP0DgAAsbGxsbGxsbGxsbGxsbGxsbGxsbG",
    nameLink: {
      firstName: "Anna",
      url: "https://www.example.com/anna",
    },
    primaryDescription:
      "I am a web developer with a passion for creating dynamic and user-friendly websites.",
    workDescription1:
      "I have experience in HTML, CSS, JavaScript, and various web development frameworks.",
    workDescription2:
      "I enjoy working on both front-end and back-end development to build complete web applications.",
    linkTitleText: "Connect with me on:",
    linkedInLink: {
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/anna-smith",
    },
    githubLink: {
      text: "GitHub Profile",
      link: "",
    },
  })
);

//listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
