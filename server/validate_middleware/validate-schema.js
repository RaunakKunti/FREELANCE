const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input fields correctly";
    const extraDetails = err.errors[0].message; // get the error message from zod

    const error = {
      status,
      message,
      extraDetails,
    };

    // console.log(error);
    next(error); // pass the error to the next middleware
  }
};

module.exports = validate;
