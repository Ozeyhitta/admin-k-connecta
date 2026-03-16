import { motion } from 'motion/react';
import { LoginForm } from '../components/LoginForm';
import { Link } from 'react-router';

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center p-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 
              }}
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-500/25"
            >
              <span className="text-4xl font-bold text-white leading-none">K</span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Chào mừng trở lại!
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nhập thông tin đăng nhập của bạn
            </p>
          </motion.div>

          {/* Login Form */}
          <LoginForm />

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-gray-100 text-center"
          >
            <p className="text-sm text-gray-600">
              Chưa có tài khoản?{' '}
              <Link
                to="/register"
                className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                Đăng ký ngay
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center text-xs text-gray-500"
        >
          <p>© {new Date().getFullYear()} KConnecta. Bảo lưu mọi quyền.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};