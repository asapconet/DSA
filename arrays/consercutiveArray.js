const items = (contents) => {
  return Math.max(...contents) - Math.min(...contents) + 1 - contents.length;
};

// this function returns contents in items in assending order and 
// ensures that content is preceeded with exactly 1 
// This will tell him the minimum number of content to be added