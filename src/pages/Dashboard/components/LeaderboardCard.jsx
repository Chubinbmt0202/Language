import React from "react";
import { Card } from "antd";
import { useAuth } from "@/app/providers/AuthContext";

const LeaderboardCard = () => {
    const { user } = useAuth();

    return (
        <Card
            title={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}>Bảng xếp hạng ngày</span>
                    <a style={{ fontSize: 13, color: "#3b82f6", fontWeight: 500 }}>Xem tất cả</a>
                </div>
            }
            style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
            headStyle={{ borderBottom: "none", padding: "24px 24px 16px" }}
            bodyStyle={{ padding: "0 24px 24px 24px" }}
        >
            {[
                { rank: 1, name: "Minh Hạnh", completed: 8, points: 980, avatar: "https://i.pravatar.cc/150?img=12" },
                { rank: 2, name: "Tuấn Kiệt", completed: 6, points: 750, avatar: "https://i.pravatar.cc/150?img=11" },
                { rank: 3, name: "Mai Phương", completed: 5, points: 620, avatar: "https://i.pravatar.cc/150?img=9" },
            ].map((usr, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                    <div style={{ width: 24, fontSize: 18, fontWeight: 800, color: usr.rank === 1 ? "#eab308" : usr.rank === 2 ? "#94a3b8" : "#f97316", textAlign: "center", marginRight: 16 }}>
                        {usr.rank}
                    </div>
                    <img src={usr.avatar} alt={usr.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", marginRight: 16, border: "2px solid #fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>{usr.name}</div>
                        <div style={{ color: "#64748b", fontSize: 13 }}>Hoàn thành {usr.completed} bài</div>
                    </div>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: 15 }}>{usr.points}đ</div>
                </div>
            ))}

            <div style={{ height: 1, background: "#f1f5f9", margin: "0 -24px 24px", width: "calc(100% + 48px)" }} />

            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: 24, fontSize: 15, fontWeight: 600, color: "#64748b", textAlign: "center", marginRight: 16 }}>
                    12
                </div>
                <img src={user?.photoURL || "https://i.pravatar.cc/150?img=5"} alt="Me" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", marginRight: 16, border: "2px solid #fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 15 }}>Bạn ({user?.displayName || "Minh"})</div>
                    <div style={{ color: "#64748b", fontSize: 13 }}>Hoàn thành 2 bài</div>
                </div>
                <div style={{ fontWeight: 800, color: "#2563eb", fontSize: 15 }}>450đ</div>
            </div>
        </Card>
    );
};

export default LeaderboardCard;
