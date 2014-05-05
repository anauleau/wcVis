
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
    }
    angular.forEach(dictionary, function (value, team) {
        var rowToAdd = [];
        rowToAdd.length = 32;
        angular.forEach(tournamentSummary, function (game) {
            var goalsAgainst,
                goalsFor,
                column1 = dictionary[game['Team 1']],
                column2 = dictionary[game['Team 2']];
            if (team === game['Team 1']) {
                rowToAdd[column2] = parseInt(game['Team 2 Goals']);
            } else if (team === game['Team 2']) {
                rowToAdd[column1] = parseInt(game['Team 1 Goals']);
            }
        });
        matrix.push(rowToAdd);
    });
    return matrix;
}


// for game in games,
            goalsAgainst = matrix[row][column];
            goalsFor = matrix[column][row];
            matrix[row][column] = goalsAgainst + parseInt(game['Team 2 Goals']);
            matrix[column][row] = goalsFor + parseInt(game['Team 1 Goals']);