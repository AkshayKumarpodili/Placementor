import React from 'react'
import TextMessage from './TextMessage'

function AdminNewsFeedModal() {

  return (
    <div className="modal fade" id="m2" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2>News Feed</h2> 
            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>
          
          <div className="modal-body"> 
                <TextMessage />
          </div>

      </div>
    </div>
</div>
  )
}

export default AdminNewsFeedModal;