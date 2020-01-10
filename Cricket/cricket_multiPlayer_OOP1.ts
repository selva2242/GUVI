interface teamsStructure{
    [key:string] : any
}

class Player{
    name:string
    playerRuns: Array<number> = []
    constructor(PlayerNo:number, teamName:string){
        this.name = `${teamName}player${PlayerNo}`
    }

    updateRuns(runs:number, currentPlayerRunID:string){
        this.playerRuns.push(runs);
        (<HTMLInputElement>document.getElementById(currentPlayerRunID)).value = this.playerRuns.reduce((sum,num)=>{
          return sum+num
       }).toString()
    }

}

class Team{
    wickets: number = 0
    retiredHurts: number = 0
    totalRuns:number = 0
    Players: Array<Player> = []
    over: number = 0
    overBalls: number = 0
    overDisp:string = ""
    constructor(TeamName: string){
        for(let i=1;i<=10;i++){
            this.Players.push(new Player(i,TeamName))
        }
    }

    update_totalRuns(run:number, totalRunsID:string, currentDeliveryRunID:string){
        this.totalRuns += run;
        (<HTMLInputElement>document.getElementById(totalRunsID)).value = this.totalRuns.toString();
        (<HTMLInputElement>document.getElementById(currentDeliveryRunID)). value = run.toString()
    }

    update_wickets_RH(run:number, wicketsID:string, retiredHurtID:string, balls:number, currentPlayerPlayedBallsID:string, currentOverRunID:string){
        (<HTMLInputElement>document.getElementById(currentPlayerPlayedBallsID)).value = balls.toString()
        if(run==0){
            this.wickets += 1;
            (<HTMLInputElement>document.getElementById(wicketsID)).value = this.wickets.toString()
            this.overDisp+="W "
        }
        else if(balls==6){
            this.retiredHurts+=1;
            (<HTMLInputElement>document.getElementById(retiredHurtID)).value = this.retiredHurts.toString()
            this.overDisp+=`${run}+RH `
        }
        else
            this.overDisp+=run.toString()+" "; 
        (<HTMLInputElement>document.getElementById(currentOverRunID)).value = this.overDisp
    }

    update_over(oversID:string){
        if(this.overBalls<5){
            this.over = parseFloat((this.over+0.1).toFixed(1));
            (<HTMLInputElement>document.getElementById(oversID)).value = this.over.toString()
            this.overBalls+=1
        }
        else{
            this.over = Math.ceil(this.over);
            (<HTMLInputElement>document.getElementById(oversID)).value = this.over.toString()
            this.overBalls = 0
            this.overDisp = ""
        }
    }

    update_current_batsmen(currentPlayerID:string){
        (<HTMLInputElement>document.getElementById(currentPlayerID)).value = this.Players[this.wickets+this.retiredHurts].name

    }

    update_commentary(run:number){
        if(run==0)
            return "wicket!!!! The Batsmen lost his wicket"
        else if(run==1)
            return "Batsmen takes a sigle"
        else if(run==2)
            return "Batsmen takes a double"
        else if(run==3)
            return "Batsmen runs hard and takes a three"
        else if(run==4)
            return "Nice shot to get a boundary"
        else if(run==5)
            return "Five runs of the byes"
        else 
            return "Ball gone over the ropes for six"
    }

}

class Match{
    Teams: teamsStructure = {}
    totalovers:number =5
    constructor(Team1:string, Team2:string){
            this.Teams[Team1] = new Team(Team1)
            this.Teams[Team2] = new Team(Team2)
    }
    checkstatus(t1:string, t2:string, striket2:string, strikesc:string){
        if (this.Teams[t2].totalRuns > this.Teams[t1].totalRuns){
            (<HTMLInputElement>document.getElementById(striket2)).disabled = true;
            (<HTMLInputElement>document.getElementById(strikesc)).disabled = false;
            this.Store()
        }
    }

    Store(){
        localStorage.setItem('MI',JSON.stringify(this.Teams['MI'].Players))
        localStorage.setItem('CSK', JSON.stringify(this.Teams['CSK'].Players))
        localStorage.setItem('totalRunsMI', JSON.stringify(this.Teams['MI'].totalRuns))
        localStorage.setItem('totalRunsCSK', JSON.stringify(this.Teams['CSK'].totalRuns))

    }
}

let objectMatch = new Match('MI', 'CSK')

let startMatch = (strike:string, start:string) =>{

    (<HTMLInputElement>document.getElementById(start)).disabled = true;
    (<HTMLInputElement>document.getElementById(strike)).disabled = false
}

let updateScoreBoard = (teamID:string, totalRunsID:string, wicketsID:string, retiredHurtID:string, currentDeliveryRunID:string, commentaryID:string, currentPlayerID:string, currentPlayerRunID:string, currentPlayerPlayedBallsID:string, oversID:string, currentOverRunID:string, strikeID:string) => {
    let run = (Math.floor(Math.random() * 10))%7
    objectMatch.Teams[teamID].update_current_batsmen(currentPlayerID)
    objectMatch.Teams[teamID].update_totalRuns(run, totalRunsID, currentDeliveryRunID)
    let wickets = objectMatch.Teams[teamID].wickets
    let retiredHurts = objectMatch.Teams[teamID].retiredHurts
    objectMatch.Teams[teamID].Players[wickets+retiredHurts].updateRuns(run, currentPlayerRunID)
    let currentPlayerPlayedBalls = objectMatch.Teams[teamID].Players[wickets+retiredHurts].playerRuns.length
    objectMatch.Teams[teamID].update_wickets_RH(run, wicketsID, retiredHurtID, currentPlayerPlayedBalls, currentPlayerPlayedBallsID, currentOverRunID)
    objectMatch.Teams[teamID].update_over(oversID);
    (<HTMLInputElement>document.getElementById(commentaryID)).value = objectMatch.Teams[teamID].update_commentary(run)
    wickets = objectMatch.Teams[teamID].wickets
    retiredHurts = objectMatch.Teams[teamID].retiredHurts
    if(wickets+retiredHurts==10 || objectMatch.Teams[teamID].over==objectMatch.totalovers){
        (<HTMLInputElement>document.getElementById(strikeID)).disabled = true
        if(strikeID=="strikeMI")
            (<HTMLInputElement>document.getElementById("strikeCSK")).disabled = false
        else{
            (<HTMLInputElement>document.getElementById("strikeCSK")).disabled = true;
            (<HTMLInputElement>document.getElementById("scoreCard")).disabled = false
            objectMatch.Store()
        }
    }
    objectMatch.checkstatus('MI', 'CSK','strikeCSK', 'scoreCard')
}

