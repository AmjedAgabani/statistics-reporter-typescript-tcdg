import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    // calculation
    const gamesPlayed = this.calculateGamesPlayed(matches, this.team);

    // validation
    if (gamesPlayed == 0) {
      throw new Error(
        `No teams with the name "${this.team}" played any games.`
      );
    }

    // calculation
    const wins = this.calculateWins(matches, this.team);

    // user interface
    return `Team "${this.team}" played ${gamesPlayed} games & won ${wins}.`;
  }

  calculateGamesPlayed(matches: MatchData[], team: string): number {
    let instances = 0;

    for (let match of matches) {
      if (match[1] === team) {
        instances++;
      } else if (match[2] === team) {
        instances++;
      }
    }

    return instances;
  }

  calculateWins(matches: MatchData[], team: string): number {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return wins;
  }
}
