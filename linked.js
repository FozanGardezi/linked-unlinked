import {allUsers, linked} fom "users"

const findUnlinkedUsers = () => {
  var linkedUsersHash = {}
  var unLinkedUsers = []

  for (let i = 0 ; i < linked.length; i++) {
   linkedUsersHash[linked[i].id] =  linked[i].id
  }

  for (let i = 0; i < allUsers.length; i++) {
    if (linkedUsersHash[allUsers[i].id] === undefined) {
     unLinkedUsers.push(allUsers[i])
    }
  }
  return unLinkedUsers
}

findUnlinkedUsers();
