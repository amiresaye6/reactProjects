import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Something Went Wrong</h4>
          <p>{message}</p>
          <hr />
          <div className="d-flex justify-content-center">
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-danger me-2"
            >
              Try Again
            </button>
            <a href="/" className="btn btn-secondary">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
