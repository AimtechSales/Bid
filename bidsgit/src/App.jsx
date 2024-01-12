
import "./App.css";

const FileCopyComponent = () => {

  const WordPress1 = async () => {
    try {
      const response = await fetch('wp1.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const WordPress2 = async () => {
    try {
      const response = await fetch('wp2.txt');
      const data = await response.text();
      console.log(data);
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const WordPress3 = async () => {
    try {
      const response = await fetch('wp3.txt');
      const data = await response.text();
      console.log(data);
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const WordPress4 = async () => {
    try {
      const response = await fetch('wp4.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const Shopify1 = async () => {
    try {
      const response = await fetch('shop1.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const Shopify2 = async () => {
    try {
      const response = await fetch('shop2.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const Shopify3 = async () => {
    try {
      const response = await fetch('shop3.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const Shopify4 = async () => {
    try {
      const response = await fetch('shop4.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const html1 = async () => {
    try {
      const response = await fetch('html1.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const html2 = async () => {
    try {
      const response = await fetch('html2.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const html3 = async () => {
    try {
      const response = await fetch('html3.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const html4 = async () => {
    try {
      const response = await fetch('html4.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const php1 = async () => {
    try {
      const response = await fetch('php1.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const php2 = async () => {
    try {
      const response = await fetch('php2.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const php3 = async () => {
    try {
      const response = await fetch('php3.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const php4 = async () => {
    try {
      const response = await fetch('php4.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };
  
  const python1 = async () => {
    try {
      const response = await fetch('python1.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const python2 = async () => {
    try {
      const response = await fetch('python2.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const python3 = async () => {
    try {
      const response = await fetch('python3.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };

  const python4 = async () => {
    try {
      const response = await fetch('python4.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };
  const CMS = async () => {
    try {
      const response = await fetch('cms.txt');
      const data = await response.text();
      await navigator.clipboard.writeText(data);
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };
  
  const Clear = async () => {
    try {
      await navigator.clipboard.writeText("");
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="complete-page">
      <h1 className="main-heading">Ahmed Freelancer Bid Dashboard</h1>
      <div className="bids">
      <div className="first-row">
      <button onClick={WordPress1}>WordPress Revamp</button>
      <button onClick={Shopify1}>Shopify Revamp</button>
      <button onClick={html1}>Figma to HTML</button>
      <button onClick={php1}>PHP/Laravel</button>
      <button onClick={python1}>Python</button>

      </div>

      <div className="first-row">
      <button onClick={WordPress2}>WordPress Edit</button>
      <button onClick={Shopify2}>Shopify Edit</button>
      <button onClick={html2}>HTML/CSS</button>
      <button onClick={php2}>Payment integration</button>
      <button onClick={python2}>ML</button>

      </div>

      <div className="first-row">
      <button onClick={WordPress3}>New WordPress</button>
      <button onClick={Shopify3}>New Shopify</button>
      <button onClick={html3}>HTML/CSS Edit</button>
      <button onClick={php3}>API integration</button>
      <button onClick={python3}>Flask</button>

      </div>
      
      <div className="first-row">
      <button onClick={WordPress4}>WordPress SEO</button>
      <button onClick={Shopify4}>Shopify SEO</button>
      <button onClick={html4}>Deployment</button>
      <button onClick={php4}>Bug fixing</button>
      <button onClick={python4}>Chat Bot</button>
      </div>

      <div className="final-row">
      <button className="CMS" onClick={CMS}>CMS</button>
      <button className="Clear" onClick={Clear}>Clear Clipboard</button>
      </div>

      </div>

    <h2 className="footer-credit">Created by: "AimTech Sales Team"</h2>
    </div>
  );
};

export default FileCopyComponent;
