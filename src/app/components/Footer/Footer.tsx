import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>&copy; {currentYear} Abbe Travel app. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
