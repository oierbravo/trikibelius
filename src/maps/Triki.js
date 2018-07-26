import BbEb from './BbEb'
const defaultTune = 'BbEb'

/*class TrikiNumbers {
    constructor(tune = defaultTune) {
          this.tune = tune;
          this.maps = {
              BbEb: BbEb
          }
          
      }
      
      getAlternative(note,tune = defaultTune){

      }
      getNote(number,direction,tune = defaultTune){

      }
      getNumbers(note,tune = defaultTune){

      }
      getMap(tune = defaultTune){
          return this.maps[tune]
      }
      test(){
          console.log('tttttttt');
      }

}*/
const maps = {
    BbEb: BbEb
}
export const TrikiNumbers = {
    getMap: (tune =defaultTune) =>maps[tune].getMap(),
    getAlternative: (note,tune =defaultTune) => maps[tune].getAlternative(note),
    getNote: (number,direction,tune =defaultTune) => maps[tune].getNote(number,direction),
    getNumbers: (note,tune =defaultTune) => maps[tune].getNumbers(note)
}
export default TrikiNumbers