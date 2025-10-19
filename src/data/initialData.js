// Sample User Stories for the Product Backlog
export const sampleUserStories = [
  {
    id: 1,
    title: "User Login Feature",
    description:
      "As a user, I want to log in with email and password so that I can access my account securely.",
    priority: 1,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "User can enter email and password",
      "System validates credentials",
      "User is redirected to dashboard on success",
      "Error message shown on invalid credentials",
    ],
    tasks: [],
  },
  {
    id: 2,
    title: "Product Search Functionality",
    description:
      "As a user, I want to search for products by name or category so that I can find items quickly.",
    priority: 2,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Search bar is visible on all pages",
      "Search results appear in real-time",
      "Results are sorted by relevance",
      "Empty state shown when no results found",
    ],
    tasks: [],
  },
  {
    id: 3,
    title: "Shopping Cart Management",
    description:
      "As a user, I want to add items to my shopping cart so that I can purchase multiple products at once.",
    priority: 3,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "User can add items to cart",
      "User can update quantities",
      "User can remove items",
      "Cart total is calculated correctly",
      "Cart persists across sessions",
    ],
    tasks: [],
  },
  {
    id: 4,
    title: "User Profile Management",
    description:
      "As a user, I want to view and edit my profile information so that my account details are up to date.",
    priority: 4,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "User can view profile details",
      "User can edit name, email, and phone",
      "Changes are saved to database",
      "Validation errors are displayed",
    ],
    tasks: [],
  },
  {
    id: 5,
    title: "Checkout Process",
    description:
      "As a user, I want to complete my purchase with payment and shipping details so that I can receive my order.",
    priority: 5,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "User can enter shipping address",
      "User can select payment method",
      "Order summary is displayed",
      "Confirmation email is sent",
    ],
    tasks: [],
  },
  {
    id: 6,
    title: "Product Reviews and Ratings",
    description:
      "As a user, I want to read and write product reviews so that I can make informed purchasing decisions.",
    priority: 6,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Reviews are displayed on product page",
      "User can submit rating (1-5 stars)",
      "User can write review text",
      "Average rating is calculated and displayed",
    ],
    tasks: [],
  },
  {
    id: 7,
    title: "Order History",
    description:
      "As a user, I want to view my past orders so that I can track my purchase history.",
    priority: 7,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "Order history page displays all past orders",
      "Each order shows date, items, and total",
      "User can view order details",
      "Orders are sorted by date (newest first)",
    ],
    tasks: [],
  },
  {
    id: 8,
    title: "Wishlist Feature",
    description:
      "As a user, I want to save products to a wishlist so that I can purchase them later.",
    priority: 8,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "User can add products to wishlist",
      "User can view wishlist page",
      "User can remove items from wishlist",
      "User can move wishlist items to cart",
    ],
    tasks: [],
  },
  {
    id: 9,
    title: "Email Notifications",
    description:
      "As a user, I want to receive email notifications for order updates so that I stay informed about my purchases.",
    priority: 9,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Email sent on order confirmation",
      "Email sent on shipment",
      "Email sent on delivery",
      "User can opt out of notifications",
    ],
    tasks: [],
  },
  {
    id: 10,
    title: "Admin Dashboard",
    description:
      "As an admin, I want to view site analytics and manage products so that I can monitor business performance.",
    priority: 10,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "Dashboard shows sales metrics",
      "Admin can add/edit/delete products",
      "Admin can view user list",
      "Admin can manage orders",
    ],
    tasks: [],
  },
  {
    id: 11,
    title: "Forgot Password Functionality",
    description:
      "As a user, I want to reset my password if I forget it so that I can regain access to my account.",
    priority: 11,
    storyPoints: 3,
    status: "To Do",
    acceptanceCriteria: [
      "Forgot password link available on login page",
      "User receives reset email",
      "New password can be set securely",
      "Success message displayed after reset",
    ],
    tasks: [],
  },
  {
    id: 12,
    title: "Two-Factor Authentication",
    description:
      "As a user, I want an additional security layer when logging in so that my account stays protected.",
    priority: 12,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "User can enable 2FA in profile",
      "OTP sent via email or SMS",
      "Login requires correct OTP",
      "Option to remember device",
    ],
    tasks: [],
  },
  {
    id: 13,
    title: "Product Filtering and Sorting",
    description:
      "As a user, I want to filter and sort products by price, rating, and category so that I can find relevant products.",
    priority: 13,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Filters available for category, price, and rating",
      "Sorting by price and popularity",
      "Selected filters persist during navigation",
      "Clear filters option available",
    ],
    tasks: [],
  },
  {
    id: 14,
    title: "Guest Checkout",
    description:
      "As a guest user, I want to place an order without creating an account so that I can shop faster.",
    priority: 14,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "Guest checkout option visible at checkout",
      "Guest enters email and address manually",
      "Order confirmation sent via email",
      "Guest prompted to create account post-purchase",
    ],
    tasks: [],
  },
  {
    id: 15,
    title: "Inventory Management",
    description:
      "As an admin, I want to track stock levels so that I can manage product availability.",
    priority: 15,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "Admin can view product stock",
      "Stock automatically updates on purchase",
      "Low-stock alerts are generated",
      "Out-of-stock items hidden from listing",
    ],
    tasks: [],
  },
  {
    id: 16,
    title: "Responsive UI Design",
    description:
      "As a user, I want the website to work smoothly on mobile and tablet devices so that I can shop conveniently.",
    priority: 16,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "UI adapts to different screen sizes",
      "Navigation menu becomes hamburger icon on mobile",
      "Images resize dynamically",
      "Touch interactions are optimized",
    ],
    tasks: [],
  },
  {
    id: 17,
    title: "Search Autocomplete",
    description:
      "As a user, I want search suggestions to appear as I type so that I can find products faster.",
    priority: 17,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "Suggestions update on each keystroke",
      "Top 5 matches displayed",
      "User can click suggestion to go to product",
      "Suggestions based on recent searches",
    ],
    tasks: [],
  },
  {
    id: 18,
    title: "User Address Book",
    description:
      "As a user, I want to save multiple addresses so that I can select them easily during checkout.",
    priority: 18,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "User can add, edit, and delete addresses",
      "One address can be marked as default",
      "Addresses displayed on checkout",
      "Changes persist in user profile",
    ],
    tasks: [],
  },
  {
    id: 19,
    title: "Order Tracking",
    description:
      "As a user, I want to track my order status so that I know when it will arrive.",
    priority: 19,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Tracking link available on order page",
      "Statuses: Ordered, Packed, Shipped, Delivered",
      "Estimated delivery date displayed",
      "Email updates sent for each status change",
    ],
    tasks: [],
  },
  {
    id: 20,
    title: "Admin Order Management",
    description:
      "As an admin, I want to manage and update customer orders so that I can ensure timely delivery.",
    priority: 20,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "Admin can update order status",
      "Admin can cancel or refund orders",
      "Orders searchable by ID or customer",
      "Changes reflected for user in real-time",
    ],
    tasks: [],
  },
  {
    id: 21,
    title: "User Registration",
    description:
      "As a new user, I want to register with my email and password so that I can create an account.",
    priority: 21,
    storyPoints: 3,
    status: "To Do",
    acceptanceCriteria: [
      "Registration form validates input",
      "Password strength indicator displayed",
      "Email verification required",
      "Confirmation shown after registration",
    ],
    tasks: [],
  },
  {
    id: 22,
    title: "Discount and Coupon Codes",
    description:
      "As a user, I want to apply discount codes at checkout so that I can save money on purchases.",
    priority: 22,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "Coupon input field available on checkout",
      "System validates coupon code",
      "Discount applied to total",
      "Invalid coupon error shown",
    ],
    tasks: [],
  },
  {
    id: 23,
    title: "Live Chat Support",
    description:
      "As a user, I want to chat with customer support in real time so that I can resolve issues quickly.",
    priority: 23,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Chat widget visible on all pages",
      "User can send and receive messages",
      "Support agent notifications sent on new chat",
      "Chat history saved in user account",
    ],
    tasks: [],
  },
  {
    id: 24,
    title: "Product Recommendations",
    description:
      "As a user, I want personalized product recommendations so that I can discover relevant items.",
    priority: 24,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Recommendations based on browsing history",
      "Displayed on homepage and product pages",
      "Updated dynamically after purchases",
      "Option to hide unwanted suggestions",
    ],
    tasks: [],
  },
  {
    id: 25,
    title: "Admin Role Management",
    description:
      "As a system admin, I want to assign roles and permissions so that access is properly controlled.",
    priority: 25,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "Roles: Admin, Manager, Support",
      "Each role has predefined permissions",
      "Only Admin can modify roles",
      "Access control enforced across app",
    ],
    tasks: [],
  },
  {
    id: 26,
    title: "Multi-language Support",
    description:
      "As a user, I want to change the website language so that I can browse comfortably.",
    priority: 26,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Language switcher available on header",
      "All UI text updates instantly",
      "Preference saved in user profile",
      "Fallback language is English",
    ],
    tasks: [],
  },
  {
    id: 27,
    title: "Push Notifications",
    description:
      "As a mobile user, I want to receive push notifications about offers and order updates so that I stay informed.",
    priority: 27,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: [
      "Push permissions requested on first visit",
      "Notifications sent for promotions and updates",
      "User can disable notifications",
      "Notifications link to relevant pages",
    ],
    tasks: [],
  },
  {
    id: 28,
    title: "Product Image Gallery",
    description:
      "As a user, I want to view multiple product images so that I can examine the product better.",
    priority: 28,
    storyPoints: 3,
    status: "To Do",
    acceptanceCriteria: [
      "Gallery supports multiple images per product",
      "Zoom and fullscreen options available",
      "Images load lazily for performance",
      "Mobile swipe gestures supported",
    ],
    tasks: [],
  },
  {
    id: 29,
    title: "Payment Gateway Integration",
    description:
      "As a user, I want to pay using various methods like credit card, PayPal, or bank transfer so that I can choose conveniently.",
    priority: 29,
    storyPoints: 13,
    status: "To Do",
    acceptanceCriteria: [
      "Supports multiple payment gateways",
      "Payment confirmation received instantly",
      "Failed payment triggers retry option",
      "Transactions logged securely",
    ],
    tasks: [],
  },
  {
    id: 30,
    title: "Analytics Event Tracking",
    description:
      "As a product manager, I want to track user behavior and key metrics so that I can improve the platform.",
    priority: 30,
    storyPoints: 8,
    status: "To Do",
    acceptanceCriteria: [
      "Track events like clicks, purchases, and logins",
      "Data stored in analytics dashboard",
      "Reports exportable as CSV",
      "Admin can filter by date and user type",
    ],
    tasks: [],
  },
];

