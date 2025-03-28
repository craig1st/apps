// List of known bot user-agents
const bots = [
    'googlebot', 'bingbot', 'yahoo', 'slurp', 'baiduspider', 
    'yandex', 'duckduckbot', 'facebot', 'ia_archiver'
];

// Check if the user-agent is a bot
if (bots.some(bot => navigator.userAgent.toLowerCase().includes(bot))) {
    // Redirect or block access
    window.location.href = "https://example.com/blocked.html"; // Redirect to a blocked page
    // or
    document.body.innerHTML = "<h1>Access Denied</h1>"; // Display a message
}