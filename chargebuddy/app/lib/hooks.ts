import { useQuery } from '@tanstack/react-query';
import { fetchDashboardStats, fetchRecentActivity, fetchChargingRecommendations } from './api';

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats,
  });
}

export function useRecentActivity() {
  return useQuery({
    queryKey: ['recentActivity'],
    queryFn: fetchRecentActivity,
  });
}

export function useChargingRecommendations() {
  return useQuery({
    queryKey: ['chargingRecommendations'],
    queryFn: fetchChargingRecommendations,
  });
} 