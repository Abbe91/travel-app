// Define the type for a menu item
interface MenuItem {
    name: string;
    url: string;
  }
  
  // Export the menu items array
  const menuItems: MenuItem[] = [
    { name: "Home", url: "/" },
    { name: "Sign In", url: "/api/auth/signin" },
    { name: "Sign Out", url: "/api/auth/signout" },
    { name: "Server", url: "/server" },
    { name: "Client", url: "/client" },
    { name: "Extra", url: "/extra" },
    { name: "Dashboard", url: "/dashboard" }
  ];
  
  export default menuItems;