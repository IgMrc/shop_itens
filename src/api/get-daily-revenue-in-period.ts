import { api } from '@/lib/axios'

export type GetDailyRevenueInPopularResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPopular() {
  const response = await api.get<GetDailyRevenueInPopularResponse>(
    '/metrics/daily-receipt-in-period',
  )

  return response.data
}
