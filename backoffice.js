const URL = 'https://striveschool-api.herokuapp.com/api/product/'
fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4MjM4ZTEyYjUwYzAwMTQ5ZTYxM2EiLCJpYXQiOjE2ODg3NDA3NTAsImV4cCI6MTY4OTk1MDM1MH0.Qd2T1yfkkRYrFzDtqcNvwnaWE49fWBSWYRSmFnEGGjg"
}
})


const addressBarContent = new URLSearchParams(location.search)

const shopId = addressBarContent.get('id')
console.log('SHOPID', shopId)
if (shopId) {

  document.querySelector('.btn-primary').innerText = 'Modifica'
 
  document.querySelector('h1').innerText = ' Guitars - Modifica'

  fetch(URL + shopId)
    .then((res) => {
      if (res.ok) {
        return res.json() 
      } else {
        throw new Error("Errore ")
      }
    })
    .then((detail) => {
      console.log('DETAIL', detail)
  
      const categoryInput = document.getElementById('shop-category')
      const modelInput = document.getElementById('shop-model')
      const priceInput = document.getElementById('shop-price')
       const shopBrand = document.getElementById('shop-brand')
      const shopImage = document.getElementById('guitar-image')

      categoryInput.value = detail.name
      modelInput.value = detail.description
      priceInput.value = detail.price
      shopImage.value = detail.imageUrl
      shopBrand.value = detail.brand
    
    })
    .catch((err) => console.log(err))
}


const eventForm = document.getElementById('shop-form')
eventForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('raccolgo i dati ')


  const categoryInput = document.getElementById('shop-category')
      const modelInput = document.getElementById('shop-model')
      const priceInput = document.getElementById('shop-price')
       const shopBrand = document.getElementById('shop-brand')
      const shopImage = document.getElementById('guitar-image')
  


  const newVetr = {
    name: categoryInput.value,
    description: modelInput.value,
    price: priceInput.value,
    brand: shopBrand.value,
    imageUrl: shopImage.value,
  }

  console.log('Valori recuperati :', newVetr)


  const URL = 'https://striveschool-api.herokuapp.com/api/product/'
fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4MjM4ZTEyYjUwYzAwMTQ5ZTYxM2EiLCJpYXQiOjE2ODg3NDA3NTAsImV4cCI6MTY4OTk1MDM1MH0.Qd2T1yfkkRYrFzDtqcNvwnaWE49fWBSWYRSmFnEGGjg"
}
})

 
  let urlToUse
  if (shopId) {
    urlToUse = URL + '/' + shopId
  } else {
    urlToUse = URL
  }


  let methodToUse
  if (shopId) {
    methodToUse = 'PUT'
  } else {
    methodToUse = 'POST'
  }

  fetch(urlToUse, {
    method: methodToUse, 
    body: JSON.stringify(newVetr), 
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4MjM4ZTEyYjUwYzAwMTQ5ZTYxM2EiLCJpYXQiOjE2ODg3NDA3NTAsImV4cCI6MTY4OTk1MDM1MH0.Qd2T1yfkkRYrFzDtqcNvwnaWE49fWBSWYRSmFnEGGjg",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
      
        alert('Aggiunto NICE')
        
        categoryInput.value = ''
        modelInput.value = ''
        priceInput.value = ''
        shopImage.value =''
        shopBrand.value = ''
        location.assign('index.html')
      } else {
   
        throw new Error("Errore")
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
const prova = document.querySelector('.card');
fetch('https://striveschool-api.herokuapp.com/api/product/', { method: 'DELETE' })
    .then(() => element.innerHTML = 'Delete successful');
