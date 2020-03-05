var Player = /** @class */ (function () {
    function Player(PlayerNo, teamName) {
        this.playerRuns = [];
        this.name = teamName + "player" + PlayerNo;
    }
    Player.prototype.updateRuns = function (runs, currentPlayerRunID) {
        this.playerRuns.push(runs);
        document.getElementById(currentPlayerRunID).value = this.playerRuns.reduce(function (sum, num) {
            return sum + num;
        }).toString();
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team(TeamName) {
        this.wickets = 0;
        this.retiredHurts = 0;
        this.totalRuns = 0;
        this.Players = [];
        this.over = 0;
        this.overBalls = 0;
        this.overDisp = "";
        for (var i = 1; i <= 10; i++) {
            this.Players.push(new Player(i, TeamName));
        }
    }
    Team.prototype.update_totalRuns = function (run, totalRunsID, currentDeliveryRunID) {
        this.totalRuns += run;
        document.getElementById(totalRunsID).value = this.totalRuns.toString();
        document.getElementById(currentDeliveryRunID).value = run.toString();
    };
    Team.prototype.update_wickets_RH = function (run, wicketsID, retiredHurtID, balls, currentPlayerPlayedBallsID, currentOverRunID) {
        document.getElementById(currentPlayerPlayedBallsID).value = balls.toString();
        if (run == 0) {
            this.wickets += 1;
            document.getElementById(wicketsID).value = this.wickets.toString();
            this.overDisp += "W ";
        }
        else if (balls == 6) {
            this.retiredHurts += 1;
            document.getElementById(retiredHurtID).value = this.retiredHurts.toString();
            this.overDisp += run + "+RH ";
        }
        else
            this.overDisp += run.toString() + " ";
        document.getElementById(currentOverRunID).value = this.overDisp;
    };
    Team.prototype.update_over = function (oversID) {
        if (this.overBalls < 5) {
            this.over = parseFloat((this.over + 0.1).toFixed(1));
            document.getElementById(oversID).value = this.over.toString();
            this.overBalls += 1;
        }
        else {
            this.over = Math.ceil(this.over);
            document.getElementById(oversID).value = this.over.toString();
            this.overBalls = 0;
            this.overDisp = "";
        }
    };
    Team.prototype.update_current_batsmen = function (currentPlayerID) {
        document.getElementById(currentPlayerID).value = this.Players[this.wickets + this.retiredHurts].name;
    };
    Team.prototype.update_commentary = function (run) {
        if (run == 0)
            return "wicket!!!! The Batsmen lost his wicket";
        else if (run == 1)
            return "Batsmen takes a sigle";
        else if (run == 2)
            return "Batsmen takes a double";
        else if (run == 3)
            return "Batsmen runs hard and takes a three";
        else if (run == 4)
            return "Nice shot to get a boundary";
        else if (run == 5)
            return "Five runs of the byes";
        else
            return "Ball gone over the ropes for six";
    };
    return Team;
}());
var Match = /** @class */ (function () {
    function Match(Team1, Team2) {
        this.Teams = {};
        this.totalovers = 5;
        this.Teams[Team1] = new Team(Team1);
        this.Teams[Team2] = new Team(Team2);
    }
    Match.prototype.checkstatus = function (t1, t2, striket2, strikesc) {
        if (this.Teams[t2].totalRuns > this.Teams[t1].totalRuns) {
            document.getElementById(striket2).disabled = true;
            document.getElementById(strikesc).disabled = false;
            this.Store();
        }
    };
    Match.prototype.Store = function () {
        localStorage.setItem('MI', JSON.stringify(this.Teams['MI'].Players));
        localStorage.setItem('CSK', JSON.stringify(this.Teams['CSK'].Players));
        localStorage.setItem('totalRunsMI', JSON.stringify(this.Teams['MI'].totalRuns));
        localStorage.setItem('totalRunsCSK', JSON.stringify(this.Teams['CSK'].totalRuns));
    };
    return Match;
}());
var objectMatch = new Match('MI', 'CSK');
var startMatch = function (strike, start) {
    document.getElementById(start).disabled = true;
    document.getElementById(strike).disabled = false;
};
var updateScoreBoard = function (teamID, totalRunsID, wicketsID, retiredHurtID, currentDeliveryRunID, commentaryID, currentPlayerID, currentPlayerRunID, currentPlayerPlayedBallsID, oversID, currentOverRunID, strikeID) {
    var run = (Math.floor(Math.random() * 10)) % 7;
    objectMatch.Teams[teamID].update_current_batsmen(currentPlayerID);
    objectMatch.Teams[teamID].update_totalRuns(run, totalRunsID, currentDeliveryRunID);
    var wickets = objectMatch.Teams[teamID].wickets;
    var retiredHurts = objectMatch.Teams[teamID].retiredHurts;
    objectMatch.Teams[teamID].Players[wickets + retiredHurts].updateRuns(run, currentPlayerRunID);
    var currentPlayerPlayedBalls = objectMatch.Teams[teamID].Players[wickets + retiredHurts].playerRuns.length;
    objectMatch.Teams[teamID].update_wickets_RH(run, wicketsID, retiredHurtID, currentPlayerPlayedBalls, currentPlayerPlayedBallsID, currentOverRunID);
    objectMatch.Teams[teamID].update_over(oversID);
    document.getElementById(commentaryID).value = objectMatch.Teams[teamID].update_commentary(run);
    wickets = objectMatch.Teams[teamID].wickets;
    retiredHurts = objectMatch.Teams[teamID].retiredHurts;
    if (wickets + retiredHurts == 10 || objectMatch.Teams[teamID].over == objectMatch.totalovers) {
        document.getElementById(strikeID).disabled = true;
        if (strikeID == "strikeMI")
            document.getElementById("strikeCSK").disabled = false;
        else {
            document.getElementById("strikeCSK").disabled = true;
            document.getElementById("scoreCard").disabled = false;
            objectMatch.Store();
        }
    }
    objectMatch.checkstatus('MI', 'CSK', 'strikeCSK', 'scoreCard');
};
