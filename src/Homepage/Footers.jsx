import { Footer } from "flowbite-react";
import { FaFacebook } from "react-icons/fa"
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from '../img/phone-shop-logo-design-template-gadget-135331058.jpg'
const Footers = () => {
    return (
        <div>
             <Footer container>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand className="w-[120px] h-[80px]"
             
              src={logo}
              
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Phone House™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebook} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaDribbble} />
          </div>
        </div>
      </div>
    </Footer>
        </div>
    );
};

export default Footers;