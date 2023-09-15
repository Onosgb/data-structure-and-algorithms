/* 
Path Finder #1: can you reach the exit?

Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked ..
Walls are marked W.
Start and exit positions are empty in all test cases.
Path Finder Series:
#1: can you reach the exit?
#2: shortest path
#3: the Alpinist
#4: where are you?
#5: there's someone here
*/

function pathFinder(maze) {
  // Convert the maze string into an array of rows
  const mazeArray = maze.split("\n").map((row) => row.split(""));

  // Get the size of the maze (N x N)
  const N = mazeArray.length;

  // Helper function to check if a position is valid and not visited
  function isValid(x, y) {
    return x >= 0 && x < N && y >= 0 && y < N && mazeArray[x][y] === ".";
  }

  // Helper function for DFS traversal
  function dfs(x, y) {
    // Mark the current position as visited
    mazeArray[x][y] = "X";

    // Check if we've reached the exit
    if (x === N - 1 && y === N - 1) {
      return true;
    }

    // Explore all four possible directions (up, down, left, right)
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      // Check if the new position is valid and not visited
      if (isValid(newX, newY) && dfs(newX, newY)) {
        return true; // If a path is found, return true
      }
    }

    return false; // If no path is found from this position, return false
  }

  // Start DFS traversal from the entrance (0, 0)
  return dfs(0, 0);
}

// Example usage:
const maze = `
..W..
..W..
..W..
..W..
.....`;
console.log(pathFinder(maze)); // Output: false
