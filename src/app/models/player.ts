export class Player{
    private name: string;
    private numberOfHoles: number;
    scores: string[] = new Array(18);
    total: number;

    constructor(name: string, numberOfHoles: number){
        this.name = name;
        this.numberOfHoles = numberOfHoles;
    }

    setName(name: string): void{
        this.name = name;
    }

    setScore(score: string, index: number): void{
        this.scores[index] = score;
    }

    setNumOfHoles(holes: number){
        this.numberOfHoles = holes;
    }

    changeArray(holes: number){
        const copiedArray = this.scores.slice(0, holes);
        const resArray = new Array(18 - holes);
        this.scores = copiedArray.concat(resArray);
    }

    calculateTotal(): number{
        let res = 0;
        for (let i = 0; i < this.numberOfHoles; i++){
            if (this.scores[i] == null){
                continue;
            }
            res += Number(this.scores[i]);
        }

        // 合計を保持しておく
        this.total = res;
        return res;
    }
}