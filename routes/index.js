const apiRouter = require("express").Router();

const {
  getNSN,
  getRandomNSN,
} = require("../db")


apiRouter.get("/", async (req, res, next) => {
  try {
    
    const randomNSN = await getRandomNSN()
  } catch (error) {
    next(error);
  }
});


apiRouter.get("/:id", async (req, res, next) => {
    try {
      const { nsn } = req.params;
      const serialnumber = await getNSN(nsn)
    } catch (error) {
      next(error);
    }
  });

module.exports = apiRouter;