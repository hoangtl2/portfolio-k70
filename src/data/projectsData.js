import { FolderTree, Search, MessageSquare, Users, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: "Quản lý tệp và thư mục",
    shortDesc: "Thao tác cơ bản, tổ chức khoa học và quy tắc đặt tên chuẩn.",
    icon: FolderTree,
    color: "from-blue-500 to-cyan-400",
    fullDesc: "Dự án này thể hiện kỹ năng tổ chức dữ liệu một cách logic trên máy tính. Bao gồm việc xây dựng cấu trúc cây thư mục tối ưu cho học tập/công việc và áp dụng các quy tắc đặt tên tệp nhất quán, dễ tìm kiếm.",
    requirements: [
      "Cấu trúc thư mục logic",
      "Quy tắc đặt tên sáng tạo, nhất quán",
      "Mô tả thể hiện sự hiểu sâu sắc về tổ chức dữ liệu"
    ],
    placeholderContent: "Hãy thay thế phần này bằng ảnh chụp màn hình thư mục máy tính của bạn và giải thích lý do bạn tổ chức chúng như vậy."
  },
  {
    id: 2,
    title: "Tìm kiếm & Đánh giá thông tin",
    shortDesc: "Khai thác dữ liệu học thuật bằng các toán tử tìm kiếm nâng cao.",
    icon: Search,
    color: "from-emerald-500 to-teal-400",
    fullDesc: "Áp dụng linh hoạt các toán tử tìm kiếm (site:, filetype:, \", -, OR) để truy xuất tài liệu học thuật chính xác. Kèm theo đó là bảng đánh giá độ tin cậy của các nguồn tin tìm được.",
    requirements: [
      "Sử dụng linh hoạt trên 4 toán tử tìm kiếm",
      "Phân tích rất sâu sắc về chiến lược tìm kiếm",
      "Đánh giá nguồn tin chi tiết"
    ],
    placeholderContent: "Chèn ảnh chụp màn hình kết quả tìm kiếm (có sử dụng toán tử) và bảng đánh giá độ tin cậy của ít nhất 2 nguồn tin học thuật."
  },
  {
    id: 3,
    title: "Viết Prompt hiệu quả",
    shortDesc: "Giao tiếp và khai thác sức mạnh của AI trong học tập.",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    fullDesc: "Thể hiện kỹ năng Prompt Engineering. So sánh kết quả giữa một prompt cơ bản và một prompt được tối ưu hóa (sử dụng cấu trúc vai trò, bối cảnh, yêu cầu rõ ràng) để thấy sự khác biệt về chất lượng đầu ra của AI.",
    requirements: [
      "Áp dụng thành thạo kỹ thuật Prompt Engineering",
      "So sánh chi tiết Prompt ban đầu và Prompt cải tiến",
      "Phân tích sâu sắc cơ chế hoạt động của AI qua kết quả"
    ],
    placeholderContent: "Thêm ảnh chụp màn hình đoạn chat với AI, thể hiện rõ Prompt ban đầu, Prompt cải tiến và so sánh chất lượng câu trả lời."
  },
  {
    id: 4,
    title: "Hợp tác trực tuyến",
    shortDesc: "Làm việc nhóm hiệu quả trong môi trường số.",
    icon: Users,
    color: "from-orange-500 to-amber-400",
    fullDesc: "Minh chứng về việc ứng dụng các công cụ quản lý dự án (như Trello, Notion, Google Workspace) để phân công công việc, theo dõi tiến độ và giao tiếp trực tuyến với nhóm.",
    requirements: [
      "Tích hợp các tính năng nâng cao của công cụ hợp tác",
      "Mô tả chi tiết cách tối ưu hóa quy trình làm việc nhóm",
      "Có minh chứng rõ ràng (ảnh chụp, link)"
    ],
    placeholderContent: "Cung cấp link hoặc ảnh chụp màn hình bảng quản lý công việc nhóm (Trello/Notion) và lịch sử thảo luận/chỉnh sửa tài liệu chung."
  },
  {
    id: 5,
    title: "Sáng tạo nội dung với AI",
    shortDesc: "Sử dụng AI tạo sinh để hỗ trợ phát triển nội dung số.",
    icon: ImageIcon,
    color: "from-rose-500 to-red-500",
    fullDesc: "Trưng bày một sản phẩm nội dung số hoàn chỉnh (bài viết blog, hình ảnh nghệ thuật, hoặc video) có sự hỗ trợ trực tiếp từ các công cụ AI tạo sinh (ChatGPT, Midjourney, Canva AI).",
    requirements: [
      "Sản phẩm rất chuyên nghiệp và sáng tạo",
      "Thể hiện khả năng tận dụng tối đa các công cụ AI",
      "Mô tả rõ công cụ AI nào đã được sử dụng và ở khâu nào"
    ],
    placeholderContent: "Upload hoặc chèn link sản phẩm số của bạn vào đây (Video YouTube, bài viết PDF, hoặc bộ ảnh). Nhớ ghi rõ Prompt bạn đã dùng để tạo ra chúng."
  },
  {
    id: 6,
    title: "AI có trách nhiệm",
    shortDesc: "An toàn, đạo đức và liêm chính học thuật trong thời đại AI.",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    fullDesc: "Trình bày bộ nguyên tắc cá nhân về việc sử dụng AI một cách có trách nhiệm. Nhấn mạnh vào liêm chính học thuật, kiểm chứng thông tin và bảo vệ quyền riêng tư dữ liệu.",
    requirements: [
      "Bộ nguyên tắc chi tiết (5-7 điều), tư duy phản biện cao",
      "Đề xuất giải pháp thực tế cho các thách thức đạo đức",
      "Tuân thủ tuyệt đối quy tắc trích dẫn"
    ],
    placeholderContent: "Liệt kê 5-7 nguyên tắc cá nhân của bạn khi dùng AI. Ví dụ: 'Luôn kiểm chứng lại thông tin AI cung cấp bằng nguồn độc lập'."
  }
];
