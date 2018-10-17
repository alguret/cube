export interface ISideStructure {


  //игральная кость (dice)
  // суммы противоположных граней равны. В нашем случае всегда 5.
  getLeft(): ISideStructure;
  getRight(): ISideStructure;
  getTop(): ISideStructure;
  getBottom(): ISideStructure;
  getBack(): ISideStructure;
}
