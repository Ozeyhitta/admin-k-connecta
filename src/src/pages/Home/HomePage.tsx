import { Link } from 'react-router';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="mb-8">
          <div className="inline-flex w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl items-center justify-center shadow-xl shadow-emerald-500/30 mb-6">
            <span className="text-5xl font-bold text-white">K</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          KConnecta Admin
        </h1>
        <p className="text-gray-600 mb-8 text-lg">Chào mừng đến với trang quản trị</p>
        <Link
          to="/login"
          className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40"
        >
          Đăng nhập ngay
        </Link>
      </motion.div>
    </div>
  );
};