// Sample Team Members
export const sampleTeamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Developer",
    capacity: 40, // hours per sprint
    avatar: "👩‍💻",
    tasks: [],
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Developer",
    capacity: 40,
    avatar: "👨‍💻",
    tasks: [],
  },
  {
    id: 3,
    name: "Carol Martinez",
    role: "Developer",
    capacity: 35,
    avatar: "👩‍💻",
    tasks: [],
  },
  {
    id: 4,
    name: "David Chen",
    role: "Product Owner",
    capacity: 20,
    avatar: "👨‍💼",
    tasks: [],
  },
  {
    id: 5,
    name: "Emma Williams",
    role: "Scrum Master",
    capacity: 20,
    avatar: "👩‍💼",
    tasks: [],
  },
];

// Definition of Done checklist
export const definitionOfDone = [
  "Code is written and peer-reviewed",
  "Unit tests are written and passing",
  "Integration tests are passing",
  "Code is merged to main branch",
  "Documentation is updated",
  "Acceptance criteria are met",
  "Product Owner has approved",
];

// Sample retrospective prompts
export const retrospectivePrompts = {
  wentWell: [
    "Team collaboration was excellent",
    "Clear sprint goal helped focus",
    "Daily standups were efficient",
    "Good velocity maintained",
  ],
  notWell: [
    "Some stories were underestimated",
    "Technical debt accumulated",
    "Communication gaps on requirements",
    "Testing took longer than expected",
  ],
  improvements: [
    "Better story point estimation",
    "Allocate time for refactoring",
    "More detailed acceptance criteria",
    "Improve test automation",
  ],
};
