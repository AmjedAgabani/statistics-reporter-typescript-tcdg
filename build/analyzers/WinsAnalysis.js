"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        // calculation
        const gamesPlayed = this.calculateGamesPlayed(matches, this.team);
        // validation
        if (gamesPlayed == 0) {
            throw new Error(`No teams with the name "${this.team}" played any games.`);
        }
        // calculation
        const wins = this.calculateWins(matches, this.team);
        // user interface
        return `Team "${this.team}" played ${gamesPlayed} games & won ${wins}.`;
    }
    calculateGamesPlayed(matches, team) {
        let instances = 0;
        for (let match of matches) {
            if (match[1] === team) {
                instances++;
            }
            else if (match[2] === team) {
                instances++;
            }
        }
        return instances;
    }
    calculateWins(matches, team) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return wins;
    }
}
exports.WinsAnalysis = WinsAnalysis;
