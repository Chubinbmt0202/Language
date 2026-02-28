import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const timeAgo = (dateStr) => {
    const dates = new Date(dateStr);
    const seconds = Math.floor((new Date() - dates) / 1000);

    if (seconds < 60) return "vừa xong";

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " năm trước";

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " tháng trước";

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " ngày trước";

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " giờ trước";

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " phút trước";

    return "vừa xong";
};

const PersonalNotes = ({ theoryId }) => {
    const storageKey = `personal_notes_${theoryId}`;
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                setNotes(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse notes");
            }
        }
    }, [storageKey]);

    const saveNotes = (newNotes) => {
        setNotes(newNotes);
        localStorage.setItem(storageKey, JSON.stringify(newNotes));
    };

    const handleAddNote = () => {
        if (!currentText.trim()) return;

        const newNote = {
            id: Date.now().toString(),
            text: currentText.trim(),
            updatedAt: new Date().toISOString()
        };

        saveNotes([newNote, ...notes]);
        setCurrentText('');
        setIsEditing(false);
    };

    const handleDelete = (id) => {
        saveNotes(notes.filter(n => n.id !== id));
    };

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                    <EditOutlined className="text-gray-500" />
                    Ghi chú cá nhân
                </h3>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-bold"
                    >
                        Thêm mới
                    </button>
                )}
            </div>

            <div className="space-y-4">
                {isEditing && (
                    <div className="border border-blue-200 rounded-xl bg-blue-50/30 p-4 shadow-sm animate-fadeIn">
                        <textarea
                            className="w-full bg-transparent border-none outline-none resize-none text-sm text-slate-700 font-medium placeholder-gray-400 mb-2 focus:ring-0"
                            rows={3}
                            placeholder="Nhập ghi chú của bạn..."
                            value={currentText}
                            onChange={(e) => setCurrentText(e.target.value)}
                            autoFocus
                        />
                        <div className="flex justify-end gap-2 mt-2">
                            <button
                                onClick={() => { setIsEditing(false); setCurrentText(''); }}
                                className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleAddNote}
                                className="px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                )}

                {notes.map((note) => (
                    <div key={note.id} className="border border-gray-100 border-l-[3px] border-l-blue-600 rounded-r-xl rounded-l-sm bg-white shadow-sm p-4 relative group animate-fadeIn">
                        <p className="text-slate-700 text-sm mb-3 font-medium whitespace-pre-wrap pr-6">
                            {note.text}
                        </p>
                        <p className="text-xs text-gray-400 font-medium italic">Đã cập nhật: {timeAgo(note.updatedAt)}</p>

                        <button
                            onClick={() => handleDelete(note.id)}
                            className="absolute top-2 right-2 text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all"
                            title="Xóa ghi chú"
                        >
                            <DeleteOutlined />
                        </button>
                    </div>
                ))}

                {notes.length === 0 && !isEditing && (
                    <div className="text-center py-6 mx-auto">
                        <p className="text-sm font-medium text-gray-400">Chưa có ghi chú nào.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalNotes;
