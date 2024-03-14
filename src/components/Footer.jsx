import React from "react";

function Footer() {
  return (
    <div className="text-slate-500 font-light w-[1100px] ml-[200px] mt-40">
      <div className="justify-end">
        <div className="italic font-bold text-4xl text-black ">zomato</div>
        <div></div>
      </div>

      <div className="flex flex-row justify-between mt-10 text-base mb-14 ">
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium mb-3 text-black ">ABOUT ZOMATO</h1>
          <div className="flex flex-col gap-y-[4px]">
            <h3>Who We Are</h3>
            <h3>Blog</h3>
            <h3>Work With Us</h3>
            <h3>Investor Relations</h3>
            <h3>Report Fraud</h3>
            <h3>Press Kit</h3>
            <h3>Contact Us</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-medium mb-3 text-black ">ZOMAVERSE</h1>
          <div className="flex flex-col gap-y-[4px]">
            <h3>Zomato</h3>
            <h3>Blinkit</h3>
            <h3>Feeding India</h3>
            <h3>Hyperpure</h3>
            <h3>Zomaland</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-7">
            <h1 className="text-lg font-medium mb-3 text-black ">FOR RESTAURANTS</h1>
            <div className="flex flex-col gap-y-[4px]">
              <h3>Partner With Us</h3>
              <h3>Apps For You</h3>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-medium mb-3 text-black ">FOR ENTERPRISES</h1>
            <h3>Zomato For Enterprise</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-medium mb-3 text-black ">LEARN MORE</h1>
          <div className="flex flex-col gap-y-[4px]">
            <h3>Privacy</h3>
            <h3>Security</h3>
            <h3>Terms</h3>
            <h3>Sitemap</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-medium mb-3 text-black ">SOCIAL LINKS</h1>
        </div>
      </div>

      <div className="border border-t-1 border-t-neutral-300 border-white pt-5 mb-7">
             By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy
              Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
           </div>
    </div>
  );
}

export default Footer;
