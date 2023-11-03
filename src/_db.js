let games = [
    {id: '1', title: 'Call of Duty', platform: ['PS4', 'Xbox', 'PC']},
    {id: '2', title: 'FIFA 20', platform: ['PS4', 'Xbox', 'PC']},
    {id: '3', title: 'GTA V', platform: ['PS4', 'Xbox', 'PC']},
    {id: '4', title: 'Minecraft', platform: ['PS4', 'Xbox', 'PC']},
    {id: '5', title: 'Fortnite', platform: ['PS4', 'Xbox', 'PC']},
    {id: '6', title: 'Apex Legends', platform: ['PS4', 'Xbox', 'PC']},
    {id: '7', title: 'League of Legends', platform: ['PC']},
    {id: '8', title: 'Dota 2', platform: ['PC']},
    {id: '9', title: 'Counter-Strike: Global Offensive', platform: ['PC']},
    {id: '10', title: 'Mario Kart 8', platform: ['Switch']},
    {id: '11', title: 'Super Smash Bros. Ultimate', platform: ['Switch']},
]

let authors = [
    {id: '1', name: 'Mario', verified: true},
    {id: '2', name: 'Luigi', verified: false},
    {id: '3', name: 'Peach', verified: true},
    {id: '4', name: 'Bowser', verified: false},
    {id: '5', name: 'Wario', verified: true},
    {id: '6', name: 'Waluigi', verified: false},
    {id: '7', name: 'Yoshi', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content:'Great game!', game_Id: '1', author_Id: '2'},
    {id: '2', rating: 8, content:'Great game!', game_Id: '2', author_Id: '1'},
    {id: '3', rating: 7, content:'Great game!', game_Id: '3', author_Id: '3'},
    {id: '4', rating: 6, content:'Great game!', game_Id: '4', author_Id: '4'},
    {id: '5', rating: 2, content:'Great game!', game_Id: '5', author_Id: '5'},
    {id: '6', rating: 6, content:'Great game!', game_Id: '6', author_Id: '6'},
    {id: '7', rating: 7, content:'Great game!', game_Id: '7', author_Id: '7'},
    {id: '8', rating: 9, content:'Great game!', game_Id: '8', author_Id: '1'},
    {id: '9', rating: 6, content:'Great game!', game_Id: '9', author_Id: '2'},
    {id: '10', rating: 10, content:'Great game!', game_Id: '10', author_Id: '3'},
    {id: '11', rating: 9, content:'Great game!', game_Id: '11', author_Id: '4'},
    {id: '12', rating: 10, content:'Great game!', game_Id: '1', author_Id: '5'},
    {id: '13', rating: 7, content:'Great game!', game_Id: '2', author_Id: '6'}
]

export default {
    games,
    authors,
    reviews
}