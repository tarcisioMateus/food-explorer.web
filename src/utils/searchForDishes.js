import { api } from '../services'

export async function searchForDishes(search) {
  try {

    if (search.includes(',')) {
      const response = await api.get(`/dishes?name=${''}&ingredients=${search}`, { withCredentials: true })
      return (response.data)

    } else {
      const response = await api.get(`/dishes?name=${search}&ingredients=${''}`, { withCredentials: true })
      if (response.data.length) {
        return (response.data)
      }
      const ingredients = search.replaceAll(' ', ',')
      response = await api.get(`/dishes?name=${''}&ingredients=${ingredients}`, { withCredentials: true })
      return (response.data)
    }
    
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message)
    }
  }
}
