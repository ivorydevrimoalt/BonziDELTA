function embedIframe(link) {
  // Remove all existing child elements from the body
  const body = document.body;
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  // Create the iframe element
  const iframe = document.createElement('iframe');
  iframe.src = link;
  iframe.style.border = 'none'; // Remove border
  iframe.style.width = '100%'; // Full width
  iframe.style.height = '100vh'; // Full height

  // Add the iframe to the body
  body.appendChild(iframe);
}

// Example usage:
embedIframe('https://5cc2c8c1-55bf-470f-bea5-324bf3dc6ba5-00-3nh4qeclgya0b.picard.replit.dev'); // Replace with your desired link
document.title = "BonziDELTA";
