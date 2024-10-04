import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
}

export async function getManagedRestaurantResponse() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
