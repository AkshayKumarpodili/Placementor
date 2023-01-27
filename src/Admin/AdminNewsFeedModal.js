import React,{useState} from 'react'
import LinkMessage from './LinkMessage'
import TextMessage from './TextMessage'

function AdminNewsFeedModal() {

  const [toggleState, setToggleState] = useState(1);
 
 
  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="modal fade" id="m2" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2>News Feeds</h2> 
            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>
          
          <div className="modal-body">

                <div className="bloc-tabs">
                  <button className={toggleState === 1 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(1)}>
                    Link Message
                  </button>
                  <button className={toggleState === 2 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(2)}>
                    TextMessage
                  </button>
                </div>

                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                      <div className='row d-flex '>
                          <LinkMessage />
                        </div>
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className='row d-flex '>
                      <TextMessage />
                    </div>
                </div>
                


          </div>


              <div className="modal-footer">
                  <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              </div>



      </div>
    </div>
</div>
  )
}

export default AdminNewsFeedModal;