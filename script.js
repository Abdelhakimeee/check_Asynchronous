console.log("abdo")
const Fcontainer = document.getElementById('container')


async function getData(){
    try {
        const response= await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error("Failed to fetch products")
        }
        const datas= await response.json();
        
        const fragment = document.createDocumentFragment();
        Fcontainer.innerHTML = "";
        
        datas.forEach(onedata => {

            let card=`
            <div class="product">
                <img src="${onedata.image}">
                <h2>${onedata.title}</h2>
                <h3>${onedata.price} $</h3>
            </div>`;
    
            Fcontainer.innerHTML +=card
        });
        
         Fcontainer.apppendChild(fragment);
    } catch (error){
        console.log.error('Error fetching data:',error.message);
        Fcontainer.innerHTML = "<p>Failed to fetch data. Please try again later.</p>";
    }
    }






getData();