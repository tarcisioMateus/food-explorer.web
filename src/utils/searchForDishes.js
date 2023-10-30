import { api } from '../services'

export async function searchForDishes({ search, setData }) {
  try {

    if (search.includes(',')) {
      //if there is a comma ',' look for it based on the ingredients.
      
      const response = await api.get(`/dishes?name=${''}&ingredients=${search}`, { withCredentials: true })
      const info = response.data
      setData(info)

    } else  if (search.trim().length > 0) {
      //if there is no comma ',' look for it based on the name.

      const response = await api.get(`/dishes?name=${search}&ingredients=${''}`, { withCredentials: true })
      if (response.data.length) {
        const info = response.data
        setData(info)
      } else {
      //if there is no comma ',' , and found nothing with the name, look for it based on the ingredients.

        const ingredients = search.replaceAll(' ', ',')
        const response = await api.get(`/dishes?name=${''}&ingredients=${ingredients}`, { withCredentials: true })
        const info = response.data
        setData(info)
      }
    } else {
      setData([])
    }
    
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message)
    } else {
      alert(error)
    }
  }
}
