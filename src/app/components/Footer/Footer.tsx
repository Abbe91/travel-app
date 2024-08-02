// src/app/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>&copy; {currentYear} My Website. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;
