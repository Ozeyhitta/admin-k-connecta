import { useForm } from "react-hook-form@7.55.0";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { LoginFormData } from "../../types/auth.types";

export const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login data:", data);
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full"
    >
      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Email
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Mail size={18} strokeWidth={2} />
          </div>
          <input
            type="email"
            placeholder="ban@example.com"
            className={`w-full h-[44px] pl-12 pr-4 bg-gray-50 border ${
              errors.email ? "border-red-300" : "border-gray-300"
            } rounded-xl text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all`}
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email không hợp lệ",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Mật khẩu
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Lock size={18} strokeWidth={2} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu của bạn"
            className={`w-full h-[44px] pl-12 pr-12 bg-gray-50 border ${
              errors.password ? "border-red-300" : "border-gray-300"
            } rounded-xl text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all`}
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded p-1"
          >
            {showPassword ? (
              <EyeOff size={18} strokeWidth={2} />
            ) : (
              <Eye size={18} strokeWidth={2} />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="remember" className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500/30 cursor-pointer"
            {...register("rememberMe")}
          />
          <span className="text-sm text-gray-600 select-none">
            Ghi nhớ tôi
          </span>
        </label>
        <a
          href="#"
          className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          Quên mật khẩu?
        </a>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[44px] bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mb-5"
      >
        {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      {/* Divider */}
      <div className="relative mb-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Hoặc</span>
        </div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        className="w-full h-[44px] flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl transition-all duration-200 group"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
          Tiếp tục với Google
        </span>
      </button>
    </motion.form>
  );
};
