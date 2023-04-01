export const getProduct = async () => {
    try {
        let res = await fetch('https://fakestoreapi.com/products')
        if (res.ok) {
            let data = await res.json()
            return data
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCategory = async () => {
    try {
        let res = await fetch('https://fakestoreapi.com/products/categories')
        if (res.ok) {
            let data = await res.json()
            return data
        }
    } catch (error) {
        console.log(error);
    }
}

// List Handler

export const clickHandler = (e) => {
    let list = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    e.target.classList.add('active')
}


