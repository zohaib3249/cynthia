import React from 'react';

function Modal(props) {
    

    function MemberModal({ title, onSubmit, onClose, member }) {
      const [name, setName] = useState(member?.name || '');
      const [arrivalDate, setArrivalDate] = useState(member?.arrivalDate || '');
      const [leaveDate, setLeaveDate] = useState(member?.leaveDate || '');
      const [comment, setComment] = useState(member?.comment || '');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, arrivalDate, leaveDate, comment });
      };
    
      return (
        <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <form onSubmit={handleSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button type="button" className="close btn btn-light" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                    X
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="form-group">
                      <label className="required" htmlFor="name">Name</label>
                      <input type="text" id="name" className="input_field form-control" value={name} onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="required" htmlFor="arrivalDate">Arrival Date</label>
                      <input type="date" id="arrivalDate" className="input_field form-control" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="required" htmlFor="leaveDate">Leave Date</label>
                      <input type="date" id="leaveDate" className="input_field form-control" value={leaveDate} onChange={(event) => setLeaveDate(event.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="required" htmlFor="comment">Comment</label>
                      <textarea id="comment" className="input_field form-control" value={comment} onChange={(event) => setComment(event.target.value)} required></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <button type="button" className="button-large-2" data-dismiss="modal" onClick={onClose}>Close</button>
                  <button type="submit" className="btn btn-primary">{member ? 'Update' : 'Add'}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    
}

export default Modal;