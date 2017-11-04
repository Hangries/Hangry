const React = require('react');

const Search = () => (
  <form inline className="form-inline">
    <label className="sr-only">Name</label>
    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />

    <label className="sr-only">Username</label>
    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
      <div className="input-group-addon">@</div>
      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
    </div>

    <div className="form-check mb-2 mr-sm-2 mb-sm-0">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" />
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Get Your Hangry On</button>
  </form>
);

module.exports = Search;
