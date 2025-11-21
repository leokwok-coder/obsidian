import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import type { UserProfile } from '../../types/timeline';

interface UserProfileFormProps {
  onSubmit: (profile: UserProfile) => void;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    birthDate: '',
    birthPlace: '',
    educationLevel: 'bachelor' as UserProfile['educationLevel']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      birthDate: new Date(formData.birthDate),
      birthPlace: formData.birthPlace,
      educationLevel: formData.educationLevel
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-secondary mb-2 text-center">
            LifeTimeline
          </h1>
          <p className="text-gray-400 text-center mb-6">
            创建你的个人历史时间线
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                出生日期
              </label>
              <input
                type="date"
                required
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-secondary focus:outline-none"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                出生地点
              </label>
              <input
                type="text"
                required
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-secondary focus:outline-none"
                placeholder="例如：北京"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                最高学历
              </label>
              <select
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-secondary focus:outline-none"
                value={formData.educationLevel}
                onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value as UserProfile['educationLevel'] })}
              >
                <option value="primary">小学</option>
                <option value="secondary">中学</option>
                <option value="bachelor">本科</option>
                <option value="master">硕士</option>
                <option value="phd">博士</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              开始探索
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default UserProfileForm;