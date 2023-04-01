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

export const clickHandler = (e, index) => {
    let list = document.querySelectorAll('.list-group-item')
    let badge = document.querySelectorAll('.list-group-item .badge')
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
        badge[i].classList.remove('text-bg-info')
    }
    badge[index].classList.add('text-bg-info')
    e.target.classList.add('active')
}


