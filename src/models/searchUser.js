async function searchUser(url) {
    await fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                return data
                
            })
    
}

module.exports = searchUser