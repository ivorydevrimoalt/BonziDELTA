function embedIframe(link) {
  // Create a container element for the iframe and loading message
  const container = document.createElement('div');
  container.classList.add('iframe-container'); // Add a class for styling

  // Create the loading message element
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Loading...';
  loadingMessage.classList.add('loading-message'); // Add a class for styling

  // Append the loading message to the container
  container.appendChild(loadingMessage);

  // Function to handle iframe load and remove loading message
  const handleIframeLoad = () => {
    loadingMessage.remove(); // Remove the loading message
  };

  // Create the iframe element
  const iframe = document.createElement('iframe');
  iframe.src = link;
  iframe.style.border = 'none'; // Remove border
  iframe.style.width = '100%'; // Full width
  iframe.style.height = '100vh'; // Full height

  // Add event listener for iframe load
  iframe.addEventListener('load', handleIframeLoad);

  // Append the iframe to the container
  container.appendChild(iframe);

  // Get the body element and clear its content (if desired)
  const body = document.body;
  // while (body.firstChild) { // Uncomment to clear existing content
  //   body.removeChild(body.firstChild);
  // }

  // Append the container to the body
  body.appendChild(container);
}

// Example usage:
embedIframe('https://5cc2c8c1-55bf-470f-bea5-324bf3dc6ba5-00-3nh4qeclgya0b.picard.replit.dev'); // Replace with your desired link
document.title = "BonziDELTA";
