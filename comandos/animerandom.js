//Código hecho por matias-crypto y //modificado por Diego 

//import animeNames from '../lib/anime_names.json';

var handler = async (m, { conn }) => {
  const randomAnime = animeNames[Math.floor(Math.random() * animeNames.length)];
  conn.reply(m.chat, `🎬 Nombre de anime aleatorio: *${randomAnime}*`, m);
};
handler.help = ["anime"];
handler.tags = ["random"];
handler.command = ["randoma", "animr"];
handler.dolares = 1
export default handler;

global.animeNames = 
[
    "Naruto",
    "Dragon Ball",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "My Hero Academia",
    "Tokyo Ghoul",
    "Sword Art Online",
    "Fullmetal Alchemist",
    "Demon Slayer",
    "Hunter x Hunter",
    "One Punch Man",
    "Fairy Tail",
    "Bleach",
    "Naruto Shippuden",
    "JoJo's Bizarre Adventure",
    "Black Clover",
    "Neon Genesis Evangelion",
    "Code Geass",
    "Steins;Gate",
    "Dragon Ball Z",
    "Pokemon",
    "Sailor Moon",
    "Yu Yu Hakusho",
    "Cowboy Bebop",
    "Inuyasha",
    "Death Parade",
    "Boku no Pico",
    "Prison School",
    "Fruits Basket",
    "Akame ga Kill!",
    "Clannad",
    "Violet Evergarden",
    "Haikyuu!!",
    "Attack on Titan",
    "Re:Zero",
    "High School DxD",
    "No Game No Life",
    "Angel Beats!",
    "Mirai Nikki",
    "The Seven Deadly Sins",
    "Soul Eater",
    "Tokyo Ghoul:re",
    "Blue Exorcist",
    "Assassination Classroom",
    "Danganronpa",
    "Parasyte",
    "Noragami",
    "Kuroko no Basket",
    "Psycho-Pass",
    "Gurren Lagann",
    "Durarara!!",
    "Elfen Lied",
    "Kill la Kill",
    "Love Live!",
    "Fate/stay night",
    "Toradora!",
    "Your Lie in April",
    "Gintama",
    "Hellsing",
    "Mob Psycho 100",
    "Tokyo Revengers",
    "Demon Slayer: Kimetsu no Yaiba",
    "The Promised Neverland",
    "Fire Force",
    "Black Butler",
    "The Rising of the Shield Hero",
    "Attack on Titan: Junior High",
    "KonoSuba: God's Blessing on This Wonderful World!",
    "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
    "The Ancient Magus' Bride",
    "Charlotte",
    "Sakura Trick",
    "My Teen Romantic Comedy SNAFU",
    "Black Bullet",
    "Terror in Resonance",
    "Steins;Gate 0",
    "Re:Creators",
    "Bungo Stray Dogs",
    "The Quintessential Quintuplets",
    "Land of the Lustrous",
    "The Disastrous Life of Saiki K.",
    "Banana Fish",
    "A Silent Voice",
    "A Whisker Away",
    "Nausicaä of the Valley of the Wind",
    "Howl's Moving Castle",
    "Castle in the Sky",
    "Princess Mononoke",
    "My Neighbor Totoro",
    "Spirited Away",
    "Grave of the Fireflies",
    "Wolf Children",
    "The Tale of the Princess Kaguya"
]