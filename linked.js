import {allUsers, linked} fom "users"

const findUnlinkedUsers = (allUsers, linkedUsers) => {
  var linkedUsersHash = {}
  var unLinkedUsers = []

  for (let i = 0 ; i < linkedUsers.length; i++) {
   linkedUsersHash[linkedUsers[i].id] =  linkedUsers[i].id
  }

  for (let i = 0; i < allUsers.length; i++) {
    if (linkedUsersHash[allUsers[i].id] === undefined) {
     unLinkedUsers.push(allUsers[i])
    }
  }
  return unLinkedUsers
}

findUnlinkedUsers(allUsers, linked);
