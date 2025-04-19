import toast from "react-hot-toast"

export const getFavoritePhones = ()=>{
    let favorites = []
    const getFavorites = localStorage.getItem('favorites')
    if(getFavorites){
        favorites = JSON.parse(getFavorites)
    }
    return favorites
    
}
export const addToLSFavoritePhones = phone =>{
    const favorites = getFavoritePhones()
    const newFavorites = favorites.find(p => p.id === phone.id)
    if(newFavorites) return toast.error("Already Added")
    favorites.push(phone)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully Added!')
}


export const removeFavorites = id=>{
    const favorites = getFavoritePhones()
    const remaining = favorites.filter (p => p.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
}


export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) return JSON.parse(cart)
    return []
  }
  
  export const addToCart = phone => {
    const cart = getCart()
    const isExist = cart.find(p => p.id === phone.id)
    if (isExist) return toast.error('Phone Already Added')
    cart.push(phone)
    toast.success('Phone Added Successfully!!')
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  export const removeCart = id => {
    const cart = getCart()
    const remainingCart = cart.filter(phone => phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCart))
  }