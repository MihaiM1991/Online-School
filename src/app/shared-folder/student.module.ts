export interface Student {
  name: string;
  sport?: [
    {
      grades: number;
      date: Date;
    }
  ];
  science?: [
    {
      grades: number;
      date: Date;
    }
  ];
  music?: [
    {
      grades: number;
      date: Date;
    }
  ];
  history?: [
    {
      grades: number;
      date: Date;
    }
  ];
  math?: [
    {
      grades: number;
      date: Date;
    }
  ];
}
