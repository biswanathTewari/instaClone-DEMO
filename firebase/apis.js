import {firestoreDB, firebaseAuth} from './services';

const FIREBASE = {
  logIn: (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  },

  getUser: userId => {
    return firestoreDB.collection('users').doc(userId).get();
  },

  signUp: (email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  },

  setUser: (id, displayName) => {
    return firestoreDB
      .collection('users')
      .doc(id)
      .set({displayName: displayName, followers: 0, following: 0});
  },

  getFeeds: userId => {
    return firestoreDB.collection('feeds').doc(userId).get();
  },

  getProfile: profileId => {
    return firestoreDB.collection('users').doc(profileId).get();
  },

  getProfilePosts: profileId => {
    return firestoreDB
      .collection('users')
      .doc(profileId)
      .collection('posts')
      .get();
  },

  getFollowers: (profileId, showModal) => {
    return firestoreDB
      .collection('users')
      .doc(profileId)
      .collection(showModal)
      .get();
  },

  getFollowing: (profileId, showModal) => {
    return firestoreDB
      .collection('users')
      .doc(profileId)
      .collection(showModal)
      .get();
  },

  getAllUsers: () => {
    return firestoreDB.collection('users').get();
  },

  getUserFollowing: userId => {
    return firestoreDB
      .collection('users')
      .doc(userId)
      .collection('following')
      .get();
  },

  startFollowing: async (
    loggedInUserid,
    userId,
    displayName,
    loggedUserDisplayName,
  ) => {
    await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .collection('following')
      .doc(userId)
      .set({displayName});

    await firestoreDB
      .collection('users')
      .doc(userId)
      .collection('followers')
      .doc(loggedInUserid)
      .set({loggedUserDisplayName});

    const followingCountRes = await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .get();

    await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .update({following: followingCountRes.data().following + 1});

    const followersCountRes = await firestoreDB
      .collection('users')
      .doc(userId)
      .get();

    await firestoreDB
      .collection('users')
      .doc(userId)
      .update({followers: followersCountRes.data().followers + 1});
  },

  startUnfollowing: async (loggedInUserid, userId) => {
    await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .collection('following')
      .doc(userId)
      .delete();

    await firestoreDB
      .collection('users')
      .doc(userId)
      .collection('followers')
      .doc(loggedInUserid)
      .delete();

    const followingCountRes = await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .get();

    await firestoreDB
      .collection('users')
      .doc(loggedInUserid)
      .update({following: followingCountRes.data().following - 1});

    const followersCountRes = await firestoreDB
      .collection('users')
      .doc(userId)
      .get();

    await firestoreDB
      .collection('users')
      .doc(userId)
      .update({followers: followersCountRes.data().followers - 1});
  },

  like: (userId, postId, ownerId, likes) => {
    return firestoreDB
      .collection('users')
      .doc(ownerId)
      .collection('posts')
      .doc(postId)
      .update({likes: [...likes, userId]});
  },
  removeLike: (userId, postId, ownerId, likes) => {
    return firestoreDB
      .collection('users')
      .doc(ownerId)
      .collection('posts')
      .doc(postId)
      .update({likes: likes.filter(id => id !== userId)});
  },
};

export default FIREBASE;
