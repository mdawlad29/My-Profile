export const ServiceIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sparkles mr-1 h-3 w-3"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
      <path d="M20 3v4"></path>
      <path d="M22 5h-4"></path>
      <path d="M4 17v2"></path>
      <path d="M5 18H3"></path>
    </svg>
  );
};

export const CodeIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <linearGradient id="web-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899"></stop>
          <stop offset="100%" stopColor="#8B5CF6"></stop>
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="3"
        fill="url(#web-grad)"
        opacity="0.8"
      ></rect>
      <path
        d="M8 9l-2 3 2 3M16 9l2 3-2 3M13 8l-2 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export const DesignIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="size-7">
      <defs>
        <linearGradient id="uiux-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"></stop>
          <stop offset="100%" stopColor="#3B82F6"></stop>
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        fill="url(#uiux-grad)"
        opacity="0.8"
      ></rect>
      <path
        d="M7 8h6M7 11h8M7 14h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <circle cx="17" cy="16" r="2" fill="white"></circle>
    </svg>
  );
};

export const MobileIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="size-7">
      <defs>
        <linearGradient id="mobile-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"></stop>
          <stop offset="100%" stopColor="#10B981"></stop>
        </linearGradient>
      </defs>
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        fill="url(#mobile-grad)"
        opacity="0.8"
      ></rect>
      <circle cx="12" cy="18" r="1" fill="white"></circle>
      <path
        d="M10 5h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export const SeoIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="size-7">
      <defs>
        <linearGradient id="seo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B"></stop>
          <stop offset="100%" stopColor="#EF4444"></stop>
        </linearGradient>
      </defs>
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="url(#seo-grad)"
        opacity="0.8"
      ></circle>
      <path
        d="M21 21l-4.35-4.35M11 8v6M8 11h6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};
