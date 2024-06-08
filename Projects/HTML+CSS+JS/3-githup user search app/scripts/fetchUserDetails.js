export const fetchUserDetails = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const userData = await response.json();

    // Calculate metrics
    const repositories = userData.public_repos;
    const followers = userData.followers;

    // Return array containing user details
    return [repositories, followers];
  } catch (error) {
    console.error("Error fetching user details:", error);
    // Return an empty array in case of error
    return [];
  }
};
