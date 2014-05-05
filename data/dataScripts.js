
// creates 
function returnMatrix(tournamentSummary, colors) {
    var matrix = [],
        newRow = [],
        dictionary = {},
        i;
    for (i = 0; i < colors.length; i++) {
        newRow.push(0);
    }
    for (i = 0; i < colors.length; i++) {
        dictionary[colors[i].name] = i;
        matrix.push(newRow);
    }
    angular.forEach(tournamentSummary, function (game) {
        var goalsAgainst,
            goalsFor,
            row = dictionary[game['Team 1']],
            column = dictionary[game['Team 2']];
        goalsAgainst = matrix[row][column];
        goalsFor = matrix[column][row];
        matrix[row][column] = goalsAgainst + parseInt(game['Team 2 Goals']);
        matrix[column][row] = goalsFor + parseInt(game['Team 1 Goals']);
    });

    return matrix;
}


// for game in games, 
