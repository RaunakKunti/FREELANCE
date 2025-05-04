const adminMiddleware = (req, res, next) => {
  try {
    const admin = req.user.isadmin; // check if user is admin
    if (!admin) {
      return res.status(403).json({
        message: "You are not authorized to access this resource",
      });
    }
    next(); // call next middleware if user is admin
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
