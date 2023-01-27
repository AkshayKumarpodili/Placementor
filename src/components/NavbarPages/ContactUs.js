import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import image2 from '../../images/2.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ContactUs()
{
    return(
        
        <div className="container-fluid text-center back">
            <h1 className='display-6 head m-5'>
            <FontAwesomeIcon icon={faAddressBook} className='text-warning me-3 mt-2' size='1x' />ContactUs</h1>
            <img className="w-25 mx-auto" src={image2} />
            <p className="mt-2 h4"><strong>CONTACT DETAILS:</strong></p>
            <p className='lead'><strong>Customer Care : </strong>040-23731555 (or) 9100687814 (or) 91-040-23042758/59/60</p>
            <p className='lead'><strong>Email : </strong>admin@vnrvjiet.in</p>
            <p className='lead'><strong>Address : </strong>2034/p Bachupally Hyderabad</p>
            
            
              <p className='lead'><strong>Catch us on Facebook : </strong><a href='https://www.facebook.com/profile.php?id=100064949286608' target="_blank">Facebook</a></p>
              <p className='lead'><strong>Catch us on Instagram : </strong><a href='https://www.instagram.com/vnrvjietofficial2019/' target="_blank">INSTAGRAM</a></p>
              <p className='lead'><strong>Catch us on Twitter : </strong><a href='https://twitter.com/VnrvjietO' target="_blank">TWITTER</a></p>
           

        </div>
    )
}
export default ContactUs;