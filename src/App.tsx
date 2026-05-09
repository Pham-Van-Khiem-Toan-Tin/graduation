/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ReactNode, useState} from "react";
import React from "react";
import confetti from "canvas-confetti";
import {motion, AnimatePresence} from "motion/react";
import {
    GraduationCap,
    Clock,
    MapPin,
    Camera,
    Megaphone,
    Info,
    UserCircle2,
    ChevronRight,
    School,
    Send,
    Calendar,
    Search,
    Menu,
    X
} from "lucide-react";
import HoiTruongImage from "./assets/images/hoitruong.jpg";
import BaoVeDoAn from "./assets/images/baovedoan.jpg";
import HocTap from "./assets/images/hoctap.jpg";
import Avatar from "./assets/images/avatar.jpg";
import PhongBaoVe from "./assets/images/phongbaove.jpg";
import { useForm } from "react-hook-form";
type RegistrationFormValues = {
    name: string;
    relationship: string;
    phone?: string;
    quantity: string;
};
type ContactFormValues = {
    name: string;
    phone?: string;
    message: string;
};
interface ScheduleItem {
    time: string;
    period: string;
    title: string;
    description: string;
    icon: ReactNode;
    position: 'left' | 'right';
}

const scheduleData: ScheduleItem[] = [
    {
        time: "14:00",
        period: "Chiều",
        title: "Đón Tiếp & Khai Mạc",
        description: "Sinh viên và phụ huynh check-in, ổn định chỗ ngồi tại Hội trường C2. Các tiết mục văn nghệ chào mừng truyền thống Bách Khoa.",
        icon: <Megaphone className="w-5 h-5"/>,
        position: 'right'
    },
    {
        time: "14:30",
        period: "CHIỀU",
        title: "Phát Biểu Chúc Mừng",
        description: "Lãnh đạo nhà trường đọc diễn văn chúc mừng, tổng kết khóa học. Đại diện tân cử nhân phát biểu tri ân thầy cô và gia đình.",
        icon: <Megaphone className="w-5 h-5"/>,
        position: 'left'
    },
    {
        time: "15:00",
        period: "CHIỀU",
        title: "Nghi Thức Trao Bằng",
        description: "Lần lượt xướng danh và trao bằng tốt nghiệp cho các tân kỹ sư, cử nhân theo từng Viện/Khoa. Khoảnh khắc vắt dải mũ đầy tự hào.",
        icon: <GraduationCap className="w-5 h-5"/>,
        position: 'right'
    },
    {
        time: "17:30",
        period: "CHIỀU",
        title: "Chụp Ảnh Lưu Niệm",
        description: "Tự do chụp ảnh cùng gia đình, bạn bè và thầy cô tại các khu vực check-in khuôn viên Quảng trường Thư viện Tạ Quang Bửu.",
        icon: <Camera className="w-5 h-5"/>,
        position: 'left'
    }
];

