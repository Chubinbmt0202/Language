import React, { useState, useEffect, useMemo } from "react";
import { Card } from "antd";
import { useAuth } from "@/app/providers/AuthContext";
import { getTodayPoints } from "@/shared/utils/storage/points";

const LeaderboardCard = () => {
    const { user } = useAuth();
    const [todayPoints, setTodayPoints] = useState(0);

    useEffect(() => {
        const fetchPoints = () => {
            setTodayPoints(getTodayPoints());
        };

        fetchPoints();
        window.addEventListener("points:updated", fetchPoints);

        return () => window.removeEventListener("points:updated", fetchPoints);
    }, [user]);

    const leaderboardData = useMemo(() => {
        // Daily Seed Logic
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const seedString = `${year}${month}${day}`;
        const seedNum = parseInt(seedString, 10) || 1;

        const mockNames = [
            "Minh Hạnh", "Tuấn Kiệt", "Mai Phương", "Bảo Lâm", "Hoàng Yến",
            "Gia Huy", "Thảo My", "Hải Đăng", "Quỳnh Anh", "Đức Khang",
            "Thu Huệ", "Quốc Bảo", "Nhật Minh", "Thanh Trúc", "Việt Dũng",
            "Trúc Giang", "Trọng Tuấn", "Ái Châu", "Minh Trí", "Tuyết Nhung"
        ];

        let base = [];
        for (let i = 0; i < 5; i++) {
            const nameIndex = (seedNum + i * 7) % mockNames.length;
            const pointsRound = ((seedNum * (i + 1) * 31) % 140) * 10 + 100; // 100 -> 1500 range roughly
            const avatarId = (seedNum + i * 13) % 70;

            base.push({
                uid: `mock_${i}`,
                name: mockNames[nameIndex],
                avatar: `https://i.pravatar.cc/150?img=${avatarId}`,
                points: pointsRound,
                completed: Math.floor(pointsRound / 50),
                isCurrentUser: false
            });
        }

        // Add current user
        base.push({
            uid: user?.uid || "guest",
            name: user?.displayName || "Bạn",
            avatar: user?.photoURL || "https://i.pravatar.cc/150?img=5",
            points: todayPoints,
            completed: Math.floor(todayPoints / 50),
            isCurrentUser: true
        });

        // Sort descending by points
        base.sort((a, b) => (b.points || 0) - (a.points || 0));

        // Assign rank
        return base.map((item, index) => ({ ...item, rank: index + 1 }));
    }, [user, todayPoints]);

    return (
        <Card
            title={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}>Bảng xếp hạng ngày</span>
                    <a style={{ fontSize: 13, color: "#3b82f6", fontWeight: 500 }}>Xem tất cả</a>
                </div>
            }
            style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)", minHeight: 350 }}
            headStyle={{ borderBottom: "none", padding: "24px 24px 16px" }}
            bodyStyle={{ padding: "0 24px 24px 24px" }}
        >
            {leaderboardData.slice(0, 3).map((usr, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 24, background: usr.isCurrentUser ? "#f0f9ff" : "transparent", padding: usr.isCurrentUser ? "8px" : "0", borderRadius: 8 }}>
                    <div style={{ width: 24, fontSize: 18, fontWeight: 800, color: usr.rank === 1 ? "#eab308" : usr.rank === 2 ? "#94a3b8" : "#f97316", textAlign: "center", marginRight: 16 }}>
                        {usr.rank}
                    </div>
                    <img src={usr.avatar} alt={usr.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", marginRight: 16, border: "2px solid #fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>
                            {usr.name} {usr.isCurrentUser && <span style={{ fontSize: 12, color: "#3b82f6", marginLeft: 4 }}>(Bạn)</span>}
                        </div>
                        <div style={{ color: "#64748b", fontSize: 13 }}>Hoàn thành {usr.completed} bài</div>
                    </div>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: 15 }}>{usr.points}đ</div>
                </div>
            ))}

            {(() => {
                const currentUserPosition = leaderboardData.find(usr => usr.isCurrentUser);
                if (currentUserPosition && currentUserPosition.rank > 3) {
                    return (
                        <>
                            <div style={{ height: 1, background: "#f1f5f9", margin: "0 -24px 24px", width: "calc(100% + 48px)" }} />
                            <div style={{ display: "flex", alignItems: "center", background: "#f0f9ff", padding: "8px", borderRadius: 8 }}>
                                <div style={{ width: 24, fontSize: 15, fontWeight: 600, color: "#64748b", textAlign: "center", marginRight: 16 }}>
                                    {currentUserPosition.rank}
                                </div>
                                <img src={currentUserPosition.avatar} alt="Me" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", marginRight: 16, border: "2px solid #fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 15 }}>Bạn ({user?.displayName || "Minh"})</div>
                                    <div style={{ color: "#64748b", fontSize: 13 }}>Hoàn thành {currentUserPosition.completed} bài</div>
                                </div>
                                <div style={{ fontWeight: 800, color: "#2563eb", fontSize: 15 }}>{currentUserPosition.points}đ</div>
                            </div>
                        </>
                    );
                }
                return null;
            })()}
        </Card>
    );
};

export default LeaderboardCard;
