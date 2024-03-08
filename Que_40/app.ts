// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album

interface Album {
        artist: string;
        album:string; 
        tracks?:number;}

function make_album(artist:string, album:string, tracks?:number): Album{

        const albumOBJ: Album = {
                artist: artist, 
                album: album, 
        };

        if(tracks !== undefined){
                albumOBJ.tracks = tracks;
        }

        return albumOBJ;

}

const albumNo1: Album = make_album(`The Beatles`, `Abbey Road`);

const albumNo2: Album = make_album(`Michael Jackson`, `Thriller`, 30);

const albumNo3: Album = make_album(`Roberta Flack`, `First Take`, 8);

console.log(albumNo1);

console.log(albumNo2);

console.log(albumNo3);