export default function App() {
    const [activeTab, setActiveTab] = useState<'schedule' | 'registration' | 'library' | 'contact' | 'about' | 'privacy'>('registration');
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen font-sans bg-[#fbf9f9]">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
      <span
          className="text-xl font-display font-bold text-hust-red tracking-tight cursor-pointer"
          onClick={() => {
              setActiveTab("schedule");
              setIsMobileMenuOpen(false);
          }}
      >
        Khiêm&apos;s Graduation
      </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {[
                            ["schedule", "Lịch Trình"],
                            ["registration", "Xác Nhận Tham Dự"],
                            ["library", "Kỷ Niệm"],
                            ["contact", "Lời Chúc"],
                        ].map(([tab, label]) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as typeof activeTab)}
                                className={`${
                                    activeTab === tab
                                        ? "text-hust-red border-b-2 border-hust-red font-bold"
                                        : "text-zinc-500 hover:text-hust-red"
                                } pb-1 transition-all font-display`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setActiveTab("registration")}
                            className="hidden md:block bg-hust-red text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-hust-red-dark transition-all transform active:scale-95 shadow-sm font-display"
                        >
                            Tham Dự Cùng Khiêm
                        </button>

                        <motion.button
                            whileTap={{ scale: 0.92 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            className={`
    md:hidden
    relative
    w-12 h-12
    rounded-2xl
    border
    backdrop-blur-md
    shadow-sm
    flex items-center justify-center
    transition-all duration-300
    ${
                                isMobileMenuOpen
                                    ? "bg-hust-red border-hust-red text-white shadow-lg"
                                    : "bg-white/80 border-zinc-200 text-zinc-700 hover:border-hust-red/30 hover:text-hust-red"
                            }
  `}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 shadow-lg"
                        >
                            <div className="flex flex-col gap-2">
                                {[
                                    ["schedule", "Lịch Trình"],
                                    ["registration", "Xác Nhận Tham Dự"],
                                    ["library", "Kỷ Niệm"],
                                    ["contact", "Lời Chúc"],
                                ].map(([tab, label]) => (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab as typeof activeTab);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`text-left px-4 py-3 rounded-xl font-display font-semibold transition-all ${
                                            activeTab === tab
                                                ? "bg-hust-red text-white"
                                                : "text-zinc-600 hover:bg-zinc-50 hover:text-hust-red"
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}

                                <button
                                    onClick={() => {
                                        setActiveTab("registration");
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="mt-2 bg-hust-red text-white font-bold px-4 py-3 rounded-xl font-display"
                                >
                                    Tham Dự Cùng Khiêm
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
                {activeTab === 'schedule' && (
                    <motion.div
                        key="schedule"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <ScheduleView onShowMap={() => setIsMapOpen(true)}/>
                    </motion.div>
                )}
                {activeTab === 'registration' && (
                    <motion.div
                        key="registration"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <RegistrationView onSeeSchedule={() => setActiveTab('schedule')}/>
                    </motion.div>
                )}
                {activeTab === 'library' && (
                    <motion.div
                        key="library"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <LibraryView/>
                    </motion.div>
                )}
                {activeTab === 'contact' && (
                    <motion.div
                        key="contact"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <ContactView/>
                    </motion.div>
                )}
                {activeTab === 'about' && (
                    <motion.div
                        key="about"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <AboutView/>
                    </motion.div>
                )}
                {activeTab === 'privacy' && (
                    <motion.div
                        key="privacy"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <PrivacyView/>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Map Modal */}
            {/* Map Modal */}
            <AnimatePresence>
                {isMapOpen && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMapOpen(false)}
                            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative z-[10000] bg-white w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* HEADER */}
                            <div className="h-16 px-6 bg-white border-b border-zinc-200 flex items-center justify-between shrink-0">
                                <div>
                                    <h3 className="font-display font-bold text-zinc-900">
                                        Sơ đồ khu vực
                                    </h3>
                                    <p className="text-xs text-zinc-500">
                                        Cổng Trần Đại Nghĩa → Thư viện Tạ Quang Bửu
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsMapOpen(false)}
                                    className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-hust-red hover:text-white transition-all flex items-center justify-center"
                                    aria-label="Đóng bản đồ"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* MAP */}
                            <div className="flex-1 min-h-0">
                                <iframe
                                    src="https://www.google.com/maps?output=embed&saddr=Cổng+Trần+Đại+Nghĩa,+HUST&daddr=Thư+viện+Tạ+Quang+Bửu,+HUST&dirflg=w"
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Đường đi tới thư viện"
                                />
                            </div>

                            {/* FOOTER */}
                            <div className="p-6 bg-zinc-50 flex items-center gap-4 text-sm text-zinc-600 italic border-t shrink-0">
                                <Info className="w-4 h-4 text-hust-red shrink-0" />
                                Dành cho bạn bè: Khiêm sẽ có mặt tại sảnh Thư viện từ 17h00 để chụp ảnh cùng mọi người nhé!
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-sm text-zinc-500 font-medium font-display translate-y-1">
                        <span className="text-hust-red font-bold">© 2026 Phạm Văn Khiêm - Bách Khoa Hà Nội.</span> All
                        rights reserved.
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-zinc-400 font-display">
                        <button onClick={() => setActiveTab('about')}
                                className="hover:text-hust-red transition-colors">Về Khiêm
                        </button>
                        <button onClick={() => setActiveTab('privacy')}
                                className="hover:text-hust-red transition-colors">Bảo mật
                        </button>
                        <button onClick={() => setActiveTab('schedule')}
                                className="hover:text-hust-red transition-colors">Lịch trình
                        </button>
                    </div>
                    <div className="text-sm font-bold text-hust-red font-display cursor-pointer"
                         onClick={() => setActiveTab('schedule')}>Khiêm's Graduation
                    </div>
                </div>
            </footer>
        </div>
    );
}

function AboutView() {
    return (
        <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
            <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hust-red/5 border border-hust-red/20 text-hust-red text-xs font-bold uppercase tracking-wider mb-6">
                        Hành trình của mình
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 leading-tight">
                        Hành trình Thanh Xuân Tại <span className="text-hust-red">Bách Khoa Hà Nội</span>
                    </h1>
                    <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-display">
                        Lễ tốt nghiệp này không chỉ là sự kết thúc của một giai đoạn học tập, mà là khởi đầu của một
                        hành trình mới. Thời gian tại HUST đã tôi luyện cho mình kiến thức và những người bạn tuyệt vời. Cảm
                        ơn bạn vì đã là một phần trong thanh xuân của mình!
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-3xl font-display font-bold text-hust-red mb-1">2019 - 2026</div>
                            <div
                                className="text-sm text-zinc-400 font-medium font-display uppercase tracking-wider">Niên
                                khóa
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-hust-red mb-1">MI</div>
                            <div
                                className="text-sm text-zinc-400 font-medium font-display uppercase tracking-wider">Viện
                                Toán và ứng dụng Tin học
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
                            className="w-full h-full object-cover"
                            alt="HUST Campus"
                        />
                    </div>
                    <div
                        className="absolute -bottom-8 -left-8 bg-white border border-zinc-100 p-6 rounded-2xl shadow-xl max-w-[240px]">
                        <p className="text-sm text-zinc-500 italic font-display">
                            "Lao động hăng say, học tập miệt mài - Tương lai rạng ngời dưới mái trường Bách Khoa."
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-zinc-50 rounded-[32px] p-12 md:p-20">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-zinc-900 mb-4 tracking-tight">Món Quà Khiêm Trân
                        Trọng Nhất</h2>
                    <p className="text-zinc-500 italic leading-relaxed font-display">
                        "Sự hiện diện của bạn tại buổi lễ chính là món quà ý nghĩa nhất đối với mình."
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Tình Bạn",
                            desc: "Những ngày ôn thi quên ăn quên ngủ tại thư viện Tạ Quang Bửu cùng các chiến hữu.",
                            icon: <GraduationCap className="w-6 h-6"/>
                        },
                        {
                            title: "Kỷ Niệm",
                            desc: "Những giờ lên lớp, những buổi thực hành và cả những lần hụt hẫng vì điểm thi.",
                            icon: <UserCircle2 className="w-6 h-6"/>
                        },
                        {
                            title: "Tương Lai",
                            desc: "Luôn mang trong mình tinh thần người Bách Khoa để kiến tạo những giá trị mới.",
                            icon: <Megaphone className="w-6 h-6"/>
                        }
                    ].map((item, idx) => (
                        <div key={idx}
                             className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                            <div
                                className="w-12 h-12 bg-hust-red/5 rounded-xl flex items-center justify-center text-hust-red mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-zinc-900 mb-3 font-display">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed font-display">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

function PrivacyView() {
    return (
        <main className="pt-32 pb-24 px-6 max-w-[800px] mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-display font-bold text-zinc-900 mb-4">Chính Sách Bảo Mật</h1>
                <p className="text-zinc-400 font-display">Cập nhật lần cuối: 15/04/2026</p>
            </div>

            <div className="prose prose-zinc prose-lg">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">1. Thu Thập Thông Tin</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Chúng tôi thu thập các thông tin cần thiết để phục vụ công tác tổ chức Lễ tốt nghiệp và quản
                            lý sinh viên. Các thông tin bao gồm nhưng không giới hạn ở:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-4">
                            <li>Họ và tên, Mã số sinh viên.</li>
                            <li>Thông tin liên lạc (Số điện thoại, Email).</li>
                            <li>Viện/Khoa đào tạo.</li>
                            <li>Số lượng người thân đi kèm để sắp xếp chỗ ngồi.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">2. Sử Dụng Thông Tin</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Thông tin thu thập được chỉ sử dụng cho các mục đích sau:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-4">
                            <li>Lập danh sách tham dự, in ấn giấy mời và bằng tốt nghiệp.</li>
                            <li>Thông báo các thông tin quan trọng liên quan đến buổi lễ.</li>
                            <li>Thực hiện các công tác hậu cần (lễ phục, chỗ ngồi, tiệc mừng).</li>
                            <li>Lưu lại khoảnh khắc kỷ niệm trong Thư viện Kỷ niệm của nhà trường.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">3. Bảo Mật Thông Tin</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Nhà trường cam kết bảo vệ dữ liệu cá nhân của sinh viên bằng các biện pháp kỹ thuật và tổ
                            chức phù hợp. Chúng tôi không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào
                            ngoại trừ các đơn vị liên quan trực tiếp đến việc tổ chức sự kiện hoặc theo yêu cầu pháp lý.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">4. Quyền Của Sinh Viên</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Sinh viên có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa thông tin đăng ký của mình bằng cách
                            liên hệ với Phòng Công tác Sinh viên (C1-101) trước ngày tổ chức sự kiện ít nhất 07 ngày làm
                            việc.
                        </p>
                    </section>

                    <section className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                        <h2 className="text-xl font-display font-bold text-zinc-900 mb-2">Liên Hệ Giải Đáp</h2>
                        <p className="text-zinc-500 text-sm italic">
                            Mọi thắc mắc về chính sách bảo mật, vui lòng gửi email về: <span
                            className="text-hust-red font-bold">phamkhiemhust2001@gmail.com</span>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}


function ContactView() {
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    });
    const onSubmit = async (data: ContactFormValues) => {
        const cleanedData = {
            name: data.name.trim(),
            phone: data.phone?.trim() || "",
            message: data.message.trim(),
        };

        const response = await fetch("https://formspree.io/f/mojrkjgv", {
            method: "POST",
            body: JSON.stringify(cleanedData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            reset();
            setSubmitStatus("success");

            confetti({
                particleCount: 160,
                spread: 100,
                origin: { y: 0.7 },
            });
        } else {
            setSubmitStatus("error");
        }
    };
    return (
        <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
            {/* Header Section */}
            <header className="text-center mb-16 relative">
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none -z-10">
                    <School className="w-[300px] h-[300px] text-hust-red"/>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-hust-red mb-4 tracking-tight">Gửi Lời
                    Chúc Mừng</h1>
                <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-display">
                    Sự hiện diện hoặc lời chúc của bạn là món quà vô giá đối với Khiêm trong ngày đặc biệt này. Bạn cũng
                    có thể nhắn mình đón khi bạn đến trường nhé!
                </p>
            </header>

            {/* Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Column */}
                <section
                    className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-8 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-hust-red"></div>
                    <h2 className="text-2xl font-display font-bold text-zinc-900 mb-8">Nhắn Nhủ Cho Khiêm</h2>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-700 font-display">Tên Của Bạn</label>
                                <input
                                    {...register("name", {
                                        validate: (value) =>
                                            value.trim().length > 0 || "Bạn nhập tên giúp Khiêm nhé",
                                        minLength: {
                                            value: 2,
                                            message: "Tên tối thiểu 2 ký tự",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Nhập tên"
                                    className={`w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:ring-1 outline-none transition-all font-display ${
                                        errors.name
                                            ? "border-hust-red focus:border-hust-red focus:ring-hust-red"
                                            : "border-zinc-200 focus:border-hust-red focus:ring-hust-red"
                                    }`}
                                />
                                {errors.name && (
                                    <p className="text-sm text-hust-red font-display">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-700 font-display">Số Điện Thoại</label>
                                <input
                                    {...register("phone", {
                                        validate: (value) => {
                                            const phone = value?.trim();

                                            if (!phone) return true;

                                            return (
                                                /^(0|\+84)\d{9}$/.test(phone.replace(/\s/g, "")) ||
                                                "Số điện thoại chưa đúng định dạng"
                                            );
                                        },
                                    })}
                                    type="tel"
                                    placeholder="09xx..."
                                    className={`w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:ring-1 outline-none transition-all font-display ${
                                        errors.phone
                                            ? "border-hust-red focus:border-hust-red focus:ring-hust-red"
                                            : "border-zinc-200 focus:border-hust-red focus:ring-hust-red"
                                    }`}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-hust-red font-display">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-700 font-display">Lời Nhắn / Lời Chúc</label>
                            <textarea
                                placeholder="Viết lời chúc hoặc lời nhắn cho mình tại đây nhé..."
                                rows={5}
                                {...register("message", {
                                    validate: (value) =>
                                        value.trim().length > 0 || "Bạn viết vài lời cho Khiêm nhé ❤️",
                                    minLength: {
                                        value: 10,
                                        message: "Lời nhắn hơi ngắn nha 😄",
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Lời nhắn tối đa 500 ký tự thôi nhé",
                                    },
                                })}
                                className={`w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:ring-1 outline-none transition-all font-display resize-none ${
                                    errors.message
                                        ? "border-hust-red focus:border-hust-red focus:ring-hust-red"
                                        : "border-zinc-200 focus:border-hust-red focus:ring-hust-red"
                                }`}
                            />
                            {errors.message && (
                                <p className="text-sm text-hust-red font-display">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-hust-red text-white font-bold py-3 px-10 rounded-xl hover:bg-hust-red-dark transition-all transform active:scale-95 shadow-md flex items-center gap-2 font-display disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" />

                                {isSubmitting ? "Đang gửi..." : "Gửi Lời Chúc"}
                            </button>
                        </div>
                    </form>
                    <AnimatePresence>
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
                                onClick={() => setSubmitStatus(null)}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.85, y: 20 }}
                                    transition={{ duration: 0.25 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
                                >
                                    <div className="text-5xl mb-5">
                                        {submitStatus === "success" ? "🎉" : "🥲"}
                                    </div>

                                    <h3 className="text-2xl font-display font-bold text-zinc-900 mb-3">
                                        {submitStatus === "success"
                                            ? "Khiêm nhận được lời chúc rồi!"
                                            : "Oops... có lỗi xảy ra"}
                                    </h3>

                                    <p className="text-zinc-500 leading-relaxed mb-8 font-display">
                                        {submitStatus === "success"
                                            ? "Cảm ơn bạn rất nhiều vì đã dành thời gian gửi lời chúc cho mình. Điều này thật sự rất ý nghĩa ❤️"
                                            : "Có vẻ mạng hơi chập chờn. Bạn thử gửi lại giúp mình nhé!"}
                                    </p>

                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="w-full rounded-xl bg-hust-red px-6 py-3 font-bold text-white hover:bg-hust-red-dark transition-all"
                                    >
                                        Đóng
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* Info Column */}
                <div className="lg:col-span-5 space-y-8">
                    <section
                        className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 relative overflow-hidden group">
                        <div
                            className="absolute top-0 right-0 w-24 h-24 bg-hust-red/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
                        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-8">Thông Tin Liên Hệ</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div
                                    className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-hust-red shadow-sm shrink-0">
                                    <MapPin className="w-5 h-5"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-800 font-display mb-1">Địa Điểm Đón</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        Khi bạn đến cổng Thư viện Tạ Quang Bửu,<br/>
                                        nhắn tin Zalo hoặc gọi cho mình nhé!<br/>
                                        (Cổng số 1 Đại Cồ Việt)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div
                                    className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-hust-red shadow-sm shrink-0">
                                    <div className="transform rotate-12"><Info className="w-5 h-5"/></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-800 font-display mb-1">Của Khiêm</h3>
                                    <p className="text-sm text-zinc-500 font-display">0962 339 426</p>
                                    <p className="text-[12px] text-zinc-400 mt-0.5">(Nhớ lưu số mình vào máy nhé!)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Map Placeholder */}
                    <section
                        className="bg-white border border-zinc-200 rounded-2xl p-2 h-[320px] relative overflow-hidden group shadow-sm cursor-pointer">
                        <div className="w-full h-full bg-zinc-100 rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.65524540758!2d105.83973167586427!3d21.006452388543206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac77be0eafaf%3A0xd66f269f842d3935!2zSOG7mWkgdHLGsOG7nW5nIEMy!5e0!3m2!1svi!2s!4v1778261740559!5m2!1svi!2s"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}


function LibraryView() {
    return (
        <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
            {/* Header Section */}
            <section className="text-center mb-16 relative">
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none -z-10">
                    <School className="w-[300px] h-[300px] text-hust-red"/>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4 tracking-tight">Thư Viện
                    Kỷ Niệm</h1>
                <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    Xem lại những khoảnh khắc đáng nhớ trong quá trình mình học tập tại Bách Khoa và những hình ảnh đẹp
                    nhất trong ngày lễ.
                </p>
            </section>


            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                {/* Large Highlight Card */}
                <div
                    className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group border border-zinc-100 cursor-pointer shadow-sm">
                    <img
                        src={HoiTruongImage}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="Graduation ceremony"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span
                            className="bg-hust-red text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Buổi Lễ</span>
                        <h3 className="text-white text-2xl font-display font-bold mb-1">Khoảnh Khắc Tự Hào</h3>
                        <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">Lễ trao bằng tốt nghiệp trang
                            trọng tại Hội trường C2, đánh dấu một chặng đường nỗ lực không ngừng nghỉ.</p>
                    </div>
                </div>

                {/* Portrait Card */}
                <div
                    className="md:row-span-2 rounded-2xl overflow-hidden relative group border border-zinc-100 cursor-pointer shadow-sm bg-zinc-100">
                    <img
                        src={Avatar}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="Top student"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h4 className="text-white text-xl font-display font-bold">Phạm Văn Khiêm</h4>
                        <p className="text-white/60 text-sm">Sinh viên Viện Toán Tin</p>
                    </div>
                </div>

                {/* Landscape Cards */}
                <div
                    className="rounded-2xl overflow-hidden relative group border border-zinc-100 cursor-pointer shadow-sm">
                    <img
                        src={PhongBaoVe}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt="Student study"
                    />
                    <div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                <div
                    className="rounded-2xl overflow-hidden relative group border border-zinc-100 cursor-pointer shadow-sm">
                    <img
                        src={HocTap}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt="Event"
                    />
                    <div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Wide Card */}
                <div
                    className="md:col-span-2 rounded-2xl overflow-hidden relative group border border-zinc-100 cursor-pointer shadow-sm">
                    <img
                        src={BaoVeDoAn}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="Toss hats"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <span
                            className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Buổi Lễ Bảo Vệ</span>
                        <h4 className="text-white text-xl font-display font-bold">Hội anh em bảo vệ đồ án</h4>
                    </div>
                </div>
            </div>
        </main>
    );
}


function ScheduleView({onShowMap}: { onShowMap: () => void }) {
    return (
        <main className="pt-32 pb-24 px-6">
            {/* Header Section */}
            <section className="max-w-3xl mx-auto text-center mb-16 relative">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <School className="w-16 h-16 text-hust-red/10 absolute -inset-4 transform -rotate-12"/>
                        <GraduationCap className="w-8 h-8 text-hust-red relative z-10"/>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-hust-red mb-4 tracking-tight">
                    Ngày Trọng Đại Của Khiêm
                </h1>
                <p className="text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
                    Đây là thời gian biểu của mình trong ngày tốt nghiệp. Rất mong bạn có thể sắp xếp thời gian đến
                    chung vui cùng mình!
                </p>
                <div className="mt-10 flex justify-center items-center gap-4">
                    <div className="h-px w-20 bg-zinc-200"></div>
                    <MapPin className="w-4 h-4 text-hust-red"/>
                    <div className="h-px w-20 bg-zinc-200"></div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="max-w-5xl mx-auto relative border-y border-zinc-100 py-16">
                <div
                    className="absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block"></div>
                <div className="space-y-12 md:space-y-0 relative">
                    {scheduleData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16 ${
                                item.position === 'left' ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div
                                className={`w-full md:w-[45%] flex ${item.position === 'left' ? 'justify-start' : 'justify-end'} mb-4 md:mb-0`}>
                                <div
                                    className="bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all text-center md:text-left w-full md:w-auto min-w-[200px] group cursor-default">
                                    <div
                                        className="text-3xl font-display font-bold text-hust-red mb-1 group-hover:scale-105 transition-transform duration-300">
                                        {item.time}
                                    </div>
                                    <div className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
                                        {item.period}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-zinc-200 md:flex items-center justify-center text-zinc-400 hidden z-10 shadow-sm">
                                {item.icon}
                            </div>
                            <div className={`w-full md:w-[45%] ${item.position === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div
                                    className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                    <div
                                        className={`absolute top-0 left-0 w-1.5 h-full ${index % 2 === 0 ? 'bg-hust-red' : 'bg-hust-red/30'}`}></div>
                                    <h3 className="text-xl font-display font-bold text-zinc-900 mb-3 group-hover:text-hust-red transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Warning Section */}
            <section className="max-w-3xl mx-auto mt-20">
                <div
                    className="bg-zinc-50 border border-zinc-100 rounded-2xl p-10 text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-hust-red/5 rounded-full flex items-center justify-center mb-4">
                        <Info className="w-6 h-6 text-hust-red"/>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-zinc-900 mb-2 font-display">Lưu ý cho bạn</h2>
                    <p className="text-zinc-500 mb-8 max-w-lg">
                        Buổi lễ sẽ rất đông, nên nếu bạn đến thì hãy xem sơ đồ khu vực bên dưới để chọn điểm đỗ xe và
                        hướng đi vào hội trường nhé!
                    </p>
                    <button
                        onClick={onShowMap}
                        className="flex items-center gap-2 bg-white border border-hust-red text-hust-red font-semibold px-8 py-3 rounded-full hover:bg-hust-red hover:text-white transition-all transform active:scale-95 font-display shadow-sm"
                    >
                        Xem Sơ Đồ Khu Vực
                        <ChevronRight className="w-4 h-4"/>
                    </button>
                </div>
            </section>
        </main>
    );
}

function RegistrationView({onSeeSchedule}: { onSeeSchedule: () => void }) {
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegistrationFormValues>();

    const onSubmit = async (data: RegistrationFormValues) => {
        const response = await fetch("https://formspree.io/f/mojrkjgv", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            reset();
            setSubmitStatus("success");
            confetti({ particleCount: 140, spread: 90, origin: { y: 0.65 } });
        } else {
            setSubmitStatus("error");
        }
    };
    return (
        <main className="pt-20">
            {/* Hero Section for Registration */}
            <section className="relative min-h-[620px] sm:min-h-[600px] flex items-center justify-center overflow-hidden px-4">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070"
                        alt="Khiêm Graduation"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-[#fbf9f9]/50 via-[#fbf9f9] to-[#fbf9f9]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hust-red/5 border border-hust-red/20 text-hust-red text-xs font-bold uppercase tracking-wider mb-6">
                        <GraduationCap className="w-3.5 h-3.5"/>
                        Class of 2026
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-6 leading-tight">
                        Mời Bạn Đến Dự Lễ Tốt Nghiệp <br className="hidden md:block"/> Của Phạm Khiêm
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-display">
                        Hành trình tại HUST đã đến ngày hái quả. <br/> Mình rất vinh dự và hạnh phúc nểu có bạn
                        cùng chia sẻ thời khắc ý nghĩa này.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#register-form"
                           className="w-full sm:w-auto bg-hust-red text-white font-bold px-10 py-4 rounded-lg hover:bg-hust-red-dark transition-all shadow-lg hover:-translate-y-1 font-display">
                            Xác Nhận Tham Dự
                        </a>
                        <button
                            onClick={onSeeSchedule}
                            className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-600 font-bold px-10 py-4 rounded-lg hover:bg-zinc-50 transition-all font-display"
                        >
                            Xem Lịch Trình
                        </button>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-zinc-900 mb-4 tracking-tight">Gặp Khiêm Ở
                        Đâu?</h2>
                    <div className="h-1 w-16 bg-hust-red mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div
                        className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all relative group">
                        <div
                            className="w-12 h-12 bg-hust-red/5 rounded-xl flex items-center justify-center text-hust-red mb-6 group-hover:scale-110 transition-transform">
                            <Calendar className="w-6 h-6"/>
                        </div>
                        <h3 className="text-xl font-display font-bold text-zinc-900 mb-2 font-display">Thời Gian</h3>
                        <p className="text-zinc-500 mb-1 font-display font-medium">13:00 - 17:30</p>
                        <p className="text-hust-red font-bold font-display">Chủ Nhật, 10/05/2026</p>
                    </div>

                    <div className="md:col-span-2 bg-white border border-zinc-100 rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-6 sm:gap-8 overflow-hidden">
                        <div className="flex-1">
                            <div
                                className="w-12 h-12 bg-hust-red/5 rounded-xl flex items-center justify-center text-hust-red mb-6">
                                <MapPin className="w-6 h-6"/>
                            </div>
                            <h3 className="text-xl font-display font-bold text-zinc-900 mb-2 font-display">Địa Điểm</h3>
                            <p className="text-zinc-500 mb-1 leading-relaxed font-display">Quảng trường Thư viện Tạ
                                Quang Bửu, Đại học Bách khoa Hà Nội</p>
                            <p className="text-hust-red font-bold mt-2 font-display">Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà
                                Nội</p>
                        </div>
                        <div
                            className="flex-1 min-h-[200px] rounded-xl overflow-hidden bg-zinc-100 relative transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7060865506833!2d105.84141387586425!3d21.004415588612996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76e3624a59%3A0x4f3ae5ee12bfcc19!2zVGjGsCB2aeG7h24gVOG6oSBRdWFuZyBC4butdQ!5e0!3m2!1svi!2s!4v1778260850056!5m2!1svi!2s"
                                width="600"
                                height="450"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="register-form" className="py-24 px-6 bg-zinc-50/50">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-hust-red p-10 text-center">
                            <h2 className="text-3xl font-display font-bold text-white mb-2">Xác Nhận Tham Dự</h2>
                            <p className="text-white/70">Để lại tên để mình tiện sắp xếp đón tiếp nhé!</p>
                        </div>

                        <form className="p-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 font-display">Tên Của Bạn
                                        *</label>
                                    <input
                                        {...register("name", {
                                            required: "Bạn nhập tên giúp Khiêm nhé",
                                            minLength: {
                                                value: 2,
                                                message: "Tên tối thiểu 2 ký tự",
                                            },
                                        })}
                                        type="text"
                                        placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                                        className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-hust-red focus:ring-1 focus:ring-hust-red outline-none transition-all font-display"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-hust-red">{errors.name.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 font-display">Bạn Là...? *</label>
                                    <select
                                        {...register("relationship", {
                                            required: "Bạn chọn mối quan hệ nhé",
                                        })}
                                        defaultValue=""
                                        className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-hust-red focus:ring-1 focus:ring-hust-red outline-none transition-all font-display cursor-pointer appearance-none text-zinc-500">
                                        <option value="" disabled>Chọn mối quan hệ...</option>
                                        <option>Bạn bè HUST</option>
                                        <option>Bạn bè ngoài trường</option>
                                        <option>Người thân / Gia đình</option>
                                        <option>Khác</option>
                                    </select>
                                    {errors.relationship && (
                                        <p className="text-sm text-hust-red">{errors.relationship.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 font-display">Số Điện Thoại (Để
                                        mình gọi khi bạn đến)</label>
                                    <input
                                        type="tel"
                                        {...register("phone", {
                                            pattern: {
                                                value: /^(0|\+84)(\d{9})$/,
                                                message: "Số điện thoại chưa đúng định dạng",
                                            },
                                        })}
                                        placeholder="09xx..."
                                        className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-hust-red focus:ring-1 focus:ring-hust-red outline-none transition-all font-display"
                                    />
                                    {errors.phone && (
                                        <p className="text-sm text-hust-red">{errors.phone.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 font-display">Số Người Đi
                                        Cùng</label>
                                    <select
                                        name="quantity"
                                        className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-hust-red focus:ring-1 focus:ring-hust-red outline-none transition-all font-display cursor-pointer appearance-none text-zinc-500">
                                        <option>Chỉ mình bạn</option>
                                        <option>Đi cùng người thân (1-2 người)</option>
                                        <option>Nhóm bạn (3+ người)</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-hust-red text-white font-bold py-5 rounded-xl hover:bg-hust-red-dark transition-all transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 font-display mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" />
                                {isSubmitting ? "Đang gửi..." : "Xác Nhận Tham Dự Cùng Khiêm"}
                            </button>
                        </form>
                        <AnimatePresence>
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
                                    onClick={() => setSubmitStatus(null)}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
                                    >
                                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-hust-red/10 text-3xl">
                                            {submitStatus === "success" ? "🎓" : "⚠️"}
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-zinc-900 mb-2">
                                            {submitStatus === "success"
                                                ? "Khiêm nhận được rồi nhé!"
                                                : "Gửi chưa thành công"}
                                        </h3>

                                        <p className="text-zinc-500 leading-relaxed font-display mb-6">
                                            {submitStatus === "success"
                                                ? "Cảm ơn bạn đã xác nhận tham dự. Hẹn gặp bạn ở Bách Khoa nha!"
                                                : "Có vẻ mạng hơi chập chờn. Bạn thử gửi lại giúp mình nhé."}
                                        </p>

                                        <button
                                            onClick={() => setSubmitStatus(null)}
                                            className="w-full rounded-xl bg-hust-red px-6 py-3 font-bold text-white hover:bg-hust-red-dark transition-all"
                                        >
                                            Đóng
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
}
