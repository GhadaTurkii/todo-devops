import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Ghada Turki - 2GL2</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  }
};

export default Footer;