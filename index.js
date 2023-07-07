const URL = 'https://striveschool-api.herokuapp.com/api/product/'
const getShopData = function () {
  fetch(URL,{headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4MjM4ZTEyYjUwYzAwMTQ5ZTYxM2EiLCJpYXQiOjE2ODg3NDA3NTAsImV4cCI6MTY4OTk1MDM1MH0.Qd2T1yfkkRYrFzDtqcNvwnaWE49fWBSWYRSmFnEGGjg"
    }})
    .then((res) => {
      console.log('Response della GET', res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Errore nella chiamata API')
      }
    })
    .then((shops) => {
  
      console.log('SHOPS', shops)
   
      const spinnerContainer = document.getElementById('spinner-container')
      spinnerContainer.classList.add('d-none')
  
      shops.forEach((shop) => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
        newCol.innerHTML = `
          <div class="card">
              <img
                src=${shop.imageUrl}
                class="card-img-top"
                alt="concert placeholder image"
              />
              <div class="card-body">
                  <h5 class="card-title">${shop.category}</h5>
                  <p class="card-text">
                    ${shop.model}
                  </p>
                  <p class="card-text">
                  ${shop.brand}
                </p>
                  <p class="card-text fw-bold">
                    ${shop.price}€
                  </p>
                  <a href="./detail.html?id=${shop._id}" class="btn btn-primary">Scopri di più</a>
                  <a href="backoffice.html?id=${shop._id}"><button type="submit" class="btn btn-info" id="modifica">
                  Modifica
                 </button></a>
                </div>
            </div>
        `
        const shopRow = document.getElementById('shops-row')
        console.log(shopRow)
        shopRow.appendChild(newCol)

      })
    })
    .catch((err) => {
      console.log(err)
    })
}

getShopData()
