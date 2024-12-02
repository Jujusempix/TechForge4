abstract class VoteSystem {
  protected votes: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    const sortedEntries = Object.entries(this.votes).sort(
      (a: [string, number], b: [string, number]) => b[1] - a[1]
    );

    const sortedResults: Record<string, number> = sortedEntries.reduce(
      (acc: Record<string, number>, [candidate, votes]: [string, number]) => {
        acc[candidate] = votes;
        return acc;
      },
      {}
    );

    return sortedResults;
  }
}

const election = new Election();
const poll = new Poll();

election.voteFor("Jonatan");
election.voteFor("Wesley");
election.voteFor("Jonatan");
poll.voteFor("Carlos");
poll.voteFor("Jonatan");
poll.voteFor("Jonatan");
poll.voteFor("Wesley");

console.log("Resultados da eleicao:", election.getResults());
console.log("Resultados da enquete:", poll.getResults());