import { useState } from "react";
import './CssFiles/Tpco.css'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TandPCordinators() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
        <h3 className="text-center font mt-2 bg-success rounded p-1 text-white">T&P Coordinators</h3>
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(1)}>
          T&P
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(2)}>
          CSE
        </button>
        <button className={toggleState === 3 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(3)}>
          ECE
        </button>
        <button className={toggleState === 4 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(4)}>
          EIE
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="row d-flex">
            <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Pavan Kumar</div>
                            <div class="card-text text-dark hd1 font">IT</div>
                            <div className='text-dark hd1 font'>pavankumar@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>8534562949</div>
                        </div>
                    </div>
                </div>

            
                <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Krishna</div>
                            <div class="card-text text-dark hd1 font">EIE</div>
                            <div className='text-dark hd1 font'>krishna@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>9123456789</div>
                        </div>
                    </div>
                </div>


                <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Mahesh</div>
                            <div class="card-text text-dark hd1 font">CSE</div>
                            <div className='text-dark hd1 font'>mahesh012@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>9812345678</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
        <div className="row d-flex">
            <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Bharath Kumar</div>
                            <div class="card-text text-dark hd1 font">CSE</div>
                            <div className='text-dark hd1 font'>bharathkumar@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>8234561949</div>
                        </div>
                    </div>
                </div>

            
                <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mrs. Swathi</div>
                            <div class="card-text text-dark hd1 font">CSE</div>
                            <div className='text-dark hd1 font'>swathi123@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>9568223456</div>
                        </div>
                    </div>
                </div>


                <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Mahesh</div>
                            <div class="card-text text-dark hd1 font">CSE</div>
                            <div className='text-dark hd1 font'>mahesh012@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>9812345678</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
        <div className="row d-flex">
            <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Hari Babu</div>
                            <div class="card-text text-dark hd1 font">ECE</div>
                            <div className='text-dark hd1 font'>haribabu@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>8534122949</div>
                        </div>
                    </div>
                </div>

            
                <div class="col-sm-6 col-md-4 mt-4">
                    <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Prasanth</div>
                            <div class="card-text text-dark hd1 font">ECE</div>
                            <div className='text-dark hd1 font'>prasanth@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>7835521251</div>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>


        <div className={toggleState === 4 ? "content  active-content" : "content"}>
        <div className="row d-flex">
            <div class="col-sm-6 col-md-4 mt-4">
            <div class="card shadow h-100 zoom2">
                        <div class="card-body">
                          <div className="hd1"><FontAwesomeIcon icon={faUserSecret} className='text-dark' size='8x' /></div>
                            <div class="card-text text-dark hd1 font">Mr. Krishna</div>
                            <div class="card-text text-dark hd1 font">EIE</div>
                            <div className='text-dark hd1 font'>krishna@vnrvjiet.in</div>
                            <div className='text-dark hd1 font'>9123456789</div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

      </div>
    </div>
  );
}

export default TandPCordinators;