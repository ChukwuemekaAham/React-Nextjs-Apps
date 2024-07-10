
function Footer() {
  return (
    <div class="relative px-10 sm:px-20 pt-10 bg-gradient-to-b from-white to-blue-100 dark:from-blue-900 dark:to-dark">
      <div class="flex flex-col md:flex-row items-center justify-between py-4 w-full">
        
        <div class="flex flex-col md:flex-row text-center text-dark dark:text-light">
          
          <p class="mt-4 md:mt-0 text-sm font-semibold pt-2">
            © 2024 Nkponani Ltd. All rights reserved.
          </p>

        </div>
        <div className="flex mt-4 md:mt-0 ml-2 text-sm font-semibold pt-2 text-dark dark:text-light">
            <a className="hover:underline" href="/policy"> Privacy Policy</a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
