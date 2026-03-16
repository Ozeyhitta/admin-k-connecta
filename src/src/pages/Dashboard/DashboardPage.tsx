import { 
  Users, 
  UserPlus, 
  Activity, 
  TrendingUp,
  FileText,
  MessageSquare,
  ThumbsUp,
  Flag,
  CheckCircle,
  Shield,
  Server,
  Database,
  HardDrive,
  Zap,
  AlertCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// Mock Data
const kpiData = [
  { 
    label: 'Tổng người dùng', 
    value: '124,583', 
    change: '+12.5%', 
    trend: 'up',
    icon: Users,
    color: 'emerald'
  },
  { 
    label: 'Người dùng mới hôm nay', 
    value: '1,247', 
    change: '+8.3%', 
    trend: 'up',
    icon: UserPlus,
    color: 'blue'
  },
  { 
    label: 'DAU', 
    value: '45,892', 
    change: '+5.7%', 
    trend: 'up',
    icon: Activity,
    color: 'purple'
  },
  { 
    label: 'MAU', 
    value: '98,234', 
    change: '-2.1%', 
    trend: 'down',
    icon: TrendingUp,
    color: 'orange'
  },
];

const contentKpiData = [
  { 
    label: 'Tổng bài viết', 
    value: '45,123', 
    change: '+15.2%', 
    trend: 'up',
    icon: FileText,
    color: 'emerald'
  },
  { 
    label: 'Tổng bình luận', 
    value: '234,567', 
    change: '+18.4%', 
    trend: 'up',
    icon: MessageSquare,
    color: 'blue'
  },
  { 
    label: 'Tổng reactions', 
    value: '1.2M', 
    change: '+22.1%', 
    trend: 'up',
    icon: ThumbsUp,
    color: 'pink'
  },
  { 
    label: 'Báo cáo chờ xử lý', 
    value: '23', 
    change: '-12.5%', 
    trend: 'down',
    icon: Flag,
    color: 'red'
  },
];

const moderationData = [
  { label: 'Báo cáo đã xử lý', value: '1,456', icon: CheckCircle, color: 'green' },
  { label: 'Moderators hoạt động', value: '12', icon: Shield, color: 'purple' },
];

const userGrowthData = [
  { id: 'ug-1', date: '10/03', users: 42000 },
  { id: 'ug-2', date: '11/03', users: 43200 },
  { id: 'ug-3', date: '12/03', users: 43800 },
  { id: 'ug-4', date: '13/03', users: 44100 },
  { id: 'ug-5', date: '14/03', users: 44500 },
  { id: 'ug-6', date: '15/03', users: 45200 },
  { id: 'ug-7', date: '16/03', users: 45892 },
];

const contentActivityData = [
  { id: 'ca-1', date: '10/03', posts: 520, comments: 1840, reactions: 8200 },
  { id: 'ca-2', date: '11/03', posts: 580, comments: 2100, reactions: 9100 },
  { id: 'ca-3', date: '12/03', posts: 640, comments: 2350, reactions: 10200 },
  { id: 'ca-4', date: '13/03', posts: 590, comments: 2180, reactions: 9800 },
  { id: 'ca-5', date: '14/03', posts: 710, comments: 2620, reactions: 11500 },
  { id: 'ca-6', date: '15/03', posts: 680, comments: 2480, reactions: 10900 },
  { id: 'ca-7', date: '16/03', posts: 750, comments: 2890, reactions: 12300 },
];

const recentReports = [
  { 
    id: 'RP-1001', 
    type: 'Spam', 
    reporter: 'Nguyễn Văn A', 
    target: 'Bài viết #45234',
    status: 'pending',
    time: '5 phút trước'
  },
  { 
    id: 'RP-1002', 
    type: 'Ngôn từ thù địch', 
    reporter: 'Trần Thị B', 
    target: 'Bình luận #89123',
    status: 'reviewing',
    time: '15 phút trước'
  },
  { 
    id: 'RP-1003', 
    type: 'Nội dung không phù hợp', 
    reporter: 'Lê Văn C', 
    target: 'Bài viết #45189',
    status: 'resolved',
    time: '1 giờ trước'
  },
  { 
    id: 'RP-1004', 
    type: 'Giả mạo', 
    reporter: 'Phạm Thị D', 
    target: 'Tài khoản @fake_user',
    status: 'pending',
    time: '2 giờ trước'
  },
];

const recentActiveUsers = [
  { 
    id: '1', 
    name: 'Nguyễn Minh Tuấn', 
    email: 'tuan.nguyen@email.com',
    posts: 45,
    comments: 128,
    status: 'active',
    joinDate: '2024-01-15'
  },
  { 
    id: '2', 
    name: 'Trần Thảo Vy', 
    email: 'vy.tran@email.com',
    posts: 38,
    comments: 92,
    status: 'active',
    joinDate: '2024-02-10'
  },
  { 
    id: '3', 
    name: 'Lê Hoàng Nam', 
    email: 'nam.le@email.com',
    posts: 52,
    comments: 156,
    status: 'active',
    joinDate: '2024-01-20'
  },
  { 
    id: '4', 
    name: 'Phạm Thu Hà', 
    email: 'ha.pham@email.com',
    posts: 29,
    comments: 74,
    status: 'active',
    joinDate: '2024-03-05'
  },
  { 
    id: '5', 
    name: 'Võ Đức Anh', 
    email: 'anh.vo@email.com',
    posts: 41,
    comments: 118,
    status: 'active',
    joinDate: '2024-02-28'
  },
];

const systemHealthData = [
  { 
    name: 'Server Status', 
    status: 'healthy', 
    value: '99.9%', 
    icon: Server,
    description: 'Uptime 30 ngày'
  },
  { 
    name: 'Database', 
    status: 'healthy', 
    value: '45ms', 
    icon: Database,
    description: 'Response time trung bình'
  },
  { 
    name: 'Queue', 
    status: 'warning', 
    value: '156', 
    icon: Zap,
    description: 'Jobs đang xử lý'
  },
  { 
    name: 'Storage', 
    status: 'healthy', 
    value: '68%', 
    icon: HardDrive,
    description: 'Đã sử dụng'
  },
];

// Components
const KPICard = ({ data }: { data: any }) => {
  const Icon = data.icon;
  const isPositive = data.trend === 'up';
  
  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    pink: 'bg-pink-50 text-pink-600',
    red: 'bg-red-50 text-red-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{data.label}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{data.value}</h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <ArrowUp className="w-4 h-4 text-green-600" />
            ) : (
              <ArrowDown className="w-4 h-4 text-red-600" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {data.change}
            </span>
            <span className="text-xs text-gray-500 ml-1">vs tuần trước</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[data.color as keyof typeof colorClasses]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    pending: { label: 'Chờ xử lý', className: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    reviewing: { label: 'Đang xem xét', className: 'bg-blue-50 text-blue-700 border-blue-200' },
    resolved: { label: 'Đã xử lý', className: 'bg-green-50 text-green-700 border-green-200' },
    active: { label: 'Hoạt động', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
};

const SystemHealthCard = ({ data }: { data: any }) => {
  const Icon = data.icon;
  
  const statusConfig = {
    healthy: { className: 'bg-green-50 border-green-200', iconColor: 'text-green-600', dotColor: 'bg-green-500' },
    warning: { className: 'bg-yellow-50 border-yellow-200', iconColor: 'text-yellow-600', dotColor: 'bg-yellow-500' },
    error: { className: 'bg-red-50 border-red-200', iconColor: 'text-red-600', dotColor: 'bg-red-500' },
  };

  const config = statusConfig[data.status as keyof typeof statusConfig];

  return (
    <div className={`rounded-2xl p-5 border ${config.className}`}>
      <div className="flex items-start justify-between mb-3">
        <Icon className={`w-6 h-6 ${config.iconColor}`} />
        <div className={`w-2 h-2 rounded-full ${config.dotColor} animate-pulse`}></div>
      </div>
      <h4 className="text-sm font-medium text-gray-700 mb-1">{data.name}</h4>
      <p className="text-2xl font-bold text-gray-900 mb-1">{data.value}</p>
      <p className="text-xs text-gray-600">{data.description}</p>
    </div>
  );
};

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Tổng quan hệ thống KConnecta Social Platform</p>
      </div>

      {/* User Statistics */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Thống kê người dùng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.map((item, index) => (
            <KPICard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* Content Statistics */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Thống kê nội dung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contentKpiData.map((item, index) => (
            <KPICard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* Moderation Statistics */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Thống kê moderation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moderationData.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              green: 'bg-green-50 text-green-600',
              purple: 'bg-purple-50 text-purple-600',
            };
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tăng trưởng người dùng (7 ngày)</h3>
          <div className="h-[300px] flex items-end justify-between gap-2 px-4">
            {userGrowthData.map((item, idx) => {
              const maxValue = 46000;
              const height = (item.users / maxValue) * 100;
              return (
                <div key={item.id} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col justify-end" style={{ height: '280px' }}>
                    <div 
                      className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg hover:from-emerald-600 hover:to-emerald-500 transition-all cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        {item.users.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{item.date}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Activity Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoạt động nội dung (7 ngày)</h3>
          <div className="mb-4 flex gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-600">Bài viết</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-600">Bình luận</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <span className="text-xs text-gray-600">Reactions</span>
            </div>
          </div>
          <div className="h-[250px] flex items-end justify-between gap-3 px-4">
            {contentActivityData.map((item) => {
              const maxPosts = 800;
              const maxComments = 3000;
              const maxReactions = 13000;
              const postsHeight = (item.posts / maxPosts) * 100;
              const commentsHeight = (item.comments / maxComments) * 100;
              const reactionsHeight = (item.reactions / maxReactions) * 100;
              
              return (
                <div key={item.id} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center gap-1" style={{ height: '230px' }}>
                    <div 
                      className="flex-1 bg-emerald-500 rounded-t hover:bg-emerald-600 transition-colors cursor-pointer"
                      style={{ height: `${postsHeight}%` }}
                      title={`${item.posts} posts`}
                    />
                    <div 
                      className="flex-1 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer"
                      style={{ height: `${commentsHeight}%` }}
                      title={`${item.comments} comments`}
                    />
                    <div 
                      className="flex-1 bg-pink-500 rounded-t hover:bg-pink-600 transition-colors cursor-pointer"
                      style={{ height: `${reactionsHeight}%` }}
                      title={`${item.reactions} reactions`}
                    />
                  </div>
                  <span className="text-xs text-gray-600">{item.date}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Reports */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Báo cáo gần đây</h3>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Loại</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Thời gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{report.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{report.type}</p>
                        <p className="text-xs text-gray-500">{report.target}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={report.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {report.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Active Users */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Người dùng hoạt động</h3>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Người dùng</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Hoạt động</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentActiveUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3 text-xs text-gray-600">
                        <span>{user.posts} posts</span>
                        <span>{user.comments} comments</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={user.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* System Health */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">System Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemHealthData.map((item, index) => (
            <SystemHealthCard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* API Error Rate */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">API Error Rate</h3>
              <p className="text-sm text-gray-600 mt-1">Tỷ lệ lỗi API trong 24h</p>
            </div>
            <div className="p-3 rounded-xl bg-green-50 text-green-600">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-bold text-gray-900">0.12%</h2>
            <div className="flex items-center gap-1 text-green-600">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm font-medium">-0.05%</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '0.12%' }}></div>
            </div>
            <span className="text-xs">Target: &lt;0.5%</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Average Response Time</h3>
              <p className="text-sm text-gray-600 mt-1">Thời gian phản hồi trung bình</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
              <Zap className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-bold text-gray-900">126ms</h2>
            <div className="flex items-center gap-1 text-green-600">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm font-medium">-15ms</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <span className="text-xs">Target: &lt;200ms</span>
          </div>
        </div>
      </section>
    </div>
  );
};