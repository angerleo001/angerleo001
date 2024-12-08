const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3 justify-center items-center">
  <div className="social-icon flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full">
    <a href="https://github.com/angerleo001" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
    </a>
  </div>
  <div className="social-icon flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full">
    <a href="https://facebook.com/angerleo01" target="_blank" rel="noopener noreferrer">
      <img src="/assets/facebook.png" alt="facebook" className="w-8 h-8" />
    </a>
  </div>
  <div className="social-icon flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full">
    <a href="https://instagram.com/angerleo001" target="_blank" rel="noopener noreferrer">
      <img src="/assets/instagram.svg" alt="instagram" className="w-8 h-8" />
    </a>
  </div>
</div>


        <p className="text-white-500">© 2024 angerleo001. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;