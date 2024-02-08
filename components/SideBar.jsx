import { ThemeToggler } from "./ThemeToggler";
import Image from "next/image";
function Sidebar({ onMenuItemClick, isOpen, onToggleSidebar }) {
  return (
    <div
      className={`h-screen p-5  w-40 border-r border-gray-50 dark:border-gray-900 bg-gray-50 dark:bg-gray-800 ${
        !isOpen ? "hidden" : ""
      } md:z-10`}
    >
      <Image
        src="/Vector.png"
        width={40}
        height={100}
        alt="Logo"
        className="pb-5 cursor-pointer justify-center items-center"
      />
      <div
        className="flex space-x-2"
        onClick={() => {
          onMenuItemClick("Dashboard");
          onToggleSidebar();
        }}
      >
        <Image
          src="https://img.icons8.com/ios/50/health-data.png"
          width={25}
          height={20}
          alt="Menu"
          className="invert-0 dark:invert pb-7 cursor-pointer"
        />

        <span className="cursor-pointer">Dashboard</span>
      </div>

      <div
        className="flex space-x-2"
        onClick={() => {
          onMenuItemClick("Analytics");
          onToggleSidebar();
        }}
      >
        <Image
          src="https://img.icons8.com/fluency-systems-regular/48/web-analystics.png"
          width={25}
          height={20}
          alt="Analytics"
          className="invert-0 dark:invert pb-7 cursor-pointer"
        />

        <span className="cursor-pointer">Analytics</span>
      </div>

      <div
        className="flex space-x-2 pb-7"
        onClick={() => {
          onMenuItemClick("Customers");
          onToggleSidebar();
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="invert-0 cursor-pointer dark:invert"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.43809 7.16101C7.37457 7.16101 6.51241 8.02317 6.51241 9.08669C6.51241 10.1502 7.37457 11.0124 8.43809 11.0124C9.50161 11.0124 10.3638 10.1502 10.3638 9.08669C10.3638 8.02317 9.50161 7.16101 8.43809 7.16101ZM5.01241 9.08669C5.01241 7.19474 6.54614 5.66101 8.43809 5.66101C10.33 5.66101 11.8638 7.19474 11.8638 9.08669C11.8638 10.9786 10.33 12.5124 8.43809 12.5124C6.54614 12.5124 5.01241 10.9786 5.01241 9.08669ZM15.8227 7.16101C14.7592 7.16101 13.897 8.02317 13.897 9.08669C13.897 10.1502 14.7592 11.0124 15.8227 11.0124C16.8862 11.0124 17.7484 10.1502 17.7484 9.08669C17.7484 8.02317 16.8862 7.16101 15.8227 7.16101ZM12.397 9.08669C12.397 7.19474 13.9307 5.66101 15.8227 5.66101C17.7146 5.66101 19.2484 7.19474 19.2484 9.08669C19.2484 10.9786 17.7146 12.5124 15.8227 12.5124C13.9307 12.5124 12.397 10.9786 12.397 9.08669ZM8.30792 14.5536C6.10038 14.5536 4.21113 15.9242 3.44813 17.8635C3.29648 18.249 2.86107 18.4385 2.47561 18.2868C2.09016 18.1352 1.90062 17.6998 2.05227 17.3143C3.03334 14.8207 5.46335 13.0536 8.30792 13.0536C9.67207 13.0536 10.9409 13.46 12.0003 14.1581C13.06 13.4601 14.3297 13.0536 15.6925 13.0536C18.5371 13.0536 20.9671 14.8207 21.9482 17.3143C22.0998 17.6998 21.9103 18.1352 21.5248 18.2869C21.1394 18.4385 20.704 18.249 20.5523 17.8635C19.7893 15.9242 17.9 14.5536 15.6925 14.5536C14.794 14.5536 13.9496 14.7801 13.212 15.1793C13.7881 15.7941 14.2499 16.5171 14.5636 17.3143C14.7152 17.6998 14.5257 18.1352 14.1402 18.2868C13.7548 18.4385 13.3194 18.249 13.1677 17.8635C12.4047 15.9242 10.5155 14.5536 8.30792 14.5536Z"
            fill="black"
          />
        </svg>

        <span className="cursor-pointer">Customers</span>
      </div>

      <div
        className="flex space-x-2"
        onClick={() => {
          onMenuItemClick("Discounts");
          onToggleSidebar();
        }}
      >
        <Image
          width={25}
          height={20}
          src="https://img.icons8.com/puffy/32/discount.png"
          alt="Discount"
          className="invert-0 dark:invert pb-7 cursor-pointer"
        />

        <span className="cursor-pointer">Discounts</span>
      </div>

      <div
        className="flex space-x-2"
        onClick={() => {
          onMenuItemClick("Help");
          onToggleSidebar();
        }}
      >
        <Image
          src="https://img.icons8.com/pulsar-line/48/help.png"
          width={25}
          height={20}
          alt="Help"
          className="invert-0 dark:invert pb-7 cursor-pointer"
        />

        <span className="cursor-pointer">Help</span>
      </div>
      <ThemeToggler />

      <div className="py-24">
        <div
          className="flex space-x-2"
          onClick={() => {
            onMenuItemClick("Settings");
            onToggleSidebar();
          }}
        >
          <Image
            width={20}
            height={20}
            src="https://img.icons8.com/windows/32/settings--v1.png"
            alt="Settings"
            className="invert-0 dark:invert pb-7 cursor-pointer"
          />

          <span className="cursor-pointer">Settings</span>
        </div>

        <div
          className="flex space-x-2"
          onClick={() => {
            onMenuItemClick("Sign out");
            onToggleSidebar();
          }}
        >
          <Image
            width={20}
            height={20}
            src="https://img.icons8.com/ios-glyphs/30/logout-rounded--v1.png"
            alt="Logout"
            className="invert-0 dark:invert pb-7 cursor-pointer"
          />

          <span className="cursor-pointer">Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
