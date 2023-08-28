class Friend {
  constructor(email) {
    this.email = email;
    this.friends = [];
  }

  addFriendship(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }

  canBeConnected(friend) {
    // Your code goes here
    if (this === friend) return true;

    // check the friend has been visited
    const visited = new Set();

    // quee up friends for tracking purpose
    const quee = [...this.friends];

    // check there are friends in quee
    while (quee.length > 0) {
      // remove first friend from the first quee
      const currentFriend = quee.shift();

      //check if the current friend is is equal to friend then return true;
      if (currentFriend === friend) return true;

      // check if the visited friend does not have the current friend

      if (!visited.has(currentFriend)) {
        visited.add(currentFriend);
        quee.push(...currentFriend.friends);
      }
    }
    return false;
  }

  swap(currentFriend)
}

const a = new Friend("A");
const b = new Friend("B");
const c = new Friend("C");

a.addFriendship(b);
b.addFriendship(c);

console.log(a.canBeConnected(c));
