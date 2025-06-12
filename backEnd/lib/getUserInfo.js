function getUserInfo(user) {
  return {
      id: user.id || user._id,
    username: user.username,
    name: user.name,
  };
}

module.exports = getUserInfo;