import { doc, setDoc, onSnapshot, collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/shared/api/firebase/firebase";

/**
 * Sync the given points for today to the global Firestore Daily Leaderboard.
 */
export const syncUserDailyPointsToFirestore = async (userId, displayName, photoURL, points) => {
    if (!userId) return;

    try {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const dateKey = `${year}-${month}-${day}`;

        // Path: dailyLeaderboard/2026-03-01/users/<uid>
        const userDocRef = doc(db, "dailyLeaderboard", dateKey, "users", userId);

        await setDoc(userDocRef, {
            points: points,
            displayName: displayName || "Người dùng ẩn danh",
            photoURL: photoURL || "https://i.pravatar.cc/150",
            lastUpdated: new Date().toISOString()
        }, { merge: true });

        console.log(`Synced ${points} points for user ${userId} to Firestore.`);
    } catch (error) {
        console.error("Error syncing daily points to Firestore:", error);
    }
};

/**
 * Subscribe to the Daily Leaderboard for today.
 * Returns an unsubscribe function you should call when the component unmounts.
 */
export const subscribeToDailyLeaderboard = (callback, maxUsers = 50) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const dateKey = `${year}-${month}-${day}`;

    const usersRef = collection(db, "dailyLeaderboard", dateKey, "users");
    // Sort descending by points
    const q = query(usersRef, orderBy("points", "desc"), limit(maxUsers));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
            users.push({
                uid: doc.id,
                ...doc.data()
            });
        });
        callback(users);
    }, (error) => {
        console.error("Leaderboard Snapshot Error:", error);
    });

    return unsubscribe;
};
