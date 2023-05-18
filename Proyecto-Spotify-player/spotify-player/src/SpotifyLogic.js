


export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split("&") 
    .reduce((initial, item)=>{
        let parts = item.split("=") 
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}

const endPoint ="https://accounts.spotify.com/authorize"
const clientID = "96bea2701a4b4dba85d15184f8acd638"
const redirectUri = "http://localhost:3000"
const scopes = [
"user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"playlist-read-private",
"playlist-read-collaborative",
"playlist-modify-private",
"playlist-modify-public",
"user-library-modify",
"user-library-read"
 

]
export const loginUrl = `${endPoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`
