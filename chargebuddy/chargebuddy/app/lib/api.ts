export async function fetchDashboardStats() {
  const response = await fetch('/api/dashboard');
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard stats');
  }
  return response.json();
}

export async function fetchRecentActivity() {
  const response = await fetch('/api/charging?limit=5');
  if (!response.ok) {
    throw new Error('Failed to fetch recent activity');
  }
  return response.json();
}

export async function fetchChargingRecommendations() {
  const response = await fetch('/api/charging/recommendations');
  if (!response.ok) {
    throw new Error('Failed to fetch charging recommendations');
  }
  return response.json();
} 