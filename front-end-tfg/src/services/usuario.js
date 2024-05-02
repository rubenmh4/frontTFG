import axios from 'axios'


export const getUserChat = ()=> {

    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
        console.log(response.results)
    })

}