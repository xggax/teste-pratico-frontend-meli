class ErrorHandler extends Error {
    constructor(status, message) {
      super();
      this.status = status;
      this.message = message;
    }
  }
  
  const handleError = (error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  };
  
  module.exports = {
    ErrorHandler,
    handleError,
  };