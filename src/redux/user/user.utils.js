export const searchUser = (users, currentUser) => {
  return users.filter(
    (user) =>
      user.login === currentUser.login &&
      user.password === currentUser.password,
  )[0];
};
