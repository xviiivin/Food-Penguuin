import firebase from "./firebase";
import { getUserInfo } from "./user";

export const getHistoryRes = async (res) => {
    try {
        const usersRef = firebase.firestore().collection('history').where("nameres", '==', res).where('status', '==', false);
        const snapshot = await usersRef.get();
        const allUsers = [];

        const promises = snapshot.docs.map(async (doc) => {
            const data = doc.data();
            const tt = await getUserInfo(data.useruid);
            allUsers.push({
                id: doc.id,
                ...data,
                tt: tt,
            });
        });
        await Promise.all(promises); // Wait for all promises to resolve
        console.log(allUsers);
        return allUsers;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getResWithUID = async (uid) => {
    try {

        const usersRef = firebase.firestore().collection('history').where("useruid", '==', uid).where('status', '==', false);
        const snapshot = await usersRef.get();
        const allUsers = [];

        const promises = snapshot.docs.map(async (doc) => {
            const datf = doc.data();
            const test = await getGetGet(datf.nameres)
            const currentIndex = test.findIndex(user => user.id === doc.id);
            allUsers.push({
                id: doc.id,
                queue: currentIndex, 
                ...doc.data(),
            });
        });
        await Promise.all(promises);
        console.log(allUsers);
        return await allUsers.reverse();
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getGetGet = async (name) => {
    try {

        const usersRef = firebase.firestore().collection('history').where("nameres", '==', name).where("status", "==", false);
        const snapshot = await usersRef.get();
        const allUsers = [];

        snapshot.forEach((doc) => {
            allUsers.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return await allUsers;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getTime = async (id) => {
    try {
        const usersRef = firebase.firestore().collection('restaurant').where("status", '==', 0);
        const snapshot = await usersRef.get();
        const allUsers = [];
        snapshot.forEach((doc) => {
            allUsers.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return await allUsers;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getResWithUIDTrue = async (uid) => {
    try {
        const usersRef = firebase.firestore().collection('history').where("useruid", '==', uid).where("status", "==", true);
        const snapshot = await usersRef.get();
        const allUsers = [];

        snapshot.forEach((doc) => {
            allUsers.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return await allUsers.reverse();

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